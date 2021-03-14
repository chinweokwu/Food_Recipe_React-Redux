import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  CHANGE_FILTER,
} from './actionTypes';

export const fetchUserRequest = () => ({
  type: FETCH_USER_REQUEST,
});

export const fetchUserSuccess = recipes => ({
  type: FETCH_USER_SUCCESS,
  payload: recipes,
});

export const fetchUserFailure = error => ({
  type: FETCH_USER_FAILURE,
  payload: error,
});

export const changeFilters = data => ({
  type: CHANGE_FILTER,
  payload: data,
});
