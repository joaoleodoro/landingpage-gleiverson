$(document).ready(function() {
    $('.btn-mobile').on('click', function () {
        $('#mobile-menu').toggleClass('active');
        $('.btn-mobile').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.item-navbar');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)')
        }
    });

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%',
    })

    ScrollReveal().reveal('#description', {
        origin: 'bottom',
        duration: 1000,
        distance: '20%',
    })

    ScrollReveal().reveal('.card-bonus', {
        origin: 'bottom',
        duration: 1000,
        distance: '20%',
    })

    ScrollReveal().reveal('.container-suporte', {
        origin: 'left',
        duration: 2000,
        distance: '20%',
    })
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
    
    btnMostrarMais.addEventListener('click', () => {
        modulosCards.forEach(card => {
            card.classList.toggle('hidden');
        });


        if (modulosCards[0].classList.contains('hidden')) {
            btnMostrarMais.textContent = 'Mostrar mais';
        } else {
            btnMostrarMais.textContent = 'Mostrar menos';
        }
    });
});

