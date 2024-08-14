import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './RecipeDetail.css';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => {
        setRecipe(response.data.meals[0]);
      })
      .catch((error) => {
        console.error('Error fetching recipe details:', error);
      });
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="recipe-detail-container">
      <h2>{recipe.strMeal}</h2>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <h3>Ingredients</h3>
      <ul>
        {Object.keys(recipe)
          .filter((key) => key.startsWith('strIngredient') && recipe[key])
          .map((key, index) => (
            <li key={index}>{recipe[key]}</li>
          ))}
      </ul>
      <h3>Instructions</h3>
      <p>{recipe.strInstructions}</p>
    </div>
  );
};

export default RecipeDetail;
