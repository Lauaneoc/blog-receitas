import Recipe from "../models/recipe.model.js";

async function insertRecipe(client) {
  try {
    return await Recipe.create(client);
  } catch (error) {
    throw error;
  }
}

async function getRecipes() {
  try {
    return await Recipe.findAll();
  } catch (error) {
    throw error;
  }
}

async function getRecipeById(id) {
  try {
    return await Recipe.findByPk(id, { raw: true });
  } catch (error) {
    throw error;
  }
}

async function removeRecipe(id) {
  try {
    return await Recipe.destroy({
      where: {
        recipeid: id,
      },
    });
  } catch (error) {
    throw error;
  }
}

export default {
  insertRecipe,
  getRecipes,
  getRecipeById,
  removeRecipe,
};
