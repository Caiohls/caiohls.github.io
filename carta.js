// Array para acompanhar os quadrados que foram clicados
let quadradosClicados = new Array(9).fill(false);

// Array de mensagens para cada quadrado
const mensagens = [
    "Você clicou no Quadrado 1! O amor está no ar!",
    "Quadrado 2, o caminho para o coração está ficando mais claro.",
    "Quadrado 3, estamos quase lá!",
    "Quadrado 4, o amor verdadeiro é construído aos poucos.",
    "Quadrado 5, você está no meio do caminho!",
    "Quadrado 6, a emoção só aumenta!",
    "Quadrado 7, o destino está mais próximo.",
    "Quadrado 8, o amor está prestes a se revelar.",
    "Quadrado 9, parabéns! Você desbloqueou o amor completo!"
];

// Função chamada quando um quadrado é clicado
function mostrarMensagem(index) {
    // Marca o quadrado como clicado
    quadradosClicados[index - 1] = true;

    // Mostra a mensagem correspondente no pop-up
    document.getElementById("popup-mensagem").innerText = mensagens[index - 1];
    document.getElementById("popup").style.display = "flex";

    // Verifica se todos os quadrados foram clicados
    if (quadradosClicados.every(clicado => clicado)) {
        // Exibe a carta se todos os quadrados foram clicados
        document.getElementById("carta").style.display = "block";
    }
}

// Função para fechar o pop-up
document.getElementById("fechar").onclick = function() {
    document.getElementById("popup").style.display = "none";
}

// Fecha o pop-up ao clicar fora do conteúdo
window.onclick = function(event) {
    if (event.target == document.getElementById("popup")) {
        document.getElementById("popup").style.display = "none";
    }
}


// Função para exibir a carta
function mostrarCarta() {
    document.getElementById("carta").style.display = "flex";
}

// Função para fechar a carta
function fecharCarta() {
    document.getElementById("carta").style.display = "none";
}

// Atualiza a lógica para verificar se todos os quadrados foram clicados
function mostrarMensagem(index) {
    quadradosClicados[index - 1] = true;

    document.getElementById("popup-mensagem").innerText = mensagens[index - 1];
    document.getElementById("popup").style.display = "flex";

    if (quadradosClicados.every(clicado => clicado)) {
        mostrarCarta();
    }
}

// Fechar o pop-up de mensagem quando clicado fora
window.onclick = function(event) {
    if (event.target == document.getElementById("popup")) {
        document.getElementById("popup").style.display = "none";
    } else if (event.target == document.getElementById("carta")) {
        fecharCarta();
    }
}
