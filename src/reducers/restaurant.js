
import { ADD_EATERS, SELECT_RESTAURANT, RETURN_HOMEPAGE_SUCCESS, CREATE_USER_ROUTE, SIGN_IN_ROUTE, DATA_PUSHER } from '../actions/routes';


const initialState = {
  restaurants: [],
  route: 'homepage', // restaurant || signup || signin
  selectedRestaurant: {}
}


export default function restaurantReducer(state, action) {
  state = state || initialState;
  switch (action.type) {
    case DATA_PUSHER:
      return Object.assign({}, state, { restaurants: action.restaurants });
      break;
    case RETURN_HOMEPAGE_SUCCESS:
      return Object.assign({}, state, { route: "homepage" });
      break;
    case SELECT_RESTAURANT: // just added the restaurants component to see if it will work
      //find restaurant by id 

      return Object.assign({}, state, { route: "restaurant", selectedRestaurant: action.restaurant });
      break;
    case CREATE_USER_ROUTE:
      return Object.assign({}, state, { route: "signup" });
      break;
    case SIGN_IN_ROUTE:
      return Object.assign({}, state, { route: "signin" });
      break;
    case ADD_EATERS:
    // {
    //   restaurants: [],
    //   route: 'homepage', // restaurant || signup || signin
    //   selectedRestaurant: {}
    // }
      return {
        ...state,
        selectedRestaurant: {
          ...state.selectedRestaurant,
          eaters: [...state.selectedRestaurant.eaters, action.eater]
        },
      }

      break;
    default:
      return state;
  }
}

//find restaurant by id (filter)
//add eater to eaters array for found restaurant
//copy previous state 

