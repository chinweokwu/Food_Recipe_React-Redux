/* eslint-disable no-console */
import axios from 'axios';
import { fetchUserRequest, fetchUserSuccess, fetchUserFailure } from './fetchActions';

const fetchRecipes = () => dispatch => {
  dispatch(fetchUserRequest);
  axios.get('https://serene-gorge-49314.herokuapp.com/https://recipesapi.herokuapp.com/api/search?q=chicken')
    .then(response => {
      const menu = response.data.recipes;
      dispatch(fetchUserSuccess(menu));
    })
    .catch(error => {
      const errorMsg = error.messages;
      dispatch(fetchUserFailure(errorMsg));
    });
};

export default fetchRecipes;
