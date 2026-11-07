import { Router } from "express";
import categoriaController from "../controllers/categoriaController.js";

const categoriaRoutes = Router();

categoriaRoutes.get("/", categoriaController.all);
categoriaRoutes.post("/", categoriaController.create);
categoriaRoutes.put("/:id", categoriaController.update);
categoriaRoutes.delete("/:id", categoriaController.delete);

export default categoriaRoutes;