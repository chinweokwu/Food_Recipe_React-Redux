/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import fetchRecipes from '../Action/index';

const RecipeList = ({ recipeData, fetchRecipe }) => {
  useEffect(() => {
    fetchRecipe();
  }, []);

  return recipeData.loading ? (
    <h2>Loading</h2>
  ) : recipeData.error ? (
    <h2>{recipeData.error}</h2>
  ) : (
    <div>
      {
        recipeData
         && recipeData.recipes
      && recipeData.recipes.map(recipe => <p key={recipe.id}>{recipe.title}</p>)
      }
    </div>
  );
};
const mapStateToProps = state => ({
  recipeData: state.recipe,
});

const mapDispatchToProps = dispatch => ({
  fetchRecipe: () => dispatch(fetchRecipes()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);
