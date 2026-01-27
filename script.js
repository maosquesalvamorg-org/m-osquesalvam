function copiarChave() {
    const chave = "doecasacanina@gmail.com";
    const aviso = document.getElementById("aviso-copiado");

    // Tenta o método moderno primeiro
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(chave).then(() => {
            mostrarSucesso(aviso);
        }).catch(err => {
            console.error("Erro ao copiar: ", err);
            copiarFallback(chave, aviso);
        });
    } else {
        // Plano B para navegadores antigos ou sem permissão HTTPS
        copiarFallback(chave, aviso);
    }
}

function copiarFallback(texto, elementoAviso) {
    const textArea = document.createElement("textarea");
    textArea.value = texto;
    document.body.appendChild(textArea);
    textArea.select();
    try {
        document.execCommand('copy');
        mostrarSucesso(elementoAviso);
    } catch (err) {
        alert("Não foi possível copiar. Por favor, selecione o e-mail manualmente.");
    }
    document.body.removeChild(textArea);
}

function mostrarSucesso(elemento) {
    elemento.style.display = "block";
    setTimeout(() => {
        elemento.style.display = "none";
    }, 3000);
}
function abrirModal(nome, resumo, imagem, historia) {
    const modal = document.getElementById("modal-pet");
    const detalhes = document.getElementById("detalhes-pet");

    detalhes.innerHTML = `
        <img src="${imagem}" style="width:100%; border-radius:10px; height:300px; object-fit:cover;">
        <h2 style="margin-top:15px; color:#2e8b57;">${nome}</h2>
        <p><strong>Resumo:</strong> ${resumo}</p>
        <hr style="border:0; border-top:1px solid #eee; margin:15px 0;">
        <p>${historia}</p>
        <br>
        <a href="https://wa.me/5568999999999?text=Olá! Tenho interesse em adotar o ${nome}" target="_blank" class="btn-perfil" style="display:block; text-align:center; background:#27ae60;">Quero Adotar o ${nome}</a>
    `;

    modal.style.display = "block";
}

function fecharModal() {
    document.getElementById("modal-pet").style.display = "none";
}

// Fecha se clicar fora da janelinha
window.onclick = function(event) {
    const modal = document.getElementById("modal-pet");
    if (event.target == modal) { modal.style.display = "none"; }
}
// Pega o botão
let meuBotao = document.getElementById("btnTopo");

// Quando o usuário rolar a página 300px para baixo, o botão aparece
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        meuBotao.style.display = "block";
    } else {
        meuBotao.style.display = "none";
    }
}

// Quando clicar, volta para o topo suavemente
function voltarAoTopo() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Faz a subida ser suave e não um pulo brusco
    });
}