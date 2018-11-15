import React, { Component } from 'react';
import Title from '../Components/Title';
import { connect } from 'react-redux';

class TitleList extends Component {
  render() {
    let posts = Object.entries(this.props.posts);
    return (
      <div>
        {posts.map(post => (
          <Title post={post[1]} id={post[0]} />
        ))}
      </div>
    );
  }
}

//Map the state form redux so that react has access to the posts
function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

export default connect(mapStateToProps)(TitleList);
