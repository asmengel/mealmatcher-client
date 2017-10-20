import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import  restaurantReducer  from './reducers/restaurant';
import { composeWithDevTools } from 'redux-devtools-extension';
import {reducer as formReducer} from 'redux-form';

const allReducers = combineReducers({
  restaurants: restaurantReducer,
  form: formReducer
  //auth: authReducer
})

const enhancer = composeWithDevTools(
  applyMiddleware(thunk)
)


// const store = createStore(allReducers, enhancer);
// export default store;
export default createStore(allReducers, enhancer);
