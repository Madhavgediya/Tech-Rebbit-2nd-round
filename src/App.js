import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RecipeList from "./Componenets/RecipeList";
import RecipeDetails from "./Componenets/RecipeDetails";
// import axios from "axios";
import Navbar from "./Componenets/Navbar";
import AddRecipes from "./Componenets/AddRecipes";
import EditRecipe from "./Componenets/EditRecipe";
const App = () => {
  // const [filteredRecipes, setFilteredRecipes] = useState([]);

  const handleSearch = async (query) => {
    console.log(query);
    // try {
    //   const response = await searchRecipes(query);
    //   setFilteredRecipes(response.data);
    // } catch (error) {
    //   console.error("Error searching data:", error);
    // }
  };

  return (
    <Router>
      <div>
        <Navbar onSearch={handleSearch} />
        <Routes>
          <Route exact path="/" element={<RecipeList />} />
          <Route exact path="/recipes" element={<RecipeList />} />
          <Route exact path="/addrecipes" element={<AddRecipes />} />
          <Route exact path="/editrecipe/:id" element={<EditRecipe />} />
          <Route exact path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
