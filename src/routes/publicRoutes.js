import { Router } from "express";

const publicRoutes = Router();

publicRoutes.get('/', (req, res) => {
  res.status(200).json({ message: "Bem-vindo à API de Chamados!" });
});

export default publicRoutes;