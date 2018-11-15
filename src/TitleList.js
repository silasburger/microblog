import React, { Component } from 'react';
import Title from './Title';

class TitleList extends Component {
  render() {
    let posts = Object.entries(this.props.posts);
    console.log(posts);
    return (
      <div>
        {posts.map(post => (
          <Title post={post[1]} id={post[0]} />
        ))}
      </div>
    );
  }
}

export default TitleList;
