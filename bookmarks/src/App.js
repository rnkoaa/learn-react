import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppActionBar from './components/app-action-bar';
// import MainContainer from "./components/main-app-container";
// import ArchivedBookmarks from "./components/archives";
import BookmarkContext from "./contexts/bookmark-context";
import MainContainer from './components/main-app-container';
import Bookmarks from './components/bookmarks';

class App extends Component {
  render() {
    return (
      // <React.Fragment>
      //   <AppActionBar />
      //   <MainContainer>
      //     <Bookmarks />
      //   </MainContainer>
      // </React.Fragment>
      <React.Fragment>
         <AppActionBar />
      </React.Fragment>
    );
  }
}

export default App;
