// import thunk from 'redux-thunk';
// https://github.com/gaearon/redux-thunk
import axios from 'axios';

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
// export const SELECT_RESTAURANT = 'SELECT_RESTAURANT';
// export const selectRestaurant = () => ({
//   type: SELECT_RESTAURANT
// });

// rewrote becauese i want this endpoint to 
export const SELECT_RESTAURANT = 'SELECT_RESTAURANT';
export const selectRestaurant = (restaurants) => {
  return {
    type: SELECT_RESTAURANT,
    restaurants,
  }
}

export const RETURN_HOMEPAGE_SUCCESS = 'RETURN_HOMPAGE_SUCCESS';
export const returnHomepageSuccess = () => ({
  type: RETURN_HOMEPAGE_SUCCESS
});

export const RETURN_HOMEPAGE_REQUEST = 'RETURN_HOMPAGE_REQUEST';
export const returnHomepageRequest = () => ({
  type: RETURN_HOMEPAGE_REQUEST
});

export const RETURN_HOMEPAGE_ERROR = 'RETURN_HOMPAGE_ERROR';
export const returnHomepageError = (err) => ({
  type: RETURN_HOMEPAGE_ERROR,
  error: err
});


// single 
export function returnSingleRestaurant() {
  return function(dispatch) {
    const url = 'http://localhost:8080/api/restaurants/:id';
    return axios.get(url)
      .then(function(response){
        if(response.status < 200 || response.status >=300) {
          var error = new Error(response.statusText);
          error.response = response;
        }
        return response;
      })
      .then(function(response) {
        return dispatch(dataPusher(response.data));
      })
      .catch(function(error) {
        return dispatch(returnHomepageError(error))
      })
  }
}
 // all


export function returnHomepage() {
  return function(dispatch) {
    const url = 'http://localhost:8080/api/restaurants';
    return axios.get(url)
      .then(function(response){
        if(response.status < 200 || response.status >=300) {
          var error = new Error(response.statusText);
          error.response = response;
        }
        return response;
      })
      .then(function(response) {
        return dispatch(dataPusher(response.data));
      })
      .catch(function(error) {
        return dispatch(returnHomepageError(error))
      })
  }
}

export const DATA_PUSHER = 'DATA_PUSHER';
export function dataPusher(restaurants) {
  return {
    type: DATA_PUSHER,
    restaurants: restaurants
  }
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