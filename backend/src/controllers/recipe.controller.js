import recipeService from "../services/recipe.service.js";

async function createRecipe(req, res, next) {
  try {
    const recipe = req.body;

    if (!recipe.title || !recipe.ingredients || !recipe.content) {
      throw new Error({
        error: "Title, Ingredients, Content são obrigatórios",
      });
    }

    res.send(await recipeService.createRecipe(recipe));
    global.log.info(`POST / - ${JSON.stringify(recipe)}`);
  } catch (error) {
    next(error);
  }
}

async function getRecipes(_req, res, next) {
  try {
    res.send(await recipeService.getRecipes());
    global.log.info(`GET / `);
  } catch (error) {
    next(error);
  }
}

export default {
  createRecipe,
  getRecipes,
};
