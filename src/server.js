import express from "express";
import dotenv from "dotenv";
import Reflection from "./controllers/Reflection";

dotenv.config();
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).send({ message: "Hello World!" });
});

app.post("/api/v1/reflections", Reflection.create);
app.get("/api/v1/reflections", Reflection.getAll);
app.get("/api/v1/reflections/:id", Reflection.getOne);
app.put("/api/v1/reflections/:id", Reflection.update);
app.delete("/api/v1/reflections/:id", Reflection.delete);

app.listen(3000);
console.log("app running on port ", 3000);
