// import thunk from 'redux-thunk';
// https://github.com/gaearon/redux-thunk
import { API_BASE_URL } from '../config';
// signup
export const ADD_USER = 'ADD_USER';
export const addUser = (firstName, lastName, username, password) => ({
  type: ADD_USER,
  firstName, lastName, username, password
});

export const SIGN_IN = 'SIGN_IN';
export const signIn = (username, password) => ({
  type: SIGN_IN,
  username, password
});
// does not arguments becuse no user data required
export const SELECT_RESTAURANT = 'SELECT_RESTAURANT';
export const selectRestaurant = () => ({
  type: SELECT_RESTAURANT
});

export const RETURN_HOMEPAGE_SUCCESS = 'RETURN_HOMPAGE_SUCCESS';
export const returnHomepageSuccess = () => ({
  type: RETURN_HOMEPAGE_SUCCESS
});

export const RETURN_HOMEPAGE_REQUEST = 'RETURN_HOMPAGE_REQUEST';
export const returnHomepageRequest = () => ({
  type: RETURN_HOMEPAGE_REQUEST
});

export const RETURN_HOMEPAGE_ERROR = 'RETURN_HOMPAGE_ERROR';
export const returnHomepageError = () => ({
  type: RETURN_HOMEPAGE_ERROR
});

export const returnHomepage = () => (dispatch) => {
  
  dispatch(returnHomepageRequest());
  return fetch(`/api/restaurants/`)//incomplete endpoint
    .then(res => {
      if (!res.ok) {
        return dispatch(returnHomepageError(res.statusText));
      }
      return res.json()
    })
    .then(restaurants => {
      console.log(restaurants);
      return dispatch(dataPusher(restaurants))}
    )
    // .then(restaurants => dispatch(returnHomepageSuccess(restaurants)))
    .catch(error => dispatch(returnHomepageError(error)))
}
export const DATA_PUSHER = 'DATA_PUSHER';
export const dataPusher = (restaurants) => dispatch => {
  type: DATA_PUSHER,
  restaurants

}

export const SCHEDULE_MEAL = 'SCHEDULE_MEAL';
export const scheduleMeal = () => ({
  type: SCHEDULE_MEAL
});

export const CONFIRM_RESERVATION = 'CONFIRM_RESERVATION';
export const confirmReservation = () => ({

});
// signup button action
export const CREATE_USER = 'CREATE_USER';
export const createUser = () => ({
  type: CREATE_USER

});

export const FORGOT_PASSWORD = 'FORGOT_PASSWORD';
export const forgotPassword = () => ({

});

export const EDITCANCEL = 'EDITCANCEL';
export const editCancel = () => ({

});

export const INVITE = 'INVITE';
export const invite = () => ({

});

export const TOGGLE_HOMEPAGE = 'TOGGLE_HOMEPAGE';
export const toggleHomepage = () => ({
  type: TOGGLE_HOMEPAGE
});

// export const fetchCheeses = () => (dispatch) => {
//   dispatch(fetchCheesesRequest());
//   return fetch(`${SERVER_URL}`)
//       .then(res => {
//           if (!res.ok) {
//               return dispatch(fetchCheesesError(res.statusText));
//           }
//           return res.json()
//       })
//       .then(cheeses => dispatch(fetchCheesesSuccess(cheeses)))
// }