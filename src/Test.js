import React, { Component } from 'react';
import { connect } from './react-redux.js'
// import { connect } from 'react-redux'
import { bindActionCreators,compose } from './redux.js'


const mapStateToProps = (state) =>{
    return {
        num:state.count
    }
}

function action1() {
    return dispatch => {
        setTimeout(()=>{
            dispatch({type:'add'})
        },500)
    }
   
}
function action2() {
    return {type:'minus'}
}

// const mapStateToDispatch = {
//     action2,
//     action1
// }
const mapStateToDispatch = (dispatch) => ({
    action2:()=>action2(dispatch),
    action1:()=>action1(dispatch)
})

function Test(obj) {
    console.log(obj)
    return(
        <div>
            <button onClick={obj.action1}>+</button>&emsp;
            <button onClick={obj.action2}>-</button>
            <div >test{obj.num}</div>
        </div>
    )
}

export default connect(mapStateToProps,mapStateToDispatch)(Test);
// export default Test