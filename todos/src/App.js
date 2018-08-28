import React, { Component } from 'react';
import './App.css';

import TodoContext from "./contexts/todo-context";
import TodoActionBar from './components/todo-action-bar';
import TodoDetails from './components/todo-details';

class App extends Component {
  render() {
    return (
      <TodoContext.Provider>
        <TodoActionBar />
        <TodoDetails />
      </TodoContext.Provider>
     
    );
  }
}

export default App;
