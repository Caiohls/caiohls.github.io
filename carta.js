// Array para acompanhar os quadrados que foram clicados
let quadradosClicados = new Array(9).fill(false);

// Array de mensagens para cada quadrado
const mensagens = [
    "Amor, quero te beijar com os meus braços! Ouça Big Jet Plane!",
    "Desde o momento em que nossos olhares se cruzaram, meu coração acelerou, meu peito apertou e minha vida nunca mais foi a mesma! Esse SENTIMENTO nunca se acabará!!!!!!!!!!!!!!!!!",
    "Se eu pudesse, gravaria cada segundo ao seu lado, para reviver o calor do seu abraço, do seu corpo e a doçura do seu sorriso infinitas vezes. Pabline é o meu sempre, meu para sempre e além!",
    "Você é o começo, o meio e o fim de todos os meus sonhos para todo o meu futuro. O amor que sinto por você, vida,  transcende qualquer sentimento, qualquer explicação; ele simplesmente é, como o sol que nasce para aquecer o dia!",
    "Amar você, Pabline, é descobrir um universo de sensações, onde cada estrela representa uma memória, e cada galáxia é formada pelos sonhos que construiremos juntos. Você é a imensidão que me preenche por completo!",
    "Em você, encontrei tudo o que sempre busquei: amor, felicidade, paixão e um coração que bate no mesmo tempo que o meu. Cada momento ao seu lado é um capítulo perfeito da e para a nossa história!",
    "Se o tempo parasse, eu ainda encontraria mil maneiras de amar você em cada segundo. Você é o presente que dá sentido à minha existência, e a promessa de um futuro infinitamente belo!",
    "Nos seus olhos, encontrei o reflexo da mais pura felicidade, e nos seus lábios, o sabor do amor verdadeiro. Cada beijo é uma promessa de eternidade!",
    "Se houvesse uma maneira de contar quantas vezes você invade meus pensamentos, eu passaria a eternidade enumerando-as, pois amar você é uma constante em cada instante da minha vida!"
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
    const quadrado = document.querySelector(`.container:nth-child(${indice})`);

    // Altera a cor de fundo do quadrado para vermelho
    quadrado.style.backgroundColor = 'red';
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
