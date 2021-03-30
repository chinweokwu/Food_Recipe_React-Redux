/* eslint-disable react/forbid-foreign-prop-types */
// import React from 'react';
import checkPropTypes from 'check-prop-types';
import Recipe from './Recipe';

describe('Recipe Component', () => {
  describe('Checking PropTypes', () => {
    it('Should not throw a warning', () => {
      const expectedProps = {
        location: 'Food Name',
      };
      const propsErr = checkPropTypes(Recipe.propTypes, expectedProps, 'props', Recipe.name);
      expect(propsErr).toBeUndefined();
    });
  });
  describe('Have props', () => {

  });
  describe('Have No props', () => {

  });
});
