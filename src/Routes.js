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
      posts: []
    };
    this.addPost = this.addPost.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.editPost = this.editPost.bind(this);
    this.addComment = this.addComment.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
  }

  addPost(postData) {
    postData.id = uuid();
    postData.comments = [];
    this.setState(st => ({ posts: [...st.posts, postData] }));
  }

  deletePost(postId) {
    this.setState(st => ({
      posts: st.posts.filter(post => post.id !== postId)
    }));
  }

  editPost(postData) {
    const index = this.state.posts.findIndex(post => post.id === postData.id);
    this.setState(st => ({
      posts: [
        ...st.posts.slice(0, index),
        postData,
        ...st.posts.slice(index + 1)
      ]
    }));
  }

  addComment(comment, postId) {
    const index = this.state.posts.findIndex(post => post.id === postId);
    let post = { ...this.state.posts[index] };
    post.comments.push(comment);
    this.setState(st => ({
      posts: [...st.posts.slice(0, index), post, ...st.posts.slice(index + 1)]
    }));
  }

  deleteComment(commentIdx, postId) {
    const index = this.state.posts.findIndex(post => post.id === postId);
    let post = { ...this.state.posts[index] };
    post.comments = [
      ...post.comments.slice(0, commentIdx),
      ...post.comments.slice(commentIdx + 1)
    ];
    this.setState(st => ({
      posts: [...st.posts.slice(0, index), post, ...st.posts.slice(index + 1)]
    }));
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
                post={this.state.posts.find(
                  post => post.id === props.match.params.id
                )}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default Routes;
