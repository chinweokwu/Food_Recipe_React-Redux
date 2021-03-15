import { combineReducers } from 'redux';
import recipeReducer from './recipeReducer';

const rootReducers = combineReducers({
  results: recipeReducer,
});

export default rootReducers;
