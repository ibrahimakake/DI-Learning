import React from 'react';
import  posts from "./data.json"

function PostList() {
  return (
    <div>
      <h1>Hi This is a Title</h1>
      <ul>
        {posts.map((item) => (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.content}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default PostList;

