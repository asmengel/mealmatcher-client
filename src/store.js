import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { restaurantReducer } from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const enhancer = composeWithDevTools(
  applyMiddleware(thunk)
)

export default createStore(restaurantReducer, enhancer);
