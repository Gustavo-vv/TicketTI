
const pesquisa = document.getElementById("pesquisaChamado");
const filtroStatus = document.getElementById("filtroStatus");
const filtroPrioridade = document.getElementById("filtroPrioridade");

const linhas = document.querySelectorAll(".linha-chamado");
const semResultado = document.getElementById("semResultado");

function filtrarChamados() {

    const texto = pesquisa.value.toLowerCase();
    const status = filtroStatus.value;
    const prioridade = filtroPrioridade.value;

    let encontrados = 0;

    linhas.forEach(linha => {

        const conteudo = linha.textContent.toLowerCase();

        const correspondeTexto = conteudo.includes(texto);
        const correspondeStatus =
            !status || linha.dataset.status === status;

        const correspondePrioridade =
            !prioridade || linha.dataset.prioridade === prioridade;

        const mostrar =
            correspondeTexto &&
            correspondeStatus &&
            correspondePrioridade;

        linha.style.display = mostrar ? "" : "none";

        if (mostrar) {
            encontrados++;
        }

    });

    semResultado.hidden = encontrados !== 0;
}

async function excluirChamado(botao) {

    const id = botao.dataset.id;

    const confirmar = confirm(
        `Tem certeza que deseja excluir o chamado #${id}?`
    );

    if (!confirmar) {
        return;
    }

    try {

        await axios.delete(`/chamados/${id}`);

        alert("Chamado excluído com sucesso!");

        window.location.reload();

    } catch (error) {

        console.error("Erro ao excluir chamado:", error);

        alert(
            error.response?.data?.mensagem ||
            error.response?.data?.message ||
            "Erro ao excluir chamado."
        );

    }
}


pesquisa.addEventListener("input", filtrarChamados);
filtroStatus.addEventListener("change", filtrarChamados);
filtroPrioridade.addEventListener("change", filtrarChamados);
