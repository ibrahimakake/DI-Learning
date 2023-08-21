/*
import React from 'react';
import { useParams } from 'react-router-dom';

function  Post() {
  
 

    const {post_id} = useParams()

    return (
      <div>

{post_id} 
        <h2> Sunt aut facere repellat provident occaecati excepturi optio
            reprehenderit
        </h2>
        <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis,
         enim repellendus ipsam sunt autem at odit
        dolorum, voluptatum suscipit iste harm cum magni itaque animi laudantium fugiat
        </p>
      </div>
    );
  }

export default Post;*/

// components/Post.js
import React from 'react';
import { deletePost } from '../actions/postActions';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';


function Post() {

  const handleClick = () => {
    const { post, deletePost, history } = this.props;

    // Call the deletePost action creator and pass the post id as a parameter
    deletePost(post.id);

    // Redirect the user to the Home page
    history.push('/');
  };
  
  const {post_id} = useParams()

  const { post } = this.props;

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <div>
    <h2>{post.title}</h2>
    <p>{post.body}</p>
    <button onClick={handleClick}>Delete Post</button>
  </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const postId = ownProps.match.post_id;
  return {
    post: state.posts.find((post) => post.id === postId),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => dispatch(deletePost(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);

