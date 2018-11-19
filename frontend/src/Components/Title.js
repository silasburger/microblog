import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Title extends Component {
  render() {
    return (
      <div>
        <Link to={`/${this.props.title.id}`}>{this.props.title.title}</Link>
        <i>{this.props.title.description}</i>
      </div>
    );
  }
}

export default Title;
