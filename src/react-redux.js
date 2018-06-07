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

                // 将组件自己的属性、状态树上需要的属性，以及更新reducer的方法合并传入到该组件中。
                this.store = props.store || context.store;
                this.state = {
                    nextProps: this.merge()
                }
    
                context.store.subscribe(()=>{
                    this.update()
                })
              
            }

            merge(){
              
                return {
                    ...this.props,
                    ...mapStateToProps(this.store.getState(),this.props),
                    ...mapStateToDispatch(this.store.dispatch)
                }
            }

            update(){
                this.setState({
                    nextProps:this.merge()
                })
            }

            render(){
                return  (
                    <WrapperComponent {...this.state.nextProps}></WrapperComponent>
                )
            }
        }

        Connect.contextTypes = {
            store:PropTypes.object
        }

        return Connect
    }
} 

