import React from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";

const RecipeDetails = ({ recipes }) => {
  const { id } = useParams();

  // Find the recipe with the matching id
  const recipe = recipes.find((recipe) => recipe.id === parseInt(id));

  if (!recipe) {
    return <div>Recipe not found!</div>;
  }

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
            image={recipe.image}
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
              {recipe.name}
            </Typography>
            <Typography
              variant="subtitle1 font-bold"
              color="text.secondary"
              gutterBottom
            >
              Ingredients:
            </Typography>
            <Typography variant="body1" paragraph>
              {recipe.ingredients}
            </Typography>
            <Typography
              variant="subtitle1 font-bold"
              color="text.secondary"
              gutterBottom
            >
              Instructions:
            </Typography>
            <Typography variant="body1" paragraph>
              {recipe.instructions}
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
                {recipe.mealType}
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
                {recipe.cookTimeMinutes}
              </Typography>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default RecipeDetails;
