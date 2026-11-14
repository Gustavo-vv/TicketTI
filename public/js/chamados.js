
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

pesquisa.addEventListener("input", filtrarChamados);
filtroStatus.addEventListener("change", filtrarChamados);
filtroPrioridade.addEventListener("change", filtrarChamados);
