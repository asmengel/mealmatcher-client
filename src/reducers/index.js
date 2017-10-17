import {SELECT_RESTAURANT, RETURN_HOMEPAGE} from '../actions';

const initialState = {
  restaurants:[],
  route: 'homepage', // restaurant || 
}

export const restaurantReducer = (state = initialState, action) => {
  if (action.type===SELECT_RESTAURANT){
    return Object.assign({}, state, {
      route: "restaurant"
       })   
  
  }
  else if (action.type === RETURN_HOMEPAGE) {
    return Object.assign({}, state, {
      route: "homepage"
    })
  }
  return state;
}
