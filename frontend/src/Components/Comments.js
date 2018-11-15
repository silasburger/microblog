import React, { Component } from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

class Comments extends Component {
  render() {
    return (
      <div>
        <h2>Comments</h2>
        <CommentList
          comments={this.props.comments}
          deleteComment={this.props.deleteComment}
          postId={this.props.postId}
        />
        <CommentForm
          postId={this.props.postId}
          addComment={this.props.addComment}
        />
      </div>
    );
  }
}

export default Comments;
