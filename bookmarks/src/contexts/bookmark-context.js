import React from 'react';

const BookmarkContext = React.createContext({
    bookmarks: []
 });
 
 export const reducer = (state, action) => {
    if (action.type === "TOGGLE") {
      return { ...state, isADuck: !state.isADuck };
    }
  };

  export const ActionTypes = {
    TOGGLE: "TOGGLE"
  };
  
 export default BookmarkContext;