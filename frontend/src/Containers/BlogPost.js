import React, { Component } from 'react';
import PostForm from '../Components/PostForm';
import Comments from '../Components/Comments';
import {
  addComment,
  deleteComment,
  editPost,
  deletePost,
  getPost,
  addVote
} from '../actions';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

class BlogPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleVote = this.handleVote.bind(this);
  }

  componentDidMount() {
    //Get the post from the backend
    if (!this.props.post) this.props.getPost(this.props.match.params.id);
  }

  handleVote(evt) {
    this.props.addVote(this.props.post.id, evt.target.id);
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
      <div className="post-container m-3">
        <div className="mb-2">
          <h1>{post.title}</h1>
          <i>{post.description}</i>
          <p>{post.body}</p>
          <Button onClick={this.toggleEdit}>Edit</Button>
          <Button onClick={this.handleDelete}>Delete</Button>
        </div>
        <b>Votes: {post.votes}</b>
        <Button id="up" onClick={this.handleVote}>
          up
        </Button>
        <Button id="down" onClick={this.handleVote}>
          down
        </Button>
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
  { addComment, deleteComment, editPost, deletePost, getPost, addVote }
)(BlogPost);
