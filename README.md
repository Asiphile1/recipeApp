# Recipe Management Application

A React-based application for managing and displaying recipes. Users can view, add, and manage recipes, with functionalities including user authentication and CRUD operations.

## Table of Contents
1. [Features](#features)
2. [Installation](#installation)
3. [Usage](#usage)
4. [API](#api)
5. [Folder Structure](#folder-structure)
6. [Contributing](#contributing)
7. [License](#license)

## Features
- **User Authentication**: Users can register, log in, and manage their accounts.
- **Recipe Management**: Users can add, edit, delete, and view recipes.
- **Recipe Search**: Search for recipes by keywords.
- **Responsive Design**: The application is designed to be responsive across various devices.
- **Background Video**: An engaging background video enhances the user experience.

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/Asiphile1/recipeApp.git

   Usage
Login: Navigate to the login page and enter your credentials to log in.

Register: Create a new account if you don’t have one.

Home Page: View a list of recipes and navigate to individual recipe details.

Add Recipe: Add new recipes with details and an image.

Manage Recipes: Edit or delete existing recipes.

API

Endpoints
GET /users?email={email}&password={password}

Retrieve user data for login.
GET /recipes

Retrieve all recipes.
POST /recipes


Add a new recipe.
PATCH /recipes/


Update an existing recipe.
DELETE /recipes/


Delete a recipe.
Folder Structure


src/

components/ - React components used in the application.

AddRecipe.js - Component for adding a recipe.

HomePage.js - Component displaying the homepage.

LoginPage.js - Component for user login.

RecipeDetail.js - Component for viewing recipe details.

Navbar.js - Navigation bar component.

HeroSection.js - Hero section component.

Footer.js - Footer component.

App.js - Main application component.

index.js - Entry point of the application.

theme.js - MUI theme configuration.

App.css - Global CSS styles.

LoginPage.css - CSS for the login page.



License
This project is licensed under the MIT License - see the LICENSE file for details.




