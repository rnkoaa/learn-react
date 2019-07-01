import React, { useReducer } from 'react';

import ShopContext from './shop-context';
import UserContext from './users-context';
import {
  userReducer,
  shopReducer,
  ADD_USER,
  REMOVE_USER,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
} from './reducers';

const GlobalState = props => {
  const products = [
    { id: 'p1', title: 'Gaming Mouse', price: 29.99 },
    { id: 'p2', title: 'Harry Potter 3', price: 9.99 },
    { id: 'p3', title: 'Used plastic bottle', price: 0.99 },
    { id: 'p4', title: 'Half-dried plant', price: 2.99 },
  ];
  const [cartState, dispatch] = useReducer(shopReducer, { cart: [] });
  const [usersState, userDispatch] = useReducer(userReducer, {
    users: [{ id: 1, name: 'richard' }, { id: 2, name: 'Kwame' }],
  });
  const addProductToCart = product => {
    setTimeout(() => {
      dispatch({ type: ADD_PRODUCT, product: product });
    }, 700);
  };

  const removeUser = userId => {
    userDispatch({ type: REMOVE_USER, userId: userId });
  };

  const addUser = user => {
    userDispatch({ type: ADD_USER, user: user });
  };

  const removeProductFromCart = productId => {
    setTimeout(() => {
      dispatch({ type: REMOVE_PRODUCT, productId: productId });
    }, 700);
  };

  return (
    <UserContext.Provider
      value={{
        users: usersState.users,
        // users: [
        //   {id: 1, name: "richard"}, {id: 2, name: "Kwame"}
        // ],
        selectedUser: {},
      }}
    >
      <ShopContext.Provider
        value={{
          products: products,
          cart: cartState.cart,
          addProductToCart: addProductToCart,
          removeProductFromCart: removeProductFromCart,
        }}
      >
        {props.children}
      </ShopContext.Provider>
    </UserContext.Provider>
  );
};

export default GlobalState;
