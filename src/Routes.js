import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import PostForm from './PostForm';
import BlogPost from './BlogPost';
import uuid from 'uuid/v4';
import NewPost from './NewPost';

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: {}
    };
    this.addPost = this.addPost.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.editPost = this.editPost.bind(this);
    this.addComment = this.addComment.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
  }

  addPost(postData) {
    postData.comments = [];
    this.setState(st => ({ posts: { ...st.posts, [uuid()]: postData } }));
  }

  deletePost(postId) {
    let { [postId]: postData, ...newPosts } = this.state.posts;
    this.setState({
      posts: newPosts
    });
  }

  editPost(postData, postId) {
    this.setState(st => ({ posts: { ...st.posts, [postId]: postData } }));
  }

  addComment(comment, postId) {
    let posts = { ...this.state.posts };
    posts[postId].comments.push(comment);
    this.setState({
      posts
    });
  }

  deleteComment(commentIdx, postId) {
    let posts = { ...this.state.posts };
    let comments = posts[postId].comments;
    let newComments = [
      ...comments.slice(0, commentIdx),
      ...comments.slice(commentIdx + 1)
    ];
    posts[postId].comments = newComments;
    this.setState({
      posts
    });
  }

  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Home posts={this.state.posts} />}
          />
          <Route
            exact
            path="/new"
            render={props => <NewPost addPost={this.addPost} {...props} />}
          />
          <Route
            exact
            path="/:id"
            render={props => (
              <BlogPost
                editPost={this.editPost}
                addComment={this.addComment}
                deleteComment={this.deleteComment}
                {...props}
                deletePost={this.deletePost}
                post={this.state.posts[props.match.params.id]}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default Routes;
