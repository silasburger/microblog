import React, { Component } from 'react';
import Title from './Title';

class TitleList extends Component {


  render() {
    return (
     <div>
      {this.props.posts.map(post => <Title post={post} />)}
     </div>
    );
  }
}

export default TitleList;

