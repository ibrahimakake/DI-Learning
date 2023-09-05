import React, { Component } from 'react'
import { connect } from 'react-redux'


 class Counter extends Component {
    constructor(props){
        super(props)

    }

    handleIncrementAsync = ()=>{
     setTimeout(() => {
          this.props.dispatch({type :"INCREMENT"})
     }, 1000);
    }
  render() {
    return (
      <div>
        Counter : {this.props.counter} times 
        <button onClick={()=> this.props.dispatch({type: "INCREMENT"})}>+</button>
        <button onClick={()=> this.props.dispatch({type: "DECREMENT"})}>-</button>
        <button onClick={()=> this.props.dispatch({type: "INCREMENT_IF_ODD"})}>INCREMENT IF ODD</button>
        <button onClick={this.handleIncrementAsync}>INCREMENT ASYNC</button>
        
        

      </div>
    )
  }
}


function mapStateToProps(state){
   return {counter : state.counterReducer}
}
export default connect(mapStateToProps)(Counter)