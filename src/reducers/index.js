import * as actions from '..actions/index';

const initialState = {
  restaurants:[]
}

export const restaurantReducer = (state = initialState, action) => {
  if (action.type==='RETURN_HOMEPAGE'){
    return Object.assign({}, state, {
      restaurants:[]
    })   
  }
  return state;
}