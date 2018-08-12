import React, { Component } from 'react';
import './App.css';
import Movies from './components/movies';
import Genres from './components/genres';

class App extends Component {
  render() {
    return (
      <div role="main" className="container">
        <div className="row">
          <div className="col-3">
            <Genres />
          </div>
          <div className="col">
            <Movies />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
