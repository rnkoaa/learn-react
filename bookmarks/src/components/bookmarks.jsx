import React from "react";
import BookmarkContext from "../contexts/bookmark-context";
import MainContainer from "./main-app-container";
import BookmarkItem from "./bookmark-item";
const Bookmarks = () => {
  const renderUI = (bookmarks, dispatch) => {
    if (bookmarks && bookmarks.length > 0) {
      return bookmarks.map(bookmark => {
        return (
          <BookmarkItem dispatch={dispatch} key={bookmark.id} item={bookmark} />
        );
      });
    } else {
      return <h1>No Bookmarks</h1>
    }
  }

  return (
    <MainContainer pageHeader={"Bookmarks"} archived={false}>
      {
        <ul>
          <BookmarkContext.Consumer>
            {({ bookmarks, dispatch }) => {
              return renderUI(bookmarks, dispatch);
            }}
          </BookmarkContext.Consumer>
        </ul>
      }
    </MainContainer>
  );
}

export default Bookmarks;
