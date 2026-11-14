import { Router } from "express";
import paginaController from "../controllers/paginaController.js";

const paginaRoutes = Router();

paginaRoutes.get("/", paginaController.index);

paginaRoutes.get("/chamados", paginaController.chamados);

paginaRoutes.get("/chamados/novo", paginaController.novoChamado);

paginaRoutes.get("/usuarios", paginaController.usuarios);

paginaRoutes.get("/categorias", paginaController.categorias);

export default paginaRoutes;