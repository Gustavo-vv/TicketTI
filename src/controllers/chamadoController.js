import { Chamado } from "../models/Chamado.js";

const chamadoController = {
  all: async (req, res) => {
    try {
      const chamados = await Chamado.findAll();
      res.status(200).json(chamados);
    } catch (error) {
      res.status(500).json({ message: "Erro ao buscar chamados!" });
    }
  },

  findById: async (req, res) => {
    try {
      const chamado = await Chamado.findById(req.params.id);
      if (!chamado) {
        return res.status(404).json({ message: "Chamado Não Encontrado!" });
      }
      res.status(200).json(chamado);
    } catch (error) {
      res.status(500).json({ message: "Erro ao buscar chamado!" });
    }
  },

  create: async (req, res) => {
    try {
      const chamado = await Chamado.create(req.body);
      res.status(201).json(chamado);
    } catch (error) {
    res.status(400).json({ message:"Erro ao criar chamado!" });
    }
  },

  update: async (req, res) => {
    try {
      const chamado = await Chamado.findById(req.params.id);
      if (!chamado) {
        return res.status(404).json({ message: "Chamado Não Encontrado!" });
      }
      await chamado.update(req.body);
      res.status(200).json(chamado);
    } catch (error) {
      res.status(400).json({ message: "Erro ao atualizar chamado!" });
    }
  },

  delete: async (req, res) => {
    try {
      const chamado = await Chamado.findById(req.params.id);
      if (!chamado) {
        return res.status(404).json({ message: "Chamado Não Encontrado!" });
      }
      await chamado.destroy();
      res.status(200).json({ message: "Chamado deletado com sucesso" });
    } catch (error) {
      res.status(500).json({ message: "Erro ao deletar chamado!" });
    }
  }
};

export default chamadoController;