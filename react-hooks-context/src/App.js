import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import GlobalState from './context/GlobalState';
import ProductsPage from './pages/Products';
import CartPage from './pages/Cart';
import UsersPage from './pages/Users';
import './App.css';

const App = props => {
  return (
    <BrowserRouter>
      <GlobalState>
        <Switch>
          <Route path="/" component={ProductsPage} exact />
          <Route path="/cart" component={CartPage} exact />
          <Route path="/users" component={UsersPage} exact />
        </Switch>
      </GlobalState>
    </BrowserRouter>
  );
};

export default App;
