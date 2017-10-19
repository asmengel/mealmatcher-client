// import thunk from 'redux-thunk';
// https://github.com/gaearon/redux-thunk
import axios from 'axios';

import { API_BASE_URL } from '../config';
// signup being moved needed to protect break atm - mengel
export const ADD_USER = 'ADD_USER';
export const addUser = (firstName, lastName, username, password) => ({
  type: ADD_USER,
  firstName, lastName, username, password
});

export const CREATE_USER_ROUTE = 'CREATE_USER_ROUTE';
export const createUserRoute = () => ({
  type: CREATE_USER_ROUTE

});

export const SIGN_IN_ROUTE = 'SIGN_IN_ROUTE';
export const signInRoute = () => ({
  type: SIGN_IN_ROUTE,
});


export const SELECT_RESTAURANT = 'SELECT_RESTAURANT';
export const selectRestaurant = (restaurants) => {
  return {
    type: SELECT_RESTAURANT,
    restaurants,
  }
}
export const DATA_PUSHER = 'DATA_PUSHER';
export function dataPusher(restaurants) {
  return {
    type: DATA_PUSHER,
    restaurants: restaurants
  }
}

export const RETURN_HOMEPAGE_REQUEST = 'RETURN_HOMPAGE_REQUEST';
export const returnHomepageRequest = () => ({
  type: RETURN_HOMEPAGE_REQUEST
});

export const RETURN_HOMEPAGE_SUCCESS = 'RETURN_HOMPAGE_SUCCESS';
export const returnHomepageSuccess = (restaurants) => ({
  type: RETURN_HOMEPAGE_SUCCESS,
  restaurants
});

export const RETURN_HOMEPAGE_ERROR = 'RETURN_HOMPAGE_ERROR';
export const returnHomepageError = (err) => ({
  type: RETURN_HOMEPAGE_ERROR,
  error:err
});


 // single logic
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
 // all logic


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




