import React, { Component } from "react";
import blog from '../blog.png';
import { connect } from "react-redux"; 
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    const { posts } = this.props;

    return (
      <div>
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id}>
              <img src={blog} alt="Blog" />
              <Link to={`/post/${post.id}`}>{post.title}</Link>
              <p>{post.body}</p>
            </div>
          ))
        ) : (
          <p>No posts to show</p>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

// Use 'connect' (not 'Connect') to connect the component to the Redux store
Home = connect(mapStateToProps)(Home);
export default Home;
