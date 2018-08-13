import React, { Component } from 'react';
import './App.css';
import Movies from './components/movies';

class App extends Component {
  render() {
    return (
      <div role="main" className="container">
          <Movies />
      </div>
    );
  }
}

export default App;
