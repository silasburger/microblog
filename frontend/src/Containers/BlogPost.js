import React, { Component } from 'react';
import PostForm from '../Components/PostForm';
import Comments from '../Components/Comments';
import { addComment, deleteComment, editPost, deletePost, getPost } from '../actions';
import { connect } from 'react-redux';

class BlogPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  componentDidMount() {
    //Get the post from the backend
    if(!this.props.post) this.props.getPost(this.props.match.params.id);
  }

  //Dispatch a delete post action and redirect to home
  handleDelete() {
    this.props.deletePost(this.props.match.params.id);
    this.props.history.push('/');
  }

  //Toggle editing the form
  toggleEdit() {
    this.setState(st => ({ isEditing: !st.isEditing }));
  }

  render() {
    let post = this.props.post;
    if (!post) {
      return <h1>Can't find post</h1>;
    }

    const postRend = (
      <div>
        <h1>{post.title}</h1>
        <i>{post.description}</i>
        <p>{post.body}</p>
        <button onClick={this.toggleEdit}>Edit</button>
        <button onClick={this.handleDelete}>Delete</button>
        <Comments
          comments={post.comments}
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
            history={this.props.history}
            cancelUrl={`/${this.props.match.params.id}`}
            toggleEdit={this.toggleEdit}
            editPost={this.props.editPost}
            isEditing
            formTitle="Edit Post"
            {...post}
            postId={this.props.match.params.id}
          />
        ) : (
          postRend
        )}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    post: state.posts[ownProps.match.params.id]
  };
}

export default connect(
  mapStateToProps,
  { addComment, deleteComment, editPost, deletePost, getPost }
)(BlogPost);
