import express from "express";

import recipeController from "../controllers/recipe.controller.js";

const router = express.Router();

router.post("/", recipeController.createRecipe);

router.get("/", recipeController.getRecipes);

export default router;
