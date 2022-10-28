import recipeRepository from "../repositories/recipe.repository.js";

async function createRecipe(recipe) {
  return await recipeRepository.insertRecipe(recipe);
}

async function getRecipes() {
  return await recipeRepository.getRecipes();
}

export default {
  createRecipe,
  getRecipes,
};
