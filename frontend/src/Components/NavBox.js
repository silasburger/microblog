import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBox.css';

class NavBox extends Component {
  render() {
    return (
      <div className="navbox-container jumbotron text-left m-3">
        <h1 className="mb-3">Microblog</h1>
        <p className="mb-3">Get in the rhythm of blogging!</p>
        <NavLink exact className="mr-4" to="/">
          Blog
        </NavLink>
        <NavLink to="/new">
          Add a new post
        </NavLink>
      </div>
    );
  }
}

export default NavBox;
