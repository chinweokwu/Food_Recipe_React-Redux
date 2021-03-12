import { combineReducers } from 'redux';
import recipeReducer from './recipeReducer';

const rootReducers = combineReducers({
  data: recipeReducer,
});

export default rootReducers;
