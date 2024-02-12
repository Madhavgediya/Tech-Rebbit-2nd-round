import React from "react";
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

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const RecipeList = ({ recipes }) => {
  return (
    <div>
      <div className="container">
        <div
          className="grid gap-4 grid-cols-1 md:grid-cols-3 text-center justify-center items-center
        bg-gray-200 py-6 px-6 rounded-lg shadow-md dark:bg-trueGray-700 "
        >
          {recipes.map((recipe) => (
            <div>
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
                  <div className="text-center w-full">
                    <Link to={`/recipe/${recipe.id}`}>
                      <ExpandMoreIcon />
                    </Link>
                  </div>
                </CardActions>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeList;
