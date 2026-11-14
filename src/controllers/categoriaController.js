import { Categoria } from "../models/Categoria.js";

class CategoriaController {
  all = async (req, res) => {
    try {
      const categorias = await Categoria.findAll();
      return res.status(200).json(categorias);
    } catch (error) {
      return res.status(500).json({ mensagem: "Erro interno ao buscar categorias" });
    }
  };

  create = async (req, res) => {
    try {
      const { nome } = req.body;
      if (!nome) {
        return res.status(400).json({ mensagem: "O nome é obrigatório" });
      }
      const categoria = await Categoria.create({ nome });
      return res.status(201).json(categoria);
    } catch (error) {
      return res.status(500).json({ mensagem: "Erro interno ao criar categoria" });
    }
  };

  update = async (req, res) => {
    try {
      const categoria = await Categoria.update(req.params.id, { nome: req.body.nome });
      return res.status(200).json(categoria);
    } catch (error) {
      return res.status(500).json({ mensagem: "Erro interno ao atualizar categoria" });
    }
  };

  
delete = async (req, res) => {
    try {
        const id = Number(req.params.id);

        if (!id || isNaN(id)) {
            return res.status(400).json({
                mensagem: "ID da categoria inválido"
            });
        }

        await Categoria.delete(id);

        return res.status(200).json({
            mensagem: "Categoria removida com sucesso!"
        });

    } catch (error) {
        console.error("ERRO AO REMOVER CATEGORIA:", error);

        return res.status(500).json({
            mensagem: "Erro interno ao remover categoria",
            detalhe: error.message
        });
    }
}
};

export default new CategoriaController();