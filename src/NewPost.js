import React, { Component } from 'react';
import PostForm from './PostForm';

class NewPost extends Component {
  render() {
    return (
      <PostForm
        formTitle="New Post"
        addPost={this.props.addPost}
        history={this.props.history}
      />
    );
  }
}

export default NewPost;
