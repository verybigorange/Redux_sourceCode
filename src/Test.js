import React, { Component } from 'react';
// import { connect } from './react-redux.js'
import { connect } from 'react-redux'
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
        },1000)
    }
   
}
function action2() {
    return {type:'minus'}
}

const mapStateToDispatch = {
    action1
}


function Test(obj) {
    console.log(obj)
    return(
        <div onClick={obj.action1}>test{obj.num}</div>
    )
}

export default connect(mapStateToProps,mapStateToDispatch)(Test);
// export default Test