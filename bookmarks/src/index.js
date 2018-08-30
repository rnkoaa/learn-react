import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css';
import "./styles/css/shards.min.css"
// import "./styles/shards-extras.min.css"
import './index.css';

ReactDOM.render(<BrowserRouter>
    <App />
   </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
