import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './components/app';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store from './store';

ReactDOM.render(
    
    <Provider store={store}>
    <Router>
        <App />
        </Router>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();