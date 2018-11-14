import React, { Component } from 'react';
import PostForm from './PostForm';

class BlogPost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isEditing: false,
    }
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  handleDelete() {
    this.props.deletePost(this.props.post.id);
    this.props.history.push('/')
  }

  toggleEdit() {
    this.setState(st => ({isEditing: !st.isEditing}));
  }

  render() {
    const post = <div>
      <h1>{this.props.post.title}</h1>
      <i>{this.props.post.description}</i>
      <p>{this.props.post.body}</p>
      <button onClick={this.toggleEdit}>Edit</button>
      <button onClick={this.handleDelete}>Delete</button>
    </div>

    return (
     <div>
       {this.state.isEditing ? <PostForm toggleEdit={this.toggleEdit} editPost={this.props.editPost} isEditing {...this.props.post}/> : post }
     </div>
    );
  }
}

export default BlogPost;
