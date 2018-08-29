import React, { Component } from "react";
import axios from "axios";
import BookmarkContext, {reducer} from "../contexts/bookmark-context";
class MainContainer extends Component {
  state = {
    bookmarks: [],
    archived: false,
    dispatch: ({action, payload}) => {
        // this.setState(state => reducer(state, action));
        console.log("Dispatched Action: ", action, payload);
      }
  };

  componentDidMount() {
    const archivedReq = this.props.archived || false
    axios.get(`http://localhost:3001/bookmarks?archived=${archivedReq}`).then(res => {
      this.setState({
        bookmarks: res.data,
        archived: archivedReq
      });
    });
  }
  render() {
    const { state, props: { children } } = this;
    return (
      <BookmarkContext.Provider value={state}>
        <main role="main" className="container">
          <div className="starter-template">{children}</div>
        </main>
      </BookmarkContext.Provider>
    );
  }
}

export const MainContainerConsumer = BookmarkContext.Consumer;
export default MainContainer;
