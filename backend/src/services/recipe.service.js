import recipeRepository from "../repositories/recipe.repository.js";

async function createRecipe(recipe) {
  return await recipeRepository.insertRecipe(recipe);
}

async function getRecipes() {
  return await recipeRepository.getRecipes();
}

async function getRecipeById(id) {
  return await recipeRepository.getRecipeById(id);
}

export default {
  createRecipe,
  getRecipes,
  getRecipeById,
};
