import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Provider extends Component {
    //把store放在context上，让子组件可以访问
    getChildContext(){
        return {
            store:this.props.store
        }
    }

    render() {
        return this.props.children
    }
}

Provider.childContextTypes = {
    store:PropTypes.object
}

export function connect(mapStateToProps,mapStateToDispatch) { 
    return function(WrapperComponent){
        class Connect extends Component {
            constructor(props,context){
                super(props)
                
                //通过context上的store的getState()方法获取到状态树，然后传入到mapStateToProps中取得需要的属性
                //然后再传到WrapperComponent中去
                this.nextProps = mapStateToProps(context.store.getState());  
            }

            render(){
                return  (
                    <WrapperComponent {...this.nextProps}></WrapperComponent>
                )
            }
        }

        Connect.contextTypes = {
            store:PropTypes.object
        }

        return Connect
    }
} 

