
const dataAtual = document.getElementById("dataAtual");

dataAtual.textContent = new Date().toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric"
});


const pesquisa = document.getElementById("pesquisa");

pesquisa.addEventListener("input", () => {
    const texto = pesquisa.value.toLowerCase();

    const linhas = document.querySelectorAll(".linha-chamado");

    linhas.forEach(linha => {
        const conteudo = linha.textContent.toLowerCase();

        linha.style.display = conteudo.includes(texto) ? "" : "none";
    });
});



function mostrarMensagem(mensagem) {
    const toast = document.getElementById("toast");

    toast.textContent = mensagem;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}



const seletoresStatus = document.querySelectorAll(".status-select");

seletoresStatus.forEach(seletor => {

    seletor.addEventListener("change", async () => {

        const id = seletor.dataset.id;
        const novoStatus = seletor.value;
        const statusAnterior = seletor.dataset.status;

        seletor.disabled = true;

        try {
            const resposta = await fetch(`/chamados/${id}/status`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    status: novoStatus
                })
            });

            const dados = await resposta.json();

            if (!resposta.ok) {
                throw new Error(dados.message || "Erro ao atualizar status.");
            }

            const elementoStatus = document.getElementById(`status-${id}`);

            elementoStatus.textContent = novoStatus.replace("_", " ");

            elementoStatus.className = `status status-${novoStatus.toLowerCase()}`;

            seletor.dataset.status = novoStatus;

            mostrarMensagem("Status atualizado com sucesso!");

        } catch (error) {

            seletor.value = statusAnterior;

            mostrarMensagem(error.message);

        } finally {
            seletor.disabled = false;
        }

    });

});
