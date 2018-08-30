import React, { Component } from "react";
import BookmarkContext, { ActionTypes } from "../contexts/bookmark-context";
import BookmarkItem from "./bookmark-item";
class Bookmarks extends Component {
  state = {};
  render() {
    // const { bookmarks } = this.props;
    return (
      // <ul>
      //   <BookmarkContext.Consumer>
      //     {({ bookmarks, dispatch }) => {
      //       console.log(bookmarks);
      //       return bookmarks.map(bookmark => {
      //         return (
      //           <li onClick={() => dispatch({ type: ActionTypes.TOGGLE,payload: bookmark })} key={bookmark.id}>
      //             {bookmark.name}
      //           </li>
      //         );
      //       });
      //     }}
      //   </BookmarkContext.Consumer>
      // </ul>
      <div className="page-content">
        <div className="content clearfix">
          <div className="container">
            <div class="wrapper wrapper-content">
              <div class="col-sm-4">
                <h2>Bookmarks</h2>
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li class="breadcrumb-item active">
                    <strong>Bookmarks</strong>
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
    );
  }
}

export default Bookmarks;
