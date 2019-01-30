const Sequelize = require("sequelize");
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize({
  define: {
    timestamps: true
  },
  dialect: "postgres",
  database: process.env.PSQL_DATABASE,
  host: process.env.PSQL_HOST,
  port: process.env.PSQL_PORT,
  username: process.env.PSQL_USER,
  password: process.env.PSQL_PASSWORD,
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

export { sequelize };
