//创建一个store，当前状态树、当前rootReducer，还有订阅的事件集合都是私有变量。
//创建一个store的时候，会先通过dispatch一个初始化action来执行rootReducer，拿到所有reducer的默认state。
export function createStore(reducer,initState){
    let currentReducer = reducer;
    let currentState = initState;
    let currentListen = [];

    function dispatch(action) {    
        currentState = currentReducer(currentState,action);
       
        currentListen.forEach(v => v())
        return action
     }

     function getState() {
        return currentState
    }

    function subscribe(nextlisten) {
        currentListen.push(nextlisten)
    }

    // 先执行一次roorReducer，拿到所有reducer的默认值，这个type随便写
    dispatch({type:'@INIT_MINI_REDUX'})

    return {
        dispatch,
        getState,
        subscribe
    }
}

//  返回一个rootReducer,store每次dispatch，执行所有的reducer函数，并把对应的当前state和action传进去，更新数据，返回新的状态对象。
// 如果有改变，则每返回新的状态树，没有的话(action没有命中任何一个reducer)，返回上次的值。
//遇到的坑：开不开辟新的内存空间，第一版：完全开辟（耗性能），第二版：开始想节约内存，完全不开辟（不刷新视图），第三版：改变才开辟

export function combineReducers(reducerObj) {
    return (currentState={},action) => {
        let hasChanged = false;
        let newState = {}
        for(let key in reducerObj){
            const nextState = reducerObj[key](currentState[key],action);
            if(currentState[key] !== nextState){
                newState[key] = nextState;
                hasChanged = true
            }
           
        }
        return hasChanged?newState:currentState
     }
 }
 
