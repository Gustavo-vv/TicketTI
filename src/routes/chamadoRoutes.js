import {Router } from "express";
const chamadoRoutes = Router();
import chamadoController from "../controllers/chamadoController.js";

chamadoRoutes.get('/', chamadoController.all);
chamadoRoutes.get('/:id', chamadoController.findById);
chamadoRoutes.post('/', chamadoController.create);
chamadoRoutes.put('/:id', chamadoController.update);
chamadoRoutes.delete('/:id', chamadoController.delete);

export default chamadoRoutes;
