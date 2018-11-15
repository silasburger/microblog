import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import BlogPost from '../Containers/BlogPost';
import NewPost from '../Containers/NewPost';

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: {}
    };
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
          <Route exact path="/new" render={props => <NewPost {...props} />} />
          <Route exact path="/:id" render={props => <BlogPost {...props} />} />
        </Switch>
      </div>
    );
  }
}

export default Routes;
