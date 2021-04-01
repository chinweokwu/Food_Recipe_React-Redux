/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchRecipes, searchRecipes } from '../Action/fetchActions';
import FoodList from '../Components/foodlist';

class Menu extends Component {
  onChange = e => {
    this.props.searchRecipes(e.target.value);
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.fetchRecipes(this.props.text);
  }

  render() {
    return (
      <div>
        <form className="form-tag" onSubmit={this.onSubmit}>
          <input
            type="text"
            name="searchQuery"
            className="input-tag"
            placeholder="Search Meal..."
            onChange={this.onChange}
          />
          <button type="submit" className="search-btn">Search</button>
        </form>
        <div className="main">
          {this.props.recipeData.map(recipe => (
            <FoodList key={recipe.recipe_id} recipe={recipe} />
          ))}
        </div>
      </div>
    );
  }
}

Menu.defaultProps = {
  text: null,
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
