/* eslint-disable react/forbid-prop-types */
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Recipe = ({ location }) => {
  const [activeMenu, setActiveMenu] = useState([]);

  useEffect(() => {
    const title = location.state.food;
    axios.get(`https://serene-gorge-49314.herokuapp.com/https://recipesapi.herokuapp.com/api/search?q=${title}`)
      .then(response => {
        setActiveMenu(response.data.recipes[0]);
      });
  }, []);
  const backgroundUrl = activeMenu.image_url;
  return (

    <div>
      { activeMenu.length !== 0
              && (
              <div className="wrapper">
                <div
                  className="wrapper-image"
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
              )}
    </div>
  );
};

Recipe.defaultProps = {
  location: {},
};

Recipe.propTypes = {
  location: PropTypes.object,
};

export default Recipe;
