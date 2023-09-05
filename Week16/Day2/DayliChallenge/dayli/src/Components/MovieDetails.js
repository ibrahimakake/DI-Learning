import React, { Component } from 'react'
import { connect } from 'react-redux';
import { selectedMovie } from '../actions/movieAction';

class MovieDetails extends Component {

   
  render() {
    return (
      <div>
        <h2>Movie Details</h2>
        <h3>Title {this.props.selectedMovie.title}</h3>
        <h4>Release date : {this.props.selectedMovie.releaseDate } </h4>
        <h5>Rating: {this.props.selectedMovie.rating} </h5>
      </div>
    )
  }
}


function mapStateToProps(state){
    return {
       selectedMovie: state.selectedMovie
    }
    
}

export default connect(mapStateToProps)(MovieDetails)