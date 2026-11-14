import { Chamado } from "../models/Chamado.js";
import { prisma } from "../config/prisma.js";

const paginaController = {

    index: async (req, res) => {
        try {
            const chamados = await Chamado.findAll();

            const total = chamados.length;
            const abertos = chamados.filter(c => c.status === "ABERTO").length;
            const emAndamento = chamados.filter(c => c.status === "EM_ANDAMENTO").length;
            const resolvidos = chamados.filter(c => c.status === "RESOLVIDO").length;

            res.render("index", {
                chamados,
                total,
                abertos,
                emAndamento,
                resolvidos
            });

        } catch (error) {
            console.error(error);
            res.status(500).send("Erro ao carregar dashboard.");
        }
    },

    chamados: async (req, res) => {
        try {
            const chamados = await Chamado.findAll();

            res.render("chamados", { chamados });

        } catch (error) {
            console.error(error);
            res.status(500).send("Erro ao carregar chamados.");
        }
    },

    novoChamado: async (req, res) => {
    try {

        const usuarios = await prisma.usuario.findMany({
            orderBy: { nome: "asc" }
        });

        const categorias = await prisma.categoria.findMany({
            orderBy: { nome: "asc" }
        });

        res.render("novoChamado", {
            usuarios,
            categorias
        });

    } catch (error) {
        console.error("Erro ao carregar formulário:", error);
        res.status(500).send("Erro ao carregar formulário de chamado.");
    }
}

};

export default paginaController;