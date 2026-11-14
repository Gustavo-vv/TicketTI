
function abrirModal() {
    const nome = prompt("Digite o nome da categoria:");

    if (nome === null || !nome.trim()) {
        return;
    }

    cadastrarCategoria(nome.trim());
}

// Cadastrar categoria
async function cadastrarCategoria(nome) {
    try {
        await axios.post("/categorias", {
            nome
        });

        alert("Categoria cadastrada com sucesso!");
        window.location.reload();

    } catch (error) {
        console.error("Erro ao cadastrar categoria:", error);

        alert(
            error.response?.data?.mensagem ||
            "Erro ao cadastrar categoria."
        );
    }
}

// Editar categoria
async function editarCategoria(botao) {
    const id = botao.dataset.id;
    const nomeAtual = botao.dataset.nome;

    const nome = prompt("Digite o novo nome:", nomeAtual);

    if (nome === null || !nome.trim()) {
        return;
    }

    try {
        await axios.put(`/categorias/${id}`, {
            nome: nome.trim()
        });

        alert("Categoria atualizada com sucesso!");
        window.location.reload();

    } catch (error) {
        console.error("Erro ao atualizar categoria:", error);

        alert(
            error.response?.data?.mensagem ||
            "Erro ao atualizar categoria."
        );
    }
}

// Excluir categoria
async function excluirCategoria(botao) {
    const id = botao.dataset.id;

    const confirmar = confirm(
        "Tem certeza que deseja excluir esta categoria?"
    );

    if (!confirmar) {
        return;
    }

    try {
        await axios.delete(`/categorias/${id}`);

        alert("Categoria removida com sucesso!");
        window.location.reload();

    } catch (error) {
        console.error("Erro ao excluir categoria:", error);

        alert(
            error.response?.data?.mensagem ||
            "Erro ao excluir categoria. Verifique se existem chamados vinculados."
        );
    }
}
