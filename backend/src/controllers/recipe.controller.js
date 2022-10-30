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
    global.log.info(`POST /recipes - ${JSON.stringify(recipe)}`);
  } catch (error) {
    next(error);
  }
}

async function getRecipes(_req, res, next) {
  try {
    res.send(await recipeService.getRecipes());
    global.log.info(`GET /recipes `);
  } catch (error) {
    next(error);
  }
}

async function getRecipeById(req, res, next) {
  try {
    const { id } = req.params;

    const recipe = await recipeService.getRecipeById(id);

    if (!recipe) {
      res.status(404).send({ error: "Not Found Recipe." });
    }

    res.status(200).send(recipe);
    global.log.info(`GET /recipes - ${JSON.stringify(recipe)} `);
  } catch (error) {
    next(error);
  }
}

export default {
  createRecipe,
  getRecipes,
  getRecipeById,
};
