import express from "express";

import recipeController from "../controllers/recipe.controller.js";

const router = express.Router();

router.post("/", recipeController.createRecipe);

router.get("/", recipeController.getRecipes);

router.get("/:id", recipeController.getRecipeById);

router.delete("/:id", recipeController.removeRecipe);

router.put("/", recipeController.updateRecipe);

export default router;
