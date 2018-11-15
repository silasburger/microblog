import React, { Component } from 'react';
import TitleList from '../Containers/TitleList';

class Home extends Component {
  render() {
    return (
      <div>
        <p>Welcome to Microblog</p>
        <TitleList />
      </div>
    );
  }
}

export default Home;
