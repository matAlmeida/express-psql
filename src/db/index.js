const Sequelize = require("sequelize");
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize({
  define: {
    timestamps: true
  },
  dialect: "postgres",
  database: process.env.POSTGRES_DATABASE,
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

export { sequelize };
