import React from 'react';
import { Container } from 'unstated';

class TodoContainer extends Container {
  state = {
    todos: []
  };

  id = 0;

  addTodo = todo => {
    const newTodo = { id: this.id++, marked: false, description: todo };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  removeTodo = id => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  };

  markTodo = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id !== id) {
          return todo;
        } else {
          return { ...todo, marked: !todo.marked };
        }
      })
    });
  };
}

export default TodoContainer;
