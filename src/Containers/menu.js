import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchRecipes, searchRecipes } from '../Action/fetchActions';
import FoodList from '../Components/foodlist';

const Menu = ({
  fetchRecipes, searchRecipes, text, recipeData,
}) => {
  const onChange = e => {
    searchRecipes(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    fetchRecipes(text);
  };

  return (
    <div>
      <form className="form-tag" onSubmit={onSubmit}>
        <input
          type="text"
          name="searchQuery"
          className="input-tag"
          placeholder="Search Meal..."
          onChange={onChange}
        />
        <button type="submit" className="search-btn">Search</button>
      </form>
      <div className="main">
        {recipeData.map(recipe => (
          <FoodList key={recipe.recipe_id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

Menu.defaultProps = {
  text: 'all',
};

Menu.propTypes = {
  searchRecipes: PropTypes.func.isRequired,
  fetchRecipes: PropTypes.func.isRequired,
  recipeData: PropTypes.arrayOf(PropTypes.object).isRequired,
  text: PropTypes.string,
};

const mapStateToProps = state => ({
  recipeData: state.results.recipes,
  text: state.results.text,
});

export default connect(mapStateToProps, { searchRecipes, fetchRecipes })(Menu);
