import checkPropTypes from 'check-prop-types';
import Recipe from './Recipe';

describe('Recipe Component', () => {
  describe('Checking PropTypes', () => {
    it('Should not throw a warning', () => {
      const expectedProps = {
        location: {
          food: 'chicken',
        },
      };
      const propsErr = checkPropTypes(Recipe.PropTypes, expectedProps, 'props', Recipe.name);
      expect(propsErr);
    });
  });
});
