import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import { Provider } from 'react-redux'
// import  {combineReducers}  from 'redux'
import  {createStore,combineReducers}  from './redux.js'
import { Provider } from './react-redux.js'

function count(num=0,action) {
    switch(action.type){
      case 'add':
        return num + 1
      case 'minus':
        return num - 1
      default:
        return num
    }
  }
  function count2(num2=0,action) {
    switch(action.type){
      case 'add2':
        return num2 + 1
      default:
        return num2
    }
  }
  const rootReducer = combineReducers({
    count,
    count2
  })
 
//   const store = createStore(count)
// const init_data = {init:0}
const store = createStore(rootReducer)
store.subscribe(()=>{
    console.log('触发了dispatch',store.getState())
})

console.log(store.getState())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
