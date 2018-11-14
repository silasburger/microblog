import React, { Component } from 'react';
import TitleList from './TitleList';

class Home extends Component {


  render() {
    return (
     <div>
       <p>Welcome to Microblog</p>
       <TitleList posts={this.props.posts}/>
     </div>
    );
  }
}

export default Home;
