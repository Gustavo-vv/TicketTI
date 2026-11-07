import 'dotenv/config';
import express from 'express';
import chamadoRoutes from './src/routes/chamadoRoutes.js';
import categoriaRoutes from './src/routes/categoriaRoutes.js';
import usuarioRoutes from './src/routes/usuarioRoutes.js';

const app = express();

app.use(express.json());

// Rotas públicas
app.use('/', publicRoutes);

// Rotas de Chamados, Categorias e Usuários
app.use('/chamados', chamadoRoutes);
app.use('/categorias', categoriaRoutes);
app.use('/usuarios', usuarioRoutes);