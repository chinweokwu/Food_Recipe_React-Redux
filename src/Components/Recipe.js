/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
// /* eslint-disable react/prop-types */
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Recipe = ({ location }) => {
  const [activeMenu, setActiveMenu] = useState([]);

  useEffect(() => {
    // async function fetchMyAPI() {
    const title = location.state.food;
    axios.get(`https://serene-gorge-49314.herokuapp.com/https://recipesapi.herokuapp.com/api/search?q=${title}`)
      .then(response => {
        setActiveMenu(response.data.recipes[0]);
      });
  }, []);
  const backgroundUrl = activeMenu.image_url;
  return (

    <div
      style={{
        position: 'fixed',
        left: '0',
        right: '0',
        zIndex: '-1',
        display: 'block',
        backgroundImage: `url(${backgroundUrl})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '100%',
        height: '100%',
      }}
    >
      <div className="wrapper">
        <div
          style={{
            backgroundImage: `url(${backgroundUrl})`,
            imageRendering: 'auto',
            width: '500px',
            height: '300px',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            margin: 'auto',
          }}
        />
        <div className="wrapper-title">
          <p>{ activeMenu.title }</p>
          <p>{ activeMenu.publisher }</p>
          <p>{ activeMenu.publisher_url }</p>
          <p>{ activeMenu.recipe_id }</p>
          <p>{ activeMenu.source_url }</p>
          <button type="submit" className="wrapper-buttton">
            <Link to="/"> Go Home</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
