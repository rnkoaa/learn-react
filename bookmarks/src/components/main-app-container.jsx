import React, { Component } from "react";
import axios from "axios";
import BookmarkContext from "../contexts/bookmark-context";
import { ActionTypes } from "../contexts/action-types";

import _ from "lodash";

class MainContainer extends Component {
  state = {
    bookmarks: [],
    archived: false,
    pageTitle: "",
    dispatch: ({ action, payload }) => {
      // this.setState(state => reducer(state, action));
      // console.log("Dispatched Action: ", action, payload);
      switch (action) {
        case ActionTypes.DELETE_BOOKMARK:
          console.log("Deleting bookmark: ", payload);
          axios.delete(`http://localhost:3001/bookmarks/${payload.id}`)
            .then(response => {
              console.log(response);
              if (response.status === 200) {
                const filteredBookmarks = this.state.bookmarks.filter(item => item.id != payload.id);
                this.setState({ bookmarks: filteredBookmarks });
              }
            });

          break;
        case ActionTypes.ARCHIVE_BOOKMARK:
          console.log("Archiving bookmark: ", payload);
          break;
        case ActionTypes.RESTORE_ARCHIVE_BOOKMARK:
          console.log("Restoring bookmark: ", payload);
          break;
        case ActionTypes.CREATE_BOOKMARK:
          console.log("Creating new bookmark: ", payload);
          break;
        default:
          console.log("Unknown Action to handle...", action);
          break;
      }
    }
  };

  componentDidMount() {
    const archivedReq = this.props.archived || false
    console.log(this.props.pageHeader);
    console.log(archivedReq);
    axios.get(`http://localhost:3001/bookmarks?archived=${archivedReq}`).then(res => {
      this.setState({
        bookmarks: res.data,
        archived: archivedReq,
        pageTitle: this.props.pageHeader
      });
    });
  }

  render() {
    const { state, props: { children } } = this;
    return (
      <BookmarkContext.Provider value={state}>
        <div className="page-content">
          <div className="content clearfix">
            <div className="container">
              <div className="wrapper-content">
                <div className="col-sm-4">
                  <h2>{state.pageTitle}</h2>
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="index.html">Home</a>
                    </li>
                    <li className="breadcrumb-item active">
                      <strong>Bookmarks</strong>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="container mb-5">
              <div className="wrapper-content animated fadeInRight">
                {children}
              </div>
            </div>
          </div>
        </div>
      </BookmarkContext.Provider>
    );
  }
}

export const MainContainerConsumer = BookmarkContext.Consumer;
export default MainContainer;
