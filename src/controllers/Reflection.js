import uuidv4 from "uuid/v4";
import ReflectionModel from "../models/Reflection";

const Reflection = {
  async create(req, res) {
    try {
      const { success, low_point, take_away } = req.body;
      const inserted = await ReflectionModel.create({
        id: uuidv4(),
        success,
        low_point,
        take_away
      });

      return res.status(201).send(inserted);
    } catch (error) {
      return res.status(400).send(error);
    }
  },

  async getAll(req, res) {
    try {
      const founded = await ReflectionModel.findAll();
      return res.status(200).send(founded);
    } catch (error) {
      return res.status(400).send(error);
    }
  },

  async getOne(req, res) {
    try {
      const { id } = req.params;
      const founded = await ReflectionModel.findAll({ where: { id } });
      return res.status(200).send(founded);
    } catch (error) {
      if (error.name == "SequelizeDatabaseError") {
        return res.status(404).send({ message: "reflection not found" });
      }
      return res.status(400).send(error);
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const { success, low_point, take_away } = req.body;
      const updated = await ReflectionModel.update(
        {
          success,
          low_point,
          take_away
        },
        {
          where: { id },
          returning: true
        }
      );

      return res.status(200).send(updated);
    } catch (error) {
      if (error.name == "SequelizeDatabaseError") {
        return res.status(404).send({ message: "reflection not found" });
      }
      return res.status(400).send(error);
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      await ReflectionModel.destroy({
        where: { id }
      });

      return res.status(204).send({ message: "deleted" });
    } catch (error) {
      if (error.name == "SequelizeDatabaseError") {
        return res.status(404).send({ message: "reflection not found" });
      }
      return res.status(400).send(error);
    }
  }
};

export default Reflection;
