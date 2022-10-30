import express from "express";
import cors from "cors";
import logger from "./logger.js";
import recipeRoutes from "./routes/recipe.route.js";

import * as dotenv from "dotenv";

dotenv.config();

global.log = logger;

const app = express();

app.use(express.json());
app.use(cors());

app.use("/recipes", recipeRoutes);

app.use((err, req, res, next) => {
  global.log.error(`${req.method} ${req.baseUrl} - ${err}`);
  res.status(400).send({ error: err });
});

app.listen(3001, () => {
  console.log("API started in PORT 3001");
});
