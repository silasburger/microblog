import React, { Component } from 'react';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addComment(this.state.comment, this.props.postId);
    this.setState({
      comment: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="comment"
            id="comment"
            value={this.state.comment}
            onChange={this.handleChange}
            placeholder="New Comment"
          />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
