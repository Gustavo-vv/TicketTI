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
    }  catch (error) {
  console.error(error);
  res.status(400).json({ message: "Erro ao criar chamado!", detalhe: error.message });
}
  },  
update: async (req, res) => {
    try {
        const chamado = await Chamado.findById(req.params.id);

        if (!chamado) {
            return res.status(404).json({
                message: "Chamado não encontrado!"
            });
        }

        const chamadoAtualizado = await Chamado.update(
            req.params.id,
            req.body
        );

        return res.status(200).json(chamadoAtualizado);

    } catch (error) {
        console.error("ERRO AO ATUALIZAR CHAMADO:", error);

        return res.status(400).json({
            message: "Erro ao atualizar chamado!",
            detalhe: error.message
        });
    }
},

updateStatus: async (req, res) => {
    try {
        const { status } = req.body;

        if (!status) {
            return res.status(400).json({
                message: "O status é obrigatório!"
            });
        }

        const chamado = await Chamado.findById(req.params.id);

        if (!chamado) {
            return res.status(404).json({
                message: "Chamado não encontrado!"
            });
        }

        const chamadoAtualizado = await Chamado.update(
            req.params.id,
            { status }
        );

        return res.status(200).json(chamadoAtualizado);

    } catch (error) {
        console.error("ERRO AO ATUALIZAR STATUS:", error);

        return res.status(500).json({
            message: "Erro ao atualizar status!",
            detalhe: error.message
        });
    }
},



   
delete: async (req, res) => {
    try {
        const chamado = await Chamado.findById(req.params.id);

        if (!chamado) {
            return res.status(404).json({
                message: "Chamado não encontrado!"
            });
        }

        await Chamado.delete(req.params.id);

        return res.status(200).json({
            message: "Chamado deletado com sucesso!"
        });

    } catch (error) {
        console.error("ERRO AO DELETAR CHAMADO:", error);

        return res.status(500).json({
            message: "Erro ao deletar chamado!",
            detalhe: error.message
        });
    }
},
  };

export default chamadoController;