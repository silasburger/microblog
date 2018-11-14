import React, { Component } from 'react';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title || '',
      description: props.description || '',
      body: props.body || ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    if (this.props.isEditing) {
      let post = this.state;
      post.id = this.props.id;
      post.comments = this.props.comments;
      this.props.editPost(post);
      this.props.toggleEdit();
    } else {
      this.props.addPost(this.state);
      this.props.history.push('/');
    }
  }

  handleClick(evt) {
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <h1>{this.props.formTitle}</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            id="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
          <label htmlFor="body">Body</label>
          <textarea
            type="text"
            name="body"
            id="body"
            value={this.state.body}
            onChange={this.handleChange}
          />
          <button>Save</button>
          <button onClick={this.handleClick} type="button">
            Cancel
          </button>
        </form>
      </div>
    );
  }
}

export default PostForm;
