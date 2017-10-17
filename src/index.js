import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'; 
const store = createStore(combinedReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();