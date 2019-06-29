import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import './App.css';
import "toastr/build/toastr.min.css";

import Bookmarks from './components/bookmarks';
import NotFound from "./components/shared/not-found";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                
                <Switch>
                    <Route path="/bookmarks" render={(props) => <Bookmarks {...props} archived={false} />} />
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
