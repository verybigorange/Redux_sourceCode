import React, { Component } from 'react';
import { connect } from 'react-redux'


const mapStateToProps = (state) =>{
    return {
        num:state.count
    }
}

const mapStateToDispatch = {

}


function Test(obj) {
    console.log(obj)
    return(
        <div>test</div>
    )
}

export default connect(mapStateToProps,mapStateToDispatch)(Test);