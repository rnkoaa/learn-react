import React, { Component } from "react";
import BookmarkContext, { ActionTypes } from "../contexts/bookmark-context";
class Bookmarks extends Component {
  state = {};
  render() {
    // const { bookmarks } = this.props;
    return (
      <ul>
        <BookmarkContext.Consumer>
          {({ bookmarks, dispatch }) => {
            console.log(bookmarks);
            return bookmarks.map(bookmark => {
              return (
                <li onClick={() => dispatch({ type: ActionTypes.TOGGLE,payload: bookmark })} key={bookmark.id}>
                  {bookmark.name}
                </li>
              );
            });
          }}
        </BookmarkContext.Consumer>
      </ul>
    );
  }
}

export default Bookmarks;
