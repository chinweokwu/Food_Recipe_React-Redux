import axios from 'axios';
import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  SEARCH_RECIPES,
} from './actionTypes';

export const fetchUserRequest = () => ({
  type: FETCH_USER_REQUEST,
});

const fetchUserSuccess = recipes => ({
  type: FETCH_USER_SUCCESS,
  payload: recipes,
});

const fetchUserFailure = error => ({
  type: FETCH_USER_FAILURE,
  payload: error,
});

export const searchRecipes = text => dispatch => {
  dispatch({
    type: SEARCH_RECIPES,
    payload: text,
  });
};

export const fetchRecipes = text => dispatch => {
  dispatch(fetchUserRequest);
  axios.get(`https://serene-gorge-49314.herokuapp.com/https://recipesapi.herokuapp.com/api/search?q=${text}`)
    .then(response => {
      const menu = response.data.recipes;
      dispatch(fetchUserSuccess(menu));
    })
    .catch(error => {
      const errorMsg = error.messages;
      dispatch(fetchUserFailure(errorMsg));
    });
};
