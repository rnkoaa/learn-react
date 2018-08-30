import React, { Component } from "react";
import MainContainer from "./main-app-container";
import BookmarkContext from "../contexts/bookmark-context";
import BookmarkItem from "./bookmark-item";
class ArchivedBookmarks extends Component {
  state = {};
  render() {
    // return <BookmarkContext.Consumer>{context => {}}</BookmarkContext.Consumer>;
    return (
      <div className="page-content">
        <div className="content clearfix">
          <div className="container">
            <div class="wrapper-content">
              <div class="col-sm-4">
                <h2>Archived Bookmarks</h2>
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li class="breadcrumb-item active">
                    <strong>Archives</strong>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className="container mb-5">
            <div class="wrapper wrapper-content animated fadeInRight">
              <BookmarkItem />
              <BookmarkItem />
              <BookmarkItem />
              <BookmarkItem />
              <BookmarkItem />
              <BookmarkItem />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ArchivedBookmarks;
