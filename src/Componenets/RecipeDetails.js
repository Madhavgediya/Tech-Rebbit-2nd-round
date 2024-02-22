import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
import { getRecipe } from "../service/api";

const RecipeDetails = ({ recipes }) => {
  const [recipeDetails, setRecipeDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getRecipeData = async () => {
      try {
        let response = await getRecipe(id);
        setRecipeDetails(response.data);
      } catch (error) {
        console.error("Error fetching recipe:", error);
      }
    };

    getRecipeData(); // Call the function inside useEffect

    // No need to include getRecipeData in the dependency array
  }, [id]); // Add id as a dependency

  return (
    <div
      className="container mx-auto my-5"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <Card className="grid grid-cols-1 sm:grid-cols-2 p-5">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <CardMedia
            component="img"
            height="194"
            image={recipeDetails.image}
            alt="Paella dish"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <CardContent>
            <Typography variant="h2" gutterBottom>
              {recipeDetails.name}
            </Typography>
            <Typography
              variant="subtitle1 font-bold"
              color="text.secondary"
              gutterBottom
            >
              Ingredients:
            </Typography>
            <Typography variant="body1" paragraph>
              {recipeDetails.ingredients}
            </Typography>
            <Typography
              variant="subtitle1 font-bold"
              color="text.secondary"
              gutterBottom
            >
              Instructions:
            </Typography>
            <Typography variant="body1" paragraph>
              {recipeDetails.instructions}
            </Typography>
            <div className="flex">
              <Typography
                variant="subtitle1 font-bold"
                color="text.secondary"
                gutterBottom
              >
                MealType:
              </Typography>
              <Typography variant="body1" paragraph>
                {recipeDetails.mealType}
              </Typography>
            </div>
            <div className="flex ">
              <Typography
                variant="subtitle1 font-bold"
                color="text.secondary"
                gutterBottom
              >
                Cooking TimeMinutes:
              </Typography>
              <Typography variant="body1" paragraph>
                {recipeDetails.cookTimeMinutes}
              </Typography>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default RecipeDetails;
