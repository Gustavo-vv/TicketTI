
let usuarioEditando = null;

// Abrir formulário de cadastro
function abrirModal() {
    usuarioEditando = null;

    const nome = prompt("Digite o nome do usuário:");
    if (!nome) return;

    const email = prompt("Digite o e-mail do usuário:");
    if (!email) return;

    cadastrarUsuario(nome, email);
}

// Cadastrar usuário
async function cadastrarUsuario(nome, email) {
    try {
        await axios.post("/usuarios/create", {
            nome,
            email
        });

        alert("Usuário cadastrado com sucesso!");
        window.location.reload();

    } catch (error) {
        console.error(error);

        alert(
            error.response?.data?.mensagem ||
            "Erro ao cadastrar usuário."
        );
    }
}

// Editar usuário
async function editarUsuario(botao) {
    const id = botao.dataset.id;

    try {
        const resposta = await axios.get(`/usuarios/${id}`);
        const usuario = resposta.data;

        const nome = prompt("Digite o novo nome:", usuario.nome);
        if (nome === null || !nome.trim()) return;

        const email = prompt("Digite o novo e-mail:", usuario.email);
        if (email === null || !email.trim()) return;

        await axios.put(`/usuarios/${id}`, {
            nome: nome.trim(),
            email: email.trim()
        });

        alert("Usuário atualizado com sucesso!");
        window.location.reload();

    } catch (error) {
        console.error(error);

        alert(
            error.response?.data?.mensagem ||
            "Erro ao atualizar usuário."
        );
    }
}

// Excluir usuário
async function excluirUsuario(botao) {
    const id = botao.dataset.id;
    const confirmar = confirm(
        "Tem certeza que deseja excluir este usuário?"
    );

    if (!confirmar) return;

    try {
        await axios.delete(`/usuarios/${id}`);

        alert("Usuário removido com sucesso!");
        window.location.reload();

    } catch (error) {
        console.error(error);

        alert(
            error.response?.data?.mensagem ||
            "Erro ao excluir usuário."
        );
    }
}
