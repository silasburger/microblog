import React, { Component } from 'react';
import './App.css';
import NavBox from './NavBox'
import Router from './Routes'

class App extends Component {
  render() {
    return (
     <div>
       <NavBox />
       <Router />
     </div>
    );
  }
}

export default App;
