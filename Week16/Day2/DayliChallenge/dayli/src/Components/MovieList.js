import React, { Component } from 'react'
import { connect } from 'react-redux';
import { selectedMovie } from '../actions/movieAction';

class MovieList extends Component {


  handleClick = (title) => {
    if(title === this.props.selectedMovie) return ;
    this.props.dispatch(selectedMovie(title))
}
  

  render() {
    return (
      <div>
        <h1>Movie List</h1>
        <div>MovieList</div>
        {this.props.movies.map((movie) => 
      ( <div key={movie.title}> 
      <span >{movie.title}</span>
      <button onClick={()=>this.handleClick(movie.title)}>SELECT</button>
      </div> ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies,
 
});

export default connect(mapStateToProps)(MovieList);
