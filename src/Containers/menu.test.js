/* eslint-disable react/forbid-foreign-prop-types */
import checkPropTypes from 'check-prop-types';
import Menu from './menu';

describe('Recipe Component', () => {
  describe('Checking PropTypes', () => {
    it('Should not throw a warning', () => {
      const expectedProps = {
        searchRecipes: jest.fn(),
        fetchRecipes: jest.fn(),
        recipeData: [{
          title: 'eba okoro',
        }],
      };
      const propsErr = checkPropTypes(Menu.propTypes, expectedProps, 'props', Menu.name);
      expect(propsErr).toBeUndefined();
    });
  });
});
