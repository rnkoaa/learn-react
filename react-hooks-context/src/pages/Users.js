import React from 'react';
import './Users.css';
import UsersList from './users-list';
import UserDeails from './user-details';
import AddUser from './add-user';

const UsersPage = props => {
  return (
    <>
      <div className="app">
        <h2>Using context and hooks</h2>
        <p>
          'UsersList', 'UserDetails' and 'AddUser' are three different
          components which use the same shared state through a context called
          "UsersContext"
        </p>
        <div className="users-container">
          <UsersList />
          <UserDeails />
        </div>
        <AddUser />
      </div>
    </>
  );
};

export default UsersPage;
