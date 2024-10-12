const messages = [
    "Meu coração bate mais forte quando estou com você.",
    "Você é a razão dos meus sorrisos e dos meus melhores dias.",
    "Juntos, podemos superar qualquer desafio.",
    "Eu te amo mais do que palavras podem expressar."
];

const photos = [
    "images/foto1.png",
    "images/foto2.png",
    "images/foto3.png",
    "images/foto4.png"
];

let currentMessageIndex = 0;
let typingIndex = 0;
const messageElement = document.querySelector(".message");
const photoElement = document.querySelector(".photo");

function typeMessage() {
    if (typingIndex < messages[currentMessageIndex].length) {
        messageElement.innerHTML += messages[currentMessageIndex].charAt(typingIndex);
        typingIndex++;
        setTimeout(typeMessage, 50); // Velocidade de digitação
    }
}

function nextMessage() {
    // Limpa a mensagem atual
    messageElement.innerHTML = "";
    typingIndex = 0;
    
    // Avança para a próxima mensagem
    currentMessageIndex = (currentMessageIndex + 1) % messages.length;
    
    // Altera a foto
    photoElement.src = photos[currentMessageIndex];
    
    // Inicia o efeito de digitação
    typeMessage();
}

// Iniciar a primeira mensagem
typeMessage();
