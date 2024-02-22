import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Typography,
} from "@mui/material";
import { getRecipe, editRecipe } from "../service/api";
import { useNavigate, useParams } from "react-router-dom";

const EditRecipe = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [recipeDetails, setRecipeDetails] = useState({
    name: "",
    ingredients: "",
    instructions: "",
    prepTimeMinutes: "",
    cookTimeMinutes: "",
    servings: "",
    difficulty: "",
    cuisine: "",
    caloriesPerServing: "",
    image: "",
    mealType: "",
  });

  const getRecipeData = async () => {
    let response = await getRecipe(id);
    // console.log(response.data);
    setRecipeDetails(response.data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipeDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(e.target.name, e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await editRecipe(recipeDetails, id);
    console.log("Recipe updated successfully!"); // Add a console log to verify if this line is executed
    navigate("/recipes");
    // await editRecipe(recipeDetails , id);
    // navigate("/recipes");
  };

  useEffect(() => {
    getRecipeData();
  }, [getRecipeData]);

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6">Recipe Details</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={recipeDetails.name}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Ingredients"
            name="ingredients"
            multiline
            value={recipeDetails.ingredients}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Instructions"
            name="instructions"
            multiline
            value={recipeDetails.instructions}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Prep Time (minutes)"
            name="prepTimeMinutes"
            type="number"
            value={recipeDetails.prepTimeMinutes}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Cook Time (minutes)"
            name="cookTimeMinutes"
            type="number"
            value={recipeDetails.cookTimeMinutes}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            label="Servings"
            name="servings"
            type="number"
            value={recipeDetails.servings}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            label="Difficulty"
            name="difficulty"
            value={recipeDetails.difficulty}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            label="Cuisine"
            name="cuisine"
            value={recipeDetails.cuisine}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Calories per Serving"
            name="caloriesPerServing"
            type="number"
            value={recipeDetails.caloriesPerServing}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Image URL"
            name="image"
            value={recipeDetails.image}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>Meal Type</InputLabel>
            <Select
              value={recipeDetails.mealType}
              onChange={handleChange}
              name="mealType"
              required
            >
              <MenuItem value="Breakfast">Breakfast</MenuItem>
              <MenuItem value="Lunch">Lunch</MenuItem>
              <MenuItem value="Dinner">Dinner</MenuItem>
              <MenuItem value="Snack">Snack</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Update
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default EditRecipe;
