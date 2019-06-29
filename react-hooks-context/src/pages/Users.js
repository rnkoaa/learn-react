import React, { useContext } from 'react'
import MainNavigation from '../components/MainNavigation';
import ShopContext from '../context/shop-context'
import './Users.css'
import { UsersContextProvider } from "../context";
import UsersList from './users-list'
import UserDeails from './user-details'
import AddUser from './add-user'
const UsersPage = (props) => {
    const users = [{ id: 1, name: "John" }, { id: 2, name: "Joanna" }];
    const context = useContext(ShopContext)
    // return (
    //     <React.Fragment>
    //       <MainNavigation
    //         cartItemNumber={context.cart.reduce((count, curItem) => {
    //           return count + curItem.quantity;
    //         }, 0)}
    //       />
    //       <main className="cart">
    //         {context.cart.length <= 0 && <p>No Item in the Cart!</p>}
    //         <ul>
    //           {context.cart.map(cartItem => (
    //             <li key={cartItem.id}>
    //               <div>
    //                 <strong>{cartItem.title}</strong> - ${cartItem.price} (
    //                 {cartItem.quantity})
    //               </div>
    //               <div>
    //                 <button
    //                   onClick={context.removeProductFromCart.bind(
    //                     this,
    //                     cartItem.id
    //                   )}
    //                 >
    //                   Remove from Cart
    //                 </button>
    //               </div>
    //             </li>
    //           ))}
    //         </ul>
    //       </main>
    //     </React.Fragment>
    //   );

    return (
        <>
         <MainNavigation
        cartItemNumber={context.cart.reduce((count, curItem) => {
          return count + curItem.quantity;
        }, 0)}
      />
        <div className="app">
          <UsersContextProvider users={users}>
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
          </UsersContextProvider>
        </div>
        </>
      );
}

export default UsersPage