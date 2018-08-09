import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CounterComponent from './components/counters/counter-component';

class App extends Component {
  state = {
    count: 4
  };

  render() {
    {/* <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Yea... Welcome to React</h1>
      </header>
      <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
      </p>*/}
      {/*</div>*/}
    return (
        <CounterComponent itemCount={this.state.count} />
    );
  }
}

export default App;
