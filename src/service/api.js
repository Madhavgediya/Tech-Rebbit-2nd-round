import axios from "axios";

const API_URL = "http://127.0.0.1:3002/recipes";

export const addRecipes = async (data) => {
  try {
    return await axios.post(API_URL, data);
  } catch (error) {
    console.log("Error", error.message);
  }
};

export const getRecipes = async () => {
  try {
    return await axios.get(API_URL);
  } catch (error) {
    console.log("Error", error.message);
  }
};

export const getRecipe = async (data) => {
  try {
    return await axios.get(`${API_URL}/${data}`);
  } catch (error) {
    console.log("Error", error.message);
  }
};

export const editRecipe = async (data, id) => {
  try {
    return await axios.put(`${API_URL}/${id}`, data);
  } catch (error) {
    console.log("Error", error.message);
  }
};

export const deleteRecipe = async (id) => {
  try {
    return await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.log("Error", error.message);
  }
};

export const searchRecipes = async (query) => {
  try {
    return await axios.get(`${API_URL}/?query=${query}`);
  } catch (error) {
    console.log("Error", error.message);
  }
};
