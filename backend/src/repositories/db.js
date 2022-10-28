import Sequelize from "sequelize";
import * as dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
  `postgres://${process.env.USER_DB}:${process.env.PASSWORD_DB}@${process.env.URL_DB}/${process.env.NAME_DB}`,
  {
    dialect: "postgres",
    define: {
      timestamps: false,
    },
  }
);

export default sequelize;
