const Sequelize = require("sequelize");
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize({
  define: {
    timestamps: true
  },
  dialect: "postgres",
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  retry: {
    match: [
      /SequelizeConnectionError/,
      /SequelizeConnectionRefusedError/,
      /SequelizeHostNotFoundError/,
      /SequelizeHostNotReachableError/,
      /SequelizeInvalidConnectionError/,
      /SequelizeConnectionTimedOutError/
    ],
    name: "query",
    backoffBase: 100,
    backoffExponent: 1.1,
    timeout: 60000,
    max: Infinity
  }
});

sequelize.authenticate().then();

export { sequelize };
