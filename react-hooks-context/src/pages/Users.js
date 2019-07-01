import React, { useContext } from 'react'
import MainNavigation from '../components/MainNavigation';
import ShopContext from '../context/shop-context'
import './Users.css'
import UsersList from './users-list'
import UserDeails from './user-details'
import AddUser from './add-user'
import UserContext from '../context/users-context';

const UsersPage = (props) => {
  const userContext = useContext(UserContext)
  const shopContext = useContext(ShopContext)

  return (
    <>
      <MainNavigation
        cartItemNumber={shopContext.cart.reduce((count, curItem) => {
          return count + curItem.quantity;
        }, 0)} usersCount={userContext.users.length}
      />
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
    </>
  );
}

export default UsersPage
