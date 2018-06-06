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

 export function combineReducers(reducerObj) {
   let rootReducer  = {};

   return (currentState={},action) => {

        for(let key in reducerObj){
            rootReducer[key] = reducerObj[key](currentState[key],action);
        }
        return {...rootReducer}
    }
}
