import React, { Component } from 'react';

class CommentList extends Component {
  render() {
    return (
      <ul>
        {this.props.comments.map((comment, idx) => (
          <li>
            <button
              onClick={() => this.props.deleteComment(idx, this.props.postId)}
            >
              X
            </button>
            {comment}
          </li>
        ))}
      </ul>
    );
  }
}

export default CommentList;
