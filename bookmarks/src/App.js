import React, { Component } from 'react';
import logo from './logo.svg';
import {Switch, Route, Redirect} from "react-router-dom";
import './App.css';
import AppActionBar from './components/app-action-bar';
// import MainContainer from "./components/main-app-container";
import ArchivedBookmarks from "./components/archives";
import BookmarkContext from "./contexts/bookmark-context";
import MainContainer from './components/main-app-container';
import Bookmarks from './components/bookmarks';
import BookmarkItem from "./components/bookmark-item";
import NotFound from "./components/shared/not-found";
import AddBookmarkItemForm from './components/add-bookmark-form';

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
                {/* <div className="page-content">
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
                </div> */}
                <Switch>
                    <Route path="/bookmarks" component={Bookmarks} />
                    <Route path="/new-bookmark" component={AddBookmarkItemForm} />
                    <Route path="/notfound" component={NotFound} />
                    <Route path="/archives" component={ArchivedBookmarks} />
                    <Route path="/" component={Bookmarks} />
                    <Redirect to="/notfound" />
                </Switch>
            </React.Fragment>
        );
    }
}

export default App;
