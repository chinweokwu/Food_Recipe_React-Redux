/* eslint-disable react/prop-types */
import React from 'react';

const Recipes = ({ food }) => (
  <div>
    <h3>
      <div>
        <img src={food.image_url} alt={food.title} />
        <p>{food.title}</p>
      </div>
    </h3>
  </div>
);

// this.props.recipeData.loading ? (
//   <h2>Loading...</h2>
// ) : this.props.recipeData.error ? (
//   <h2>{this.props.recipeData.error}</h2>
// ) : (this.props.recipeData
//   && this.props.recipeData
//   && this.props.recipeData.map(recipe => (
//     <div key={recipe._id}>
//       <img src={recipe.image_url} alt={recipe.title} />
//       <p>
//         {' '}
//         {recipe.title}
//         {' '}
//       </p>
//     </div>
//   )));

export default Recipes;
