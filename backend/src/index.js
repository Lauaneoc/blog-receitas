import express from "express";
import cors from "cors";
import logger from "./logger.js";
import recipeRoutes from "./routes/recipe.route.js";

global.log = logger;

const app = express();

app.use("/recipes", recipeRoutes);

app.use(express.json());
app.use(cors());

app.listen(3001, () => console.log("API started in PORT 3001"));
