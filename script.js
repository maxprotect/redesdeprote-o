// Função para trocar as imagens da galeria automaticamente
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.gallery-container img');
    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }

    images[currentIndex].classList.add('active');
    setInterval(showNextImage, 3000); // Troca a imagem a cada 3 segundos
});

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function moveSlide(direction) {
    currentSlide += direction;

    // Limitar o número de slides para que ele volte ao início ou fim quando necessário
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    } else if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    // Mover o slide aplicando a transformação de acordo com o slide atual
    document.querySelector('.slider').style.transform = `translateX(-${currentSlide * 100}%)`;
}
