import recipeService from "../services/recipe.service.js";

async function createRecipe(req, res, next) {
  try {
    const { title, ingredients, content, category } = req.body;

    if (!title || !ingredients || !content || !category) {
      throw new Error({
        error: "Title, Ingredients, Content e Category são obrigatórios",
      });
    }

    const recipe = await recipeService.createRecipe(recipe);

    res.status(201).send({ status: 201, data: recipe });
    global.log.info(`POST /recipes - ${JSON.stringify(recipe)}`);
  } catch (error) {
    next(error);
  }
}

async function getRecipes(_req, res, next) {
  try {
    const recipes = await recipeService.getRecipes();

    res.status(200).send({ status: 200, data: recipes });
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
      res.status(404).send({
        status: 404,
        data: {},
        error: "Not Found Recipe",
      });
    }

    res.status(200).send({ status: 200, data: recipe });
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
