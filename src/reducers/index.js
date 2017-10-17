import {SELECT_RESTAURANT} from '../actions';

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
  return state;
}