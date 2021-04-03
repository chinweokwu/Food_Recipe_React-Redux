/* eslint-disable no-dupe-keys */
import {
  FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE,
} from '../Action/actionTypes';
import recipeReducer from './recipeReducer';

describe('Recipe Reducer', () => {
  it('should return initial state', () => {
    const initialState = {
      loading: false,
      text: '',
      recipes: [],
      error: '',
    };
    const newState = recipeReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });

  it('should return an object of items', () => {
    const food = {
      recipes: [{ title: 'Test 1' }, { title: 'Test 2' }, { title: 'Test 3' }],
      error: '',
      loading: false,
    };

    const newState = recipeReducer(undefined, {
      type: FETCH_USER_SUCCESS,
      payload: food.recipes,
    });
    expect(newState).toEqual(food);
  });

  it('should return an array of errors', () => {
    const food = {
      recipes: [],
      error: [],
      loading: false,
    };

    const newState = recipeReducer(undefined, {
      type: FETCH_USER_FAILURE,
      payload: food.recipes,
    });
    expect(newState).toEqual(food);
  });

  it('should return users requests', () => {
    const food = {
      recipes: [{ title: 'Test 1' }, { title: 'Test 2' }, { title: 'Test 3' }],
      error: [],
      loading: true,
      text: '',
      error: '',
      recipes: [],
    };

    const newState = recipeReducer(undefined, {
      type: FETCH_USER_REQUEST,
      payload: food.recipes,
    });
    expect(newState).toEqual(food);
  });
});
