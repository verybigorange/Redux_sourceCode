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

//  返回一个rootReducer。
 export function combineReducers(reducerObj) {
   let finalReducer  = {};
   for(let key in reducerObj){
    finalReducer[key] = reducerObj[key](undefined,{})
   }

   return () => finalReducer
}
