// /* eslint-disable no-underscore-dangle */
// /* eslint-disable react/prop-types */
// import React from 'react';
// import { connect } from 'react-redux';
// import { fetchRecipes, searchRecipes } from '../Action/fetchActions';
// import Recipes from '../Components/Recipes';

// const Men = ({
//   text, recipeData,
// }) => {
//   const onChange = e => {
//     searchRecipes(e.target.value);
//   };

//   const onSubmit = e => {
//     e.preventDefault();
//     fetchRecipes(text);
//   };

//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input
//           type="text"
//           name="searchQuery"
//           placeholder="Search Meal..."
//           onChange={onChange}
//         />
//         <br />
//         <br />
//         <button type="submit">Search</button>
//       </form>
//       <div>
//         { recipeData
//         && recipeData.recipes
//         && recipeData.recipes.map(food => (
//           <Recipes
//             key={food._id}
//             food={food}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// const mapStateToProps = state => ({
//   recipeData: state.results.recipes,
//   text: state.results.text,
//   loading: state.results.loading,
//   error: state.results.error,
// });

// export default connect(mapStateToProps, { searchRecipes, fetchRecipes })(Men);
