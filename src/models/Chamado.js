import { prisma } from '../config/prisma.js';

export class Chamado {
  
  static async findAll() {
    return await prisma.chamado.findMany({
        include: {
            usuario: true,
            categoria: true
        },
        orderBy: {
            criadoEm: 'desc'
        }
    });
}

  static async findById(id) {
    return await prisma.chamado.findUnique({
      where: { id: parseInt(id) }
    });
  }

  static async create(data) {
    return await prisma.chamado.create({ data });
  }

  static async update(id, data) {
    return await prisma.chamado.update({
      where: { id: parseInt(id) },
      data
    });
  }
  static async updateStatus(id, status) {
    return await prisma.chamado.update({
      where: { id: parseInt(id) },
      data: { status }
    });
  }

  static async delete(id) {
    return await prisma.chamado.delete({
      where: { id: parseInt(id) }
    });
  }
  
}