import React from 'react';
import RecipeCard from './RecipeCard.css';

const RecipeCard = ({ name, ingredients, instructions, category, prepTime, cookTime, servings, image }) => {
  return (
    <div className="recipe-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{ingredients}</p>
      <p>{instructions}</p>
      <p>Category: {category}</p>
      <p>Prep Time: {prepTime}</p>
      <p>Cook Time: {cookTime}</p>
      <p>Servings: {servings}</p>
    </div>
  );
};

export default RecipeCard;
