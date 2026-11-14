
const form = document.getElementById("formChamado");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const dados = {
        titulo: document.getElementById("titulo").value.trim(),
        descricao: document.getElementById("descricao").value.trim(),
        prioridade: document.getElementById("prioridade").value,
        status: "ABERTO",
        usuarioId: Number(document.getElementById("usuarioId").value),
        categoriaId: Number(document.getElementById("categoriaId").value)
    };

    try {
        const resposta = await axios.post("/chamados/create", dados);

        alert("Chamado cadastrado com sucesso!");

        window.location.href = "/";

    } catch (error) {
        console.error("Erro ao cadastrar:", error);

        alert(
            error.response?.data?.detalhe ||
            error.response?.data?.message ||
            "Erro ao cadastrar chamado!"
        );
    }
});
