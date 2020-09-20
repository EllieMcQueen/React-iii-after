import React, { Component } from 'react';
import Home from "./Home"
import './App.css';


class App extends Component {
  constructor() {
    super();

  }
  

  render() {
    return (
      <div className='App'>
        <Home/>
      </div>
    );
  }
}

export default App;