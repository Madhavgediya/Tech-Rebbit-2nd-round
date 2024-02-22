import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { getRecipes, deleteRecipe } from "../service/api";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Button } from "@mui/material";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  useEffect(() => {
    getRecipesDetails();
  }, []);

  const getRecipesDetails = async () => {
    let response = await getRecipes();
    console.log(response);
    setRecipes(response.data);
  };

  const handleDeleteRecipe = async (id) => {
    await deleteRecipe(id);
    getRecipesDetails();
  };

  return (
    <div>
      <div className="container">
        <div
          className="grid gap-4 grid-cols-1 md:grid-cols-3 text-center justify-center items-center
        bg-gray-200 py-6 px-6 rounded-lg shadow-md dark:bg-trueGray-700 "
        >
          {recipes && recipes.length > 0 ? (
            recipes.map((recipe) => (
              <div key={recipe._id}>
                <Card sx={{ maxWidth: 345 }} key={recipe.id}>
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        {recipe.name.substring(0, 1)}
                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title={recipe.name}
                  />
                  <CardMedia
                    component="img"
                    height="194"
                    image={recipe.image}
                    alt="Paella dish"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {recipe.ingredients}
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <div className="text-center w-full flex justify-between items-center">
                      <Link to={`/editrecipe/${recipe.id}`}>
                        <Button variant="contained" endIcon={<EditIcon />}>
                          Edit
                        </Button>
                      </Link>
                      <Link to={`/recipe/${recipe.id}`}>
                        <Button
                          variant="outlined"
                          endIcon={<VisibilityIcon />}
                        >
                        View
                        </Button>
                      </Link>
                      <Button
                        variant="contained"
                        startIcon={<DeleteIcon />}
                        onClick={() => handleDeleteRecipe(recipe.id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </CardActions>
                </Card>
              </div>
            ))
          ) : (
            <div className="w-full text-center">
              No Recipes
              <Link to="/addrecipes" className="text-xl mx-4 bg-">
                <Button variant="contained" color="success">
                  Add Recipes
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeList;
