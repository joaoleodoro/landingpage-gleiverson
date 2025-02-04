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

