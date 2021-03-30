/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/forbid-foreign-prop-types */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import checkPropTypes from 'check-prop-types';
import rootReducers from '../src/Reducers/rootReducers';

export const findByTestAtrr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

export const checkProps = (component, expectedProps) => {
  const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
  return propsErr;
};

export const testStore = intialState => {
  const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
  return createStoreWithMiddleware(rootReducers, intialState);
};
