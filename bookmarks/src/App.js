import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import './App.css';
import AppActionBar from './components/app-action-bar';
import Bookmarks from './components/bookmarks';
import NotFound from "./components/shared/not-found";
import AddBookmarkItemForm from './components/add-bookmark-form';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <AppActionBar />
                <Switch>
                    <Route path="/bookmarks" render={(props) => <Bookmarks {...props} archived={false} />} />
                    <Route path="/new-bookmark" component={AddBookmarkItemForm} />
                    <Route path="/notfound" component={NotFound} />
                    <Route path="/archives" render={(props) => <Bookmarks {...props} archived={true} />} />
                    <Route path="/" component={Bookmarks} />
                    <Redirect to="/notfound" />
                </Switch>
            </React.Fragment>
        );
    }
}

export default App;
