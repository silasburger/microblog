import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import PostForm from './PostForm';
import BlogPost from './BlogPost';
import uuid from 'uuid/v4';

class Routes extends Component {
  constructor(props){
    super(props);
    this.state = {
      posts: []
    }
    this.addPost = this.addPost.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.editPost = this.editPost.bind(this);
  }

  addPost(postData) {
    postData.id = uuid();
    this.setState(st => ({ posts: [...st.posts, postData]}));
  }

  deletePost(id) {
    this.setState(st => ({ posts: st.posts.filter(post => post.id !== id)}));
  }

  editPost(postData, id) {
    postData.id = id;
    const index = this.state.posts.findIndex(post => post.id === id);
    this.setState(st => ({ posts: [...st.posts.slice(0, index), postData, ...st.posts.slice(index+1)] }));
  }

  render() {
    return (
     <div>
       <Switch>
         <Route exact path="/" render={() => <Home posts={this.state.posts} />} />
         <Route exact path="/new" render={(props) => <PostForm addPost={this.addPost} {...props} />} />
         <Route exact path="/:id" render={(props) => <BlogPost editPost={this.editPost} {...props} deletePost={this.deletePost} post={this.state.posts.find(post => post.id===props.match.params.id)} />} />
       </Switch>
     </div>
    );
  }
}

export default Routes;
