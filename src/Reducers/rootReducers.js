import { combineReducers } from 'redux';
import recipeReducer from './recipeReducer';

const rootReducers = combineReducers({
  recipe: recipeReducer,
});

export default rootReducers;
