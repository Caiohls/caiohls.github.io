window.addEventListener('load', function() {
    alert('Bem-vindo à nossa história de amor! Pabline e Caio!');
});

function toggleNavbar() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('hidden');
}


let slideIndex = 0;
const slides = document.querySelector('.gallery');
const totalSlides = slides.children.length;
const visibleSlides = 3; // Quantidade de imagens visíveis ao mesmo tempo

function mostrarSlide(index) {
    // Garantir que o índice está dentro dos limites
    if (index > totalSlides - visibleSlides) {
        slideIndex = totalSlides - visibleSlides; // Não ir além das últimas imagens visíveis
    } else if (index < 0) {
        slideIndex = 0;
    }

    // Calcular a largura de cada slide em porcentagem
    const slideWidthPercentage = 100 / visibleSlides / 2;

    // Calcular a distância para mover com base na largura de cada slide
    const offset = -slideIndex * slideWidthPercentage;
    slides.style.transform = `translateX(${offset}%)`;

}

function mudarSlide(n) {
    slideIndex += n;
    mostrarSlide(slideIndex);
}

// Exibe o primeiro slide ao carregar a página
mostrarSlide(slideIndex);