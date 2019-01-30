const Sequelize = require("sequelize");
import { sequelize } from "../db";

const Reflection = sequelize.define("reflection", {
  id: {
    type: Sequelize.UUID,
    primaryKey: true
  },
  success: {
    type: Sequelize.STRING,
    allowNull: false
  },
  low_point: {
    type: Sequelize.STRING,
    allowNull: false
  },
  take_away: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

Reflection.sync().thenReturn();

export default Reflection;
