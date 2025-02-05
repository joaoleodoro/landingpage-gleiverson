$(document).ready(function() {
    $('.btn-mobile').on('click', function () {
        $('#mobile-menu').toggleClass('active');
        $('.btn-mobile').find('i').toggleClass('fa-x');
    });
});

const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const track = document.querySelector('.carousel-track');
const cards = document.querySelectorAll('.card');
const cardWidth = cards[0].offsetWidth + 15;

prevBtn.addEventListener('click', () => {
    if (track.scrollLeft === 0) {
        track.scrollLeft = track.scrollWidth;
    } else {
        track.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }
});

nextBtn.addEventListener('click', () => {
    if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 1) {
        track.scrollLeft = 0;
    } else {
        track.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
});


const modulosCard = document.querySelectorAll('.modulos-card');

modulosCard.forEach(mdcard => {
    mdcard.addEventListener('click', () => {
        mdcard.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const btnMostrarMais = document.getElementById('mostrar-mais');
    const modulosCards = document.querySelectorAll('.modulos-card.hidden');
    
    // Função para alternar a visibilidade dos cards
    btnMostrarMais.addEventListener('click', () => {
        modulosCards.forEach(card => {
            card.classList.toggle('hidden'); // Alterna entre mostrar e esconder
        });

        // Muda o texto do botão dependendo do estado
        if (modulosCards[0].classList.contains('hidden')) {
            btnMostrarMais.textContent = 'Mostrar mais';
        } else {
            btnMostrarMais.textContent = 'Mostrar menos';
        }
    });
});

