const messages = [
    "Meu coração bate mais forte quando estou com você!",
    "Você é a razão dos meus sorrisos e dos meus melhores dias!",
    "Juntos, podemos e vamos superar qualquer desafio!",
    "Eu te amo mais do que palavras podem expressar.",
    "Estar ao seu lado é onde eu sempre quero estar.",
    "Você faz todos os meus dias mais felizes e cheios de amor.",
    "Seu amor é o que ilumina meu caminho todos os dias.",
    "Não há lugar melhor no mundo do que nos seus braços.",
    "Cada momento com você é um presente que eu valorizo.",
    "Você é minha alma gêmea, meu amor eterno.",
    "A vida ao seu lado é a melhor aventura que eu poderia ter.",
    "Você é a pessoa que torna meus sonhos realidade.",
    "Com você, até os momentos mais simples são especiais.",
    "Minha felicidade é completa quando estou com você.",
    "Eu te amo mais a cada dia que passa, e sempre será assim."
];


const photos = [
    "images/foto1.png",
    "images/foto2.png",
    "images/foto3.png",
    "images/foto4.png",
    "images/foto1.png",
    "images/foto2.png",
    "images/foto3.png",
    "images/foto4.png",
    "images/foto1.png",
    "images/foto2.png",
    "images/foto3.png",
    "images/foto4.png",
    "images/foto1.png",
    "images/foto2.png",
    "images/foto3.png"
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
