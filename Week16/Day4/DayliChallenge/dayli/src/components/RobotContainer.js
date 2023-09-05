import React, { Component } from 'react'
import Robot from "./Robots"
import { connect } from 'react-redux';

 class RobotContainer extends Component {
  
  render() {
    return (
      <div className='robot-container'>
        {this.props.users.filter((user)=>
        user.name.toLowerCase().includes(this.props.searchTerm?.toLowerCase() || ""))
        .map((user)=>(
            <Robot key={user.id} name={user.name} email={user.email} id={user.id} />))}
      </div>
    )
  }
}



export default connect(state => state)(RobotContainer)