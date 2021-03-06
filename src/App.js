import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Task from './Components/Task';
import { Lines } from 'react-preloaders';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Lines />
        <Task />
      </div>
    );
  }
}

export default App;
