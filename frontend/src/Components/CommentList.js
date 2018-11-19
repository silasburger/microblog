import React, { Component } from 'react';
import uuid from 'uuid/v4';

class CommentList extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(evt) {
     let cid = +evt.target.dataset.id;
     this.props.deleteComment(cid, this.props.postId)
  }

  render() {
    return (
      <ul>
        {this.props.comments.map((comment) => (
          <li key={uuid()}>
            <button data-id={comment.id}
              onClick={this.handleDelete}
            >
              X
            </button>
            {comment.text}
          </li>
        ))}
      </ul>
    );
  }
}

export default CommentList;
