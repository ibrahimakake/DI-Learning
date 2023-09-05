import React, { Component } from 'react'
import {store} from '../reducers/index.js'
import { initialState } from '../reducers/index.js'
import './Counter.css'
import { INCREMENT_ACTION } from '../actions/index';
import { DECREMENT_ACTION } from '../actions/index';
export default class Counter extends Component{
  constructor(props){
    super(props)
    this.state=initialState 
    store.subscribe(()=> this.setState(store.getState()))
  }
 increment (){
    store.dispatch(INCREMENT_ACTION)
 }
 decrement (){
    store.dispatch(DECREMENT_ACTION)
 }
  render(){
    return (
        <div>
            <h1>Counter</h1>
            <div className='flex'>
            <button onClick={this.increment}>+</button>
            <h2>{this.state.count}</h2>
            <button onClick={this.decrement}>-</button>
            
            </div>
            
        </div>
      )
  }
  
}
