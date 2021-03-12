import axios from 'axios';
import { fetchUserRequest, fetchUserSuccess, fetchUserFailure } from './fetchActions';

const fetchRecipe = () => dispatch => {
  dispatch(fetchUserRequest);
  axios.get('')
    .then(response => {
      const recipes = response.data;
      dispatch(fetchUserSuccess(recipes));
    })
    .catch(error => {
      const errorMsg = error.data;
      dispatch(fetchUserFailure(errorMsg));
    });
};

export default fetchRecipe;
