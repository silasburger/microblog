import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBox.css';

class NavBox extends Component {
  render() {
    return (
      <div className="navbox-container jumbotron text-left m-3">
        <h1 className="mb-3">Microblog</h1>
        <p className="mb-3">Get in the Rithm of blogging!</p>
        <Link className="mr-5" to="/">
          Blog
        </Link>
        <Link className="mr-5" to="/new">
          Add a new post
        </Link>
      </div>
    );
  }
}

export default NavBox;
