// Seleciona o botão e o parágrafo de mensagem
const revealButton = document.getElementById('reveal-button');
const hiddenMessage = document.getElementById('hidden-message');

// Adiciona o evento de clique ao botão
revealButton.addEventListener('click', () => {
    // Exibe a mensagem e oculta o botão
    hiddenMessage.style.display = 'block';
    revealButton.style.display = 'none';
});
