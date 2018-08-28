import React, { Component } from "react";
import { Table } from "reactstrap";
import TodoContext from "../contexts/todo-context";
import moment from "moment";

class TodoDetails extends Component {
  state = {};
  render() {
    return (
      <TodoContext.Consumer>
        {context => {
          const { todos } = context.state;
          console.log(todos);
          return (
            <Table striped>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                {todos.map((todo, idx) => {
                  return (
                    <tr key={todo._id}>
                      <th>{idx}</th>
                      <th>{todo.title}</th>
                      <th>{todo.status}</th>
                      <th>{moment(todo.createdAt).toString()}</th>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          );
        }}
      </TodoContext.Consumer>
    );
  }
}

export default TodoDetails;
