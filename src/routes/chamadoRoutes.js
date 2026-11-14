import {Router } from "express";
const chamadoRoutes = Router();
import chamadoController from "../controllers/chamadoController.js";

chamadoRoutes.get('/', chamadoController.all);
chamadoRoutes.get('/:id', chamadoController.findById);
chamadoRoutes.post('/create', chamadoController.create);
chamadoRoutes.put('/:id', chamadoController.update);
chamadoRoutes.patch('/:id/status', chamadoController.updateStatus);
chamadoRoutes.delete('/:id', chamadoController.delete);

export default chamadoRoutes;
