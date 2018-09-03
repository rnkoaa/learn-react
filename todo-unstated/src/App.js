import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from "unstated";
import Counter from "./counter";
import AddTodo from "./add-todo";
import Todos from "./todos";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Provider>
        <Counter />
        <AddTodo />
        <Todos />
      </Provider>
      </div>
    );
  }
}

export default App;
