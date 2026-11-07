import 'dotenv/config';
import { PrismaClient } from '../generated/prisma/index.js';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import mariadb from 'mariadb';

// Cria o pool de conexões para o MySQL/MariaDB
const pool = mariadb.createPool({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'ticketti',
  connectionLimit: 5,
});

// Cria o adaptador exigido pelo Prisma 7
const adapter = new PrismaMariaDb(pool);

// Instancia o Prisma Client
export const prisma = new PrismaClient({ adapter });