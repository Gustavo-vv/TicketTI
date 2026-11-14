import 'dotenv/config';
import express from 'express';
import chamadoRoutes from './src/routes/chamadoRoutes.js';
import categoriaRoutes from './src/routes/categoriaRoutes.js';
import usuarioRoutes from './src/routes/usuarioRoutes.js';
import session from 'express-session';
import paginaController from './src/controllers/paginaController.js';
import paginaRoutes from './src/routes/paginaRoutes.js';


const app = express();

app.use(express.json());
app.use(express.static("public"));


app.use(session({
  secret: process.env.SESSION_SECRET || 'SenhaSuperSecreta',
  resave: false,
  saveUninitialized: false
}));


app.set('view engine', 'ejs');
app.set('views', './src/views');


app.get('/', paginaController.index);

app.use('/', paginaRoutes);
app.use('/chamados', chamadoRoutes);
app.use('/categorias', categoriaRoutes);
app.use('/usuarios', usuarioRoutes);

const PORT = process.env.PORT || 3000;

export default app;

