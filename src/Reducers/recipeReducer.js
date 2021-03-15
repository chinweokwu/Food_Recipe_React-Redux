import {
  FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE, SEARCH_RECIPES,
} from '../Action/actionTypes';

const initialState = {
  loading: false,
  text: '',
  recipes: [],
  error: '',
};

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        loading: false,
        recipes: action.payload,
        error: '',
      };
    case FETCH_USER_FAILURE:
      return {
        loading: false,
        recipes: [],
        error: action.payload,
      };
    case SEARCH_RECIPES:
      return {
        ...state,
        text: action.payload,
      };
    default: return state;
  }
};

export default recipeReducer;
