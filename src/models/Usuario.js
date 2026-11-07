import {prisma} from '../config/prisma.js';

export  default class Usuario {

  static async findAll() {
    return await prisma.usuario.findMany();
  }

  static async findById(id) {
    return await prisma.usuario.findUnique({
      where: { id: parseInt(id) }
    });
  }

  static async create(data) {
    return await prisma.usuario.create({ data });
  }

  static async update(id, data) {
    return await prisma.usuario.update({
      where: { id: parseInt(id) },
      data
    });
  }

  static async delete(id) {
    return await prisma.usuario.delete({
      where: { id: parseInt(id) }
    });
  }
}