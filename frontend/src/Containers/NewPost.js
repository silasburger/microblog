import React, { Component } from 'react';
import PostForm from '../Components/PostForm';
import { connect } from 'react-redux';
import { addPost } from '../actions';
import uuid from 'uuid/v4'

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.add = this.add.bind(this);
  }

  //Dispatch an action to add a post
  add(postData) {
    this.props.addPost(postData, uuid());
  }

  render() {
    return (
      <PostForm
        cancelUrl='/'
        formTitle="New Post"
        addPost={this.add}
        history={this.props.history}
      />
    );
  }
}

export default connect(
  null,
  { addPost }
)(NewPost);
