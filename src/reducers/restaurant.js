import { SELECT_RESTAURANT, RETURN_HOMEPAGE_SUCCESS, CREATE_USER_ROUTE, SIGN_IN_ROUTE, DATA_PUSHER } from '../actions/routes';

const initialState = {
  restaurants: [],
  route: 'homepage', // restaurant || signup || signin

}


export default function restaurantReducer(state, action) {
  state = state || initialState;
  switch(action.type) {
    case DATA_PUSHER:
    return Object.assign({}, state, {restaurants: action.restaurants});
    break;
    case RETURN_HOMEPAGE_SUCCESS:
    return Object.assign({}, state, {route: "homepage"});
    break;
    case SELECT_RESTAURANT: // just added the restaurants component to see if it will work
    return Object.assign({}, state, {route: "restaurant", restaurants: action.restaurants});
    break;
    case CREATE_USER_ROUTE:
    return Object.assign({}, state, {route: "signup"});
    break;
    case SIGN_IN_ROUTE:
    return Object.assign({}, state, {route: "signin"});
    default:
    return state;
  }
}


