import React, { Component } from 'react';
import './App.css';
import NavBox from './NavBox'
import Routes from './Routes'

class App extends Component {
  render() {
    return (
     <>
       <NavBox />
       <Routes />
     </>
    );
  }
}

export default App;
