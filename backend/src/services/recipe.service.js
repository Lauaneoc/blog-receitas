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

async function removeRecipe(id) {
  return await recipeRepository.removeRecipe(id);
}

async function updateRecipe(recipe) {
  if (await recipeRepository.getRecipeById(recipe.recipeid)) {
    return await recipeRepository.updateRecipe(recipe);
  }

  throw new Error("Receita informada não existe.");
}

export default {
  createRecipe,
  getRecipes,
  getRecipeById,
  removeRecipe,
  updateRecipe,
};
