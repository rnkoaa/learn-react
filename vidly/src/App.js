import React, { Component } from "react";

import { Route, Redirect, Switch } from "react-router-dom";

import Movies from "./components/movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/not-found";
import NavBar from "./components/navbar";

import MovieForm from './components/movie-form';
import LoginForm from "./components/login-form";
import "./App.css";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div role="main" className="container">
          {/* <Movies /> */}

          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />

            <Redirect from="/" exact="true" to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
