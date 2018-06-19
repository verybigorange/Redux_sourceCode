import React, { Component } from 'react';
// import { connect } from './react-redux.js'
import { connect } from 'react-redux'
import { bindActionCreators,compose } from './redux.js'


const mapStateToProps = (state) =>{
    return {
        num:state.count
    }
}

function action1(arg) {
    return dispatch => {
        setTimeout(()=>{
            dispatch({type:'add'})
        },1000)
    }
   
}
function action2() {
    return {type:'minus'}
}

const mapDispatchToProps = {
    action2,
    action1
}
// const mapDispatchToProps = (dispatch) => ({
//     action2:()=>action2(dispatch),
//     action1:()=>action1(dispatch)
// })

class Test extends Component {
    constructor(props){
        super(props)
        this.handleEvent1 = this.handleEvent1.bind(this);
    }

    handleEvent1(){
        this.props.action1(1111111)
    }

    render() {
        return(
            <div>
                <button onClick={this.handleEvent1}>+</button>&emsp;
                <button onClick={this.props.action2}>-</button>
                <div>test{this.props.num}</div>
            </div>
        )
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Test);
// export default Test