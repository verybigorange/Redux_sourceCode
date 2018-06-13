import React, { Component } from 'react';
import { connect } from './react-redux.js'
// import { connect } from 'react-redux'
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import saga from 'redux-saga';
import { bindActionCreators,compose } from './redux.js'

const mapStateToProps = (state) =>{
    return {
        num:state.count
    }
}

function action1() {
    return {type:'add'}
}
function action2() {
    return {type:'minus'}
}

const mapStateToDispatch = (dispatch)=>({
    actions:bindActionCreators({action1,action2},dispatch)
})


function Test(obj) {
    console.log(obj)
    return(
        <div onClick={obj.actions.action1}>test{obj.num}</div>
    )
}

export default connect(mapStateToProps,mapStateToDispatch)(Test);
// export default Test