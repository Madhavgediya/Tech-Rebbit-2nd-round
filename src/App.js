import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RecipeList from "./Componenets/RecipeList";
import RecipeDetails from "./Componenets/RecipeDetails";
import axios from "axios";
import Navbar from "./Componenets/Navbar";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/recipes");
      setRecipes(response.data.recipes);
      setFilteredRecipes(response.data.recipes); // Initialize filtered recipes with all recipes
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearch = (query) => {
    const filtered = recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredRecipes(filtered);
  };

  return (
    <Router>
      <div>
        <Navbar onSearch={handleSearch} />
        <Routes>
          <Route
            exact
            path="/"
            element={<RecipeList recipes={filteredRecipes} />}
          />
          <Route
            exact
            path="/recipes"
            element={<RecipeList recipes={filteredRecipes} />}
          />
          <Route
            path="/recipe/:id"
            element={<RecipeDetails recipes={recipes} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
