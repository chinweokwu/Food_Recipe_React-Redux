/* eslint-disable no-nested-ternary */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchRecipes, searchRecipes } from '../Action/fetchActions';

class Menu extends Component {
  onChange = e => {
    this.props.searchRecipes(e.target.value);
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.fetchRecipes(this.props.text);
  }

  render() {
    const searchRecipes = this.props.recipeData.map(recipe => (
      <div className="card" key={recipe._id}>
        <div className="card_image">
          <img src={recipe.image_url} alt={recipe.title} />
        </div>
        <div className="card_title title-white">
          <p>{recipe.title.length < 20 ? `${recipe.title}` : `${recipe.title.substring(0, 25)}...`}</p>
          <button type="submit">
            <Link to={{
              pathname: `/recipe/${recipe.recipe_id}`,
              state: { food: recipe.title },
            }}
            >
              View Details
            </Link>
          </button>
        </div>
      </div>
    ));

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
          {this.props.recipeData.loading ? (
            <h2 className="loading">Loading...</h2>
          ) : this.props.recipeData.error ? (
            <h2>{this.props.error}</h2>
          ) : (searchRecipes)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  recipeData: state.results.recipes,
  text: state.results.text,
});

export default connect(mapStateToProps, { searchRecipes, fetchRecipes })(Menu);
