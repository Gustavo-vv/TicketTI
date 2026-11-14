import { Router } from "express";
import usuarioController from "../controllers/usuarioController.js";

const usuarioRoutes = Router();

usuarioRoutes.get("/", usuarioController.all);
usuarioRoutes.get("/:id", usuarioController.findById);
usuarioRoutes.post("/create", usuarioController.create);
usuarioRoutes.put("/:id", usuarioController.update);
usuarioRoutes.delete("/:id", usuarioController.delete);


export default usuarioRoutes;