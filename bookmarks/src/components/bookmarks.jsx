import React from "react";
import BookmarkItem from "./bookmark-item";
import { Provider, Subscribe } from "unstated";
import AppActionBar from "./app-action-bar";
import BookmarkContainer from "../contexts/bookmark-container";
import { ActionTypes } from "../contexts/action-types";

const Bookmarks = (props) => {
  const renderUI = (bookmarkContainer) => {
    const { state, dispatch } = bookmarkContainer;
    if (state.bookmarksLoading) {

    } else if (state.bookmarksLoaded && state.bookmarks && state.bookmarks.length > 0) {
      const { bookmarks } = state;
      if (bookmarks && bookmarks.length > 0) {
        return bookmarks.map(bookmark => {
          return (
            <BookmarkItem dispatch={dispatch} key={bookmark.id} item={bookmark} />
          );
        });
      }
    } else {
      return <h1>No Bookmarks</h1>
    }
  }

  return (
    <Provider>
      <AppActionBar />
      <Subscribe to={[BookmarkContainer]}>
        {
          bookmarkContainer => {
            const archived = props.archived || false;
            if (!bookmarkContainer.state.bookmarksLoaded) {
              bookmarkContainer.dispatch({
                action: ActionTypes.LOAD_BOOKMARKS, payload: {
                  archived: archived
                }
              })
            }
            return renderUI(bookmarkContainer);
          }
        }
      </Subscribe>
    </Provider>
  );
}

export default Bookmarks;
