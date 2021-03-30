import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const FoodList = ({ recipe }) => (
  <div className="card" key={recipe.recipe_id}>
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
);
FoodList.propTypes = {
  recipe: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FoodList;
