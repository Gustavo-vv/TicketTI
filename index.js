import 'dotenv/config';
import express from 'express';
import chamadoRoutes from './src/routes/chamadoRoutes.js';
import categoriaRoutes from './src/routes/categoriaRoutes.js';
import usuarioRoutes from './src/routes/usuarioRoutes.js';
import publicRoutes from './src/routes/publicRoutes.js';
import session from 'express-session';


const app = express();

app.use(express.json());

app.use(session({
  secret: process.env.SESSION_SECRET || 'default_secret',
  resave: false,
  saveUninitialized: false
}));
    
// Rotas públicas
app.use('/', publicRoutes);

// Rotas de Chamados, Categorias e Usuários
app.use('/chamados', chamadoRoutes);
app.use('/categorias', categoriaRoutes);
app.use('/usuarios', usuarioRoutes);

const PORT = process.env.PORT || 3000;

export default app;

