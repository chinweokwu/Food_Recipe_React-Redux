/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
// /* eslint-disable react/prop-types */
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Recipe = ({ location }) => {
  const [activeMenu, setActiveMenu] = useState([]);

  useEffect(() => {
    // async function fetchMyAPI() {
    const title = location.state.food;
    axios.get(`https://serene-gorge-49314.herokuapp.com/https://recipesapi.herokuapp.com/api/search?q=${title}`)
      .then(response => {
        console.log(response.data.recipes[0]);
        setActiveMenu(response.data.recipes[0]);
      });
  }, []);

  return (
    <div>
      <div className="card">
        <div>
          <img src={activeMenu.image_url} alt={activeMenu.title} />
        </div>
        { activeMenu.title }
        { activeMenu.publisher }
        { activeMenu.publisher_url }
        { activeMenu.recipe_id }
        { activeMenu.source_url }
      </div>
    </div>
  );
};

export default Recipe;
