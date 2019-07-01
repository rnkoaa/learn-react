export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const ADD_USER = 'addUser';
export const REMOVE_USER = 'removeUser';
export const SELECT_USER = 'selectUser';

const addProductToCart = (product, state) => {
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(
    item => item.id === product.id,
  );

  if (updatedItemIndex < 0) {
    updatedCart.push({ ...product, quantity: 1 });
  } else {
    const updatedItem = {
      ...updatedCart[updatedItemIndex],
    };
    updatedItem.quantity++;
    updatedCart[updatedItemIndex] = updatedItem;
  }
  return { ...state, cart: updatedCart };
};

const removeProductFromCart = (productId, state) => {
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(item => item.id === productId);

  const updatedItem = {
    ...updatedCart[updatedItemIndex],
  };
  updatedItem.quantity--;
  if (updatedItem.quantity <= 0) {
    updatedCart.splice(updatedItemIndex, 1);
  } else {
    updatedCart[updatedItemIndex] = updatedItem;
  }
  return { ...state, cart: updatedCart };
};

export const shopReducer = (state, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return addProductToCart(action.product, state);
    case REMOVE_PRODUCT:
      return removeProductFromCart(action.productId, state);
    default:
      return state;
  }
};

const addUser = (user, state) => {
  const { users}= state
  users.push(user)
  return {...state, users: users}
};

const selectUser = (userId, state) => {
  const idx = state.users.findIndex(user => user.id === userId);
  if (idx >= 0) {
    const selectedUser = state.users[idx];
    return { ...state, selectedUser };
  }
  return state;
};

const removeUser = (userId, state) => {
  console.log(`remove user: ${userId}`);
};

export const userReducer = (state, action) => {
  switch (action.type) {
    case ADD_USER:
      return addUser(action.payload, state);
    case SELECT_USER:
      // set the selected users
      return selectUser(action.payload, state);
    case REMOVE_USER:
      // return removeProductFromCart(action.productId, state);
      return removeUser(action.payload, state);
    default:
      return state;
  }
};
