import {prisma} from '../config/prisma.js';

export class Categoria {
  static async findAll() {
    return await prisma.categoria.findMany();
  }

  static async findByName(nome) {
    return await prisma.categoria.findUnique({
      where: { name: nome }
    });
  }

  static async create(data) {
    return await prisma.categoria.create({ data });
  }

  static async update(id, data) {
    return await prisma.categoria.update({
      where: { id: parseInt(id) },
      data
    });
  }

  static async delete(id) {
    return await prisma.categoria.delete({
      where: { id: parseInt(id) }
    });
  }
}