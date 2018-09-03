import React from 'react';
import { Subscribe } from 'unstated';

import TodoContainer from './containers/todo-container';

class AddTodo extends React.Component {
  inputRef = React.createRef();

  handleClick = addTodo => {
    if (this.inputRef.current.value) {
      addTodo(this.inputRef.current.value);
      this.inputRef.current.value = '';
    }
  };

  render() {
    return (
      <div>
        <input type="text" placeholder="your new todo" ref={this.inputRef} />

        <Subscribe to={[TodoContainer]}>
          {todoContainer => (
            <button onClick={() => this.handleClick(todoContainer.addTodo)}>
              Add
            </button>
          )}
        </Subscribe>
      </div>
    );
  }
}

export default AddTodo;
