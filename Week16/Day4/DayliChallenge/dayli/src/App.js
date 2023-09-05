import React, { Component } from 'react'
import "./App.css"
import "tachyons"
import RobotContainer from "./components/RobotContainer.js"
import { connect } from 'react-redux';



const usersUrl = "https://jsonplaceholder.typicode.com/users"


 class App extends Component {
  constructor(props){
    super(props)
    this.state = {users : []}
  }

  componentDidMount(){
     fetch(usersUrl).then(res => res.json())
     .then((users)=> this.setState({users:users}))
     .catch((err)=> console.log (err))
  }


  handleChange= (e)=>{
    const searchString = e.target.value
    this.props.dispatch({type: "SEARCH_ROBOTS", playload : searchString})

  }

  render() {
    return (
      <div>
      <h1 className='title'>Robofriends</h1>
      <div className='tc'>
        <div className='pa2'>
          <input type='search' placeholder='Search robot' className='pa3 ba b--green bg-lightest-blue'
          onChange={this.handleChange} />
        </div>
      </div>
     <div className='robot-container'>
       <RobotContainer users={this.state.users}/>
     </div>
    </div>
    )
  }
}

 



export default connect()(App)


