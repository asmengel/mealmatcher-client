import {createState, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {restaurantReducer} from './reducer';
export default createStore(restaurantReducer, applyMiddleware(thunk));