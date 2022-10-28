import Sequelize from "sequelize";
import db from "../repositories/db.js";

const Recipe = db.define("recipes", {
  recipeid: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  ingredients: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    allowNull: false,
  },
  content: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  createdat: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
    allowNull: false,
  },
});

export default Recipe;
