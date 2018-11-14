import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Title extends Component {


  render() {
    return (
     <div>
      <Link to={`/${this.props.post.id}`}>{this.props.post.title}</Link>
      <i>{this.props.post.description}</i>
     </div>
    );
  }
}

export default Title;

