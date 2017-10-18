import { SELECT_RESTAURANT, RETURN_HOMEPAGE_SUCCESS, CREATE_USER, SIGN_IN } from '../actions';

const initialState = {
  restaurants: [],
  route: 'homepage', // restaurant || signup || signin
}

export const restaurantReducer = (state = initialState, action) => {
  if (action.type === SELECT_RESTAURANT) {
    return Object.assign({}, state, {
      route: "restaurant"
    })
  }
  else if (action.type === RETURN_HOMEPAGE_SUCCESS) {
    return Object.assign({}, state, {
      route: "homepage"
    })
  }
  else if (action.type === CREATE_USER) {
    return Object.assign({}, state, {
      route: "signup"
    })
  }
  else if (action.type === SIGN_IN) {
    return Object.assign({}, state, {
      route: "signin"
    })
  }
  return state;
}
