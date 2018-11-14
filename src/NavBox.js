import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class NavBox extends Component {
  render() {
    return (
      <div>
        <h1>Microblog</h1>
        <p>Get in the Rithm of blogging!</p>
        <Link to="/">Blog</Link>
        <Link to="/new">Add a new post</Link>
      </div>
     );
  }
}

export default NavBox;
