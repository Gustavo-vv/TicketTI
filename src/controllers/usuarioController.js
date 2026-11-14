import  Usuario  from "../models/Usuario.js";


const usuarioController = {
    all: async (req, res) => {
        try {
            const usuarios = await Usuario.findAll();

            return res.status(200).json(usuarios);

        } catch (error) {
            return res.status(500).json({
                mensagem: "Erro interno ao buscar usuários"
            });
        }
    },

    findById: async (req, res) => {
        try {
            const usuario = await Usuario.findById(req.params.id);

            if (!usuario) {
                return res.status(404).json({
                    mensagem: "Usuário não encontrado"
                });
            }

            return res.status(200).json(usuario);

        } catch (error) {
            return res.status(500).json({
                mensagem: "Erro interno ao buscar usuário"
            });
        }
    },
        
create: async (req, res) => {
    try {
        const { nome, email } = req.body;

        if (!nome || !email) {
            return res.status(400).json({
                mensagem: "Todos os campos são obrigatórios"
            });
        }

        const usuario = await Usuario.create({
            nome,
            email
        });

        return res.status(201).json(usuario);

    } catch (error) {
        console.error("Erro ao cadastrar usuário:", error);

        return res.status(500).json({
            mensagem: "Erro interno ao cadastrar usuário"
        });
    }
},


    // Atualizar usuário
   
update: async (req, res) => {
    try {
        const usuario = await Usuario.update(req.params.id, {
            nome: req.body.nome,
            email: req.body.email
        });

        return res.status(200).json(usuario);

    } catch (error) {
        console.error("Erro ao atualizar usuário:", error);

        return res.status(500).json({
            mensagem: "Erro interno ao atualizar usuário"
        });
    }
},

    // Excluir usuário
    delete: async (req, res) => {
        try {
            const usuario = await Usuario.delete(req.params.id);

            if (!usuario) {
                return res.status(404).json({
                    mensagem: "Usuário não encontrado"
                });
            }

            return res.status(200).json({
                mensagem: "Usuário removido com sucesso!"
            });

        } catch (error) {
            return res.status(500).json({
                mensagem: "Erro interno ao remover usuário"
            });
        }
    }
    };

export default usuarioController;