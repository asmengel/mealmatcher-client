import {SELECT_RESTAURANT, RETURN_HOMEPAGE, CREATE_USER, SIGN_IN} from '../actions';

const initialState = {
  restaurants:[],
  route: 'homepage', // restaurant || signup || signin
}

export const restaurantReducer = (state = initialState, action) => {
  if (action.type===SELECT_RESTAURANT){
    return Object.assign({}, state, {
      route: "restaurant"
       })   
       console.log(state);
  
  }
  else if (action.type === RETURN_HOMEPAGE) {
    return Object.assign({}, state, {
      route: "homepage"
    })
    console.log(state);
  } 
  else if (action.type === CREATE_USER) {
    return Object.assign({}, state, {
      route: "signup"
    })
    console.log(state);
  }
  else if (action.type === SIGN_IN) {
    return Object.assign({}, state, {
      route: "signin"
    })
    console.log(state);
  }
  return state;
}
