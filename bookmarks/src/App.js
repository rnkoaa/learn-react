import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppActionBar from './components/app-action-bar';
// import MainContainer from "./components/main-app-container";
// import ArchivedBookmarks from "./components/archives";
import BookmarkContext from "./contexts/bookmark-context";
import MainContainer from './components/main-app-container';
import Bookmarks from './components/bookmarks';
import BookmarkItem from "./components/bookmark-item";

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
                <div className="page-content">
                    <div className="content clearfix">
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
            </React.Fragment>
        );
    }
}

export default App;
