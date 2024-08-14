import React, { useState } from 'react';
import axios from 'axios'; 
import './AddRecipe.css'; 

const AddRecipePage = ({ onRecipeAdded }) => {
  const [recipe, setRecipe] = useState({
    name: '',
    ingredients: '',
    instructions: '',
    category: '',
    prepTime: '',
    cookTime: '',
    servings: '',
    imageUrl: '', 
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!recipe.name || !recipe.ingredients || !recipe.instructions) {
      setError('Please fill in all required fields');
      return;
    }

    const newRecipe = {
      name: recipe.name,
      ingredients: recipe.ingredients.split(','), 
      category: recipe.category,
      prepTime: recipe.prepTime,
      cookTime: recipe.cookTime,
      servings: recipe.servings,
      imageUrl: recipe.imageUrl, 
    };

    try {
      const response = await axios.post('http://localhost:3002/recipes', newRecipe, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      onRecipeAdded(response.data);  

      setRecipe({
        name: '',
        ingredients: '',
        instructions: '',
        category: '',
        prepTime: '',
        cookTime: '',
        servings: '',
        imageUrl: '',
      });
      setError('');
    } catch (error) {
      setError('Failed to add recipe');
    }
  };

  return (
    <div className="wholePage-container">
      <div className="picture-container">
        <div className="recipe-container">
          <h1>Add Recipe</h1>
          <form onSubmit={handleSubmit} className="add-recipe-form">
            <div>
              <label>
                Recipe Name:
                <input type="text" name="name" value={recipe.name} onChange={handleChange} />
              </label>
            </div>
            <div>
              <label>
                Ingredients (comma-separated):
                <textarea name="ingredients" value={recipe.ingredients} onChange={handleChange} />
              </label>
            </div>
            <div>
              <label>
                Instructions:
                <textarea name="instructions" value={recipe.instructions} onChange={handleChange} />
              </label>
            </div>
            <div>
              <label>
                Category:
                <input type="text" name="category" value={recipe.category} onChange={handleChange} />
              </label>
            </div>
            <div>
              <label>
                Preparation Time:
                <input type="text" name="prepTime" value={recipe.prepTime} onChange={handleChange} />
              </label>
            </div>
            <div>
              <label>
                Cooking Time:
                <input type="text" name="cookTime" value={recipe.cookTime} onChange={handleChange} />
              </label>
            </div>
            <div>
              <label>
                Servings:
                <input type="text" name="servings" value={recipe.servings} onChange={handleChange} />
              </label>
            </div>
            <div>
              <label>
                Image URL:
                <input type="text" name="imageUrl" value={recipe.imageUrl} onChange={handleChange} />
              </label>
            </div>
            {error && <p>{error}</p>}
            <button type="submit">Add Recipe</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddRecipePage;


// import React, { useState } from 'react';
// import './AddRecipe.css'; 

// const AddRecipePage = () => {
//   const [recipe, setRecipe] = useState({
//     name: '',
//     ingredients: '',
//     instructions: '',
//     category: '',
//     prepTime: '',
//     cookTime: '',
//     servings: '',
//     image: null,
//   });

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setRecipe((prevRecipe) => ({
//       ...prevRecipe,
//       [name]: files ? files[0] : value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Logic to add recipe to the server or local state
//   };

//   return (
//     <div className="add-recipe-form">
//       <form onSubmit={handleSubmit}>
//         <label>
//           Recipe Name
//           <input
//             type="text"
//             name="name"
//             value={recipe.name}
//             onChange={handleChange}
//             placeholder="Recipe Name"
//           />
//         </label>
//         <label>
//           Ingredients
//           <input
//             type="text"
//             name="ingredients"
//             value={recipe.ingredients}
//             onChange={handleChange}
//             placeholder="Ingredients"
//           />
//         </label>
//         <label>
//           Instructions
//           <input
//             type="text"
//             name="instructions"
//             value={recipe.instructions}
//             onChange={handleChange}
//             placeholder="Instructions"
//           />
//         </label>
//         <label>
//           Category
//           <input
//             type="text"
//             name="category"
//             value={recipe.category}
//             onChange={handleChange}
//             placeholder="Category"
//           />
//         </label>
//         <label>
//           Preparation Time
//           <input
//             type="text"
//             name="prepTime"
//             value={recipe.prepTime}
//             onChange={handleChange}
//             placeholder="Preparation Time"
//           />
//         </label>
//         <label>
//           Cooking Time
//           <input
//             type="text"
//             name="cookTime"
//             value={recipe.cookTime}
//             onChange={handleChange}
//             placeholder="Cooking Time"
//           />
//         </label>
//         <label>
//           Servings
//           <input
//             type="text"
//             name="servings"
//             value={recipe.servings}
//             onChange={handleChange}
//             placeholder="Servings"
//           />
//         </label>
//         <label>
//           Image
//           <input
//             type="file"
//             name="image"
//             accept="image/*"
//             onChange={handleChange}
//           />
//         </label>
//         <button type="submit">Add Recipe</button>
//       </form>
//     </div>
//   );
// };

// export default AddRecipePage;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './AddRecipe.css';

// const AddRecipe = () => {
//   const [recipe, setRecipe] = useState({
//     name: '',
//     ingredients: '',
//     instructions: '',
//     category: '',
//     preparationTime: '',
//     cookingTime: '',
//     servings: ''
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setRecipe({ ...recipe, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:3001/recipes', recipe);
//       alert('Recipe added successfully');
//       navigate('/home');
//     } catch (error) {
//       console.error('Error adding recipe:', error);
//       alert('Failed to add recipe');
//     }
//   };

//   return (
//     <div className="add-recipe-container">
//       <h2>Add Recipe</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Recipe Name"
//           value={recipe.name}
//           onChange={handleChange}
//         />
//         <textarea
//           name="ingredients"
//           placeholder="Ingredients"
//           value={recipe.ingredients}
//           onChange={handleChange}
//         />
//         <textarea
//           name="instructions"
//           placeholder="Instructions"
//           value={recipe.instructions}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="category"
//           placeholder="Category"
//           value={recipe.category}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="preparationTime"
//           placeholder="Preparation Time"
//           value={recipe.preparationTime}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="cookingTime"
//           placeholder="Cooking Time"
//           value={recipe.cookingTime}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="servings"
//           placeholder="Servings"
//           value={recipe.servings}
//           onChange={handleChange}
//         />
//         <button type="submit">Add Recipe</button>
//       </form>
//     </div>
//   );
// };

// export default AddRecipe;
