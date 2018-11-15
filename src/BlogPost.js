import React, { Component } from 'react';
import PostForm from './PostForm';
import Comments from './Comments';

class BlogPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  handleDelete() {
    this.props.deletePost(this.props.post.id);
    this.props.history.push('/');
  }

  toggleEdit() {
    this.setState(st => ({ isEditing: !st.isEditing }));
  }

  render() {
    if (!this.props.post) {
      return <h1>Can't find post</h1>;
    }

    const post = (
      <div>
        <h1>{this.props.post.title}</h1>
        <i>{this.props.post.description}</i>
        <p>{this.props.post.body}</p>
        <button onClick={this.toggleEdit}>Edit</button>
        <button onClick={this.handleDelete}>Delete</button>
        <Comments
          comments={this.props.post.comments}
          addComment={this.props.addComment}
          deleteComment={this.props.deleteComment}
          postId={this.props.match.params.id}
        />
      </div>
    );

    return (
      <div>
        {this.state.isEditing ? (
          <PostForm
            toggleEdit={this.toggleEdit}
            editPost={this.props.editPost}
            isEditing
            formTitle="Edit Post"
            {...this.props.post}
            postId={this.props.match.params.id}
          />
        ) : (
          post
        )}
      </div>
    );
  }
}

export default BlogPost;
