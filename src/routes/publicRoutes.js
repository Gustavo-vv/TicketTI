import { Router } from "express";

const publicRoutes = Router();

publicRoutes.get('/api', (req, res) => {
    res.status(200).json({
        message: "Bem-vindo à API de Chamados!"
    });
});

export default publicRoutes;