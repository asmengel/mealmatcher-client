import { SELECT_RESTAURANT, RETURN_HOMEPAGE_SUCCESS, CREATE_USER, SIGN_IN, DATA_PUSHER } from '../actions';

const initialState = {
  restaurants: [],
  route: 'homepage', // restaurant || signup || signin

}


export function restaurantReducer(state, action) {
  state = state || initialState;
  switch(action.type) {
    case DATA_PUSHER:
    return Object.assign({}, state, {restaurants: action.restaurants});
    break;
    case RETURN_HOMEPAGE_SUCCESS:
    return Object.assign({}, state, {route: "homepage"});
    break;
    case SELECT_RESTAURANT:
    return Object.assign({}, state, {route: "restaurant"});
    break;
    case CREATE_USER:
    return Object.assign({}, state, {route: "signup"});
    break;
    case SIGN_IN:
    return Object.assign({}, state, {route: "signin"});
    default:
    return state;
  }
}


