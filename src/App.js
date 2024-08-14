import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import HomePage from './components/HomePage';
import RecipeDetail from './components/RecipeDetail';
import AddRecipe from './components/AddRecipe';
// import EditRecipe from './components/EditRecipe';
import './App.css';

function App() {
  const [recipes, setRecipes] = useState([]);

  const handleRecipeAdded = (newRecipe) => {
    setRecipes((prevRecipes) => [...prevRecipes, newRecipe]);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
            <Route path="/add-recipe" element={<AddRecipe onRecipeAdded={handleRecipeAdded} />} />
            {/* <Route path="/edit-recipe/:id" element={<EditRecipe />} /> */}
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;








// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import LoginPage from './components/LoginPage';
// import RegistrationPage from './components/RegistrationPage';
// import HomePage from './components/HomePage';
// import RecipeDetail from './components/RecipeDetail';
// import './App.css';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<LoginPage />} />
//         <Route path="/register" element={<RegistrationPage />} />
//         <Route path="/home" element={<HomePage />} />
//         <Route path="/recipe/:id" element={<RecipeDetail />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
