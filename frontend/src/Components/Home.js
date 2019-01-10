import React, { Component } from 'react';
import TitleList from '../Containers/TitleList';

class Home extends Component {
  render() {
    return (
      <div>
        <h1 className="ml-3">Welcome to Microblog</h1>
        <TitleList />
      </div>
    );
  }
}

export default Home;
