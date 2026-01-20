const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let index = 0;

function showSlide(i) {
  slides[index].classList.remove('active');
  index = (i + slides.length) % slides.length;
  slides[index].classList.add('active');
}

nextBtn.onclick = () => showSlide(index + 1);
prevBtn.onclick = () => showSlide(index - 1);

/* ===== SWIPE FOR MOBILE ===== */

let startX = 0;

document.addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
});

document.addEventListener('touchend', e => {
  const diff = startX - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 50) {
    diff > 0 ? showSlide(index + 1) : showSlide(index - 1);
  }
});

/* ===== FULLSCREEN ===== */

const fsBtn = document.querySelector('.fullscreen-btn');

fsBtn.addEventListener('click', () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
});


