import React from "react";
import MainContainer from "./main-app-container";
import BookmarkContext from "../contexts/bookmark-context";
import BookmarkItem from "./bookmark-item";
const ArchivedBookmarks = () => {
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

  return (<MainContainer pageHeader={"Archived Bookmarks"} archived={true}>
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

export default ArchivedBookmarks;
