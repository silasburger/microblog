import React, { Component } from 'react';

class PostForm extends Component {
  //Default state if post passed in, otherwise deafult to empty string
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

  //Conrol the form inputs
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  //Handle submitting the form
  handleSubmit(evt) {
    evt.preventDefault();
    //If the post is being edited then call the edit function
    if (this.props.isEditing) {
      let post = this.state;
      post.comments = this.props.comments;
      this.props.editPost(post, this.props.postId);
      this.props.toggleEdit();
    } else {
      //Otherwise call the add post function
      this.props.addPost(this.state);
      this.props.history.push('/');
    }
  }

  //On cancel redirect to home
  handleClick(evt) {
    if (this.props.isEditing) {
      this.props.toggleEdit();
    }
    this.props.history.push(this.props.cancelUrl);
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
