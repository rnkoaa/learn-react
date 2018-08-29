import React, { Component } from "react";
import MainContainer from "./main-app-container";
import BookmarkContext from "../contexts/bookmark-context";
class ArchivedBookmarks extends Component {
  state = {};
  render() {
    return <BookmarkContext.Consumer>{context => {}}</BookmarkContext.Consumer>;
  }
}

export default ArchivedBookmarks;
