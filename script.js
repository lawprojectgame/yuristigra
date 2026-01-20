const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let index = 0;

function showSlide(i) {
  slides[index].classList.remove('active');
  index = (i + slides.length) % slides.length;
  slides[index].classList.add('active');
}

nextBtn.addEventListener('click', () => {
  showSlide(index + 1);
});

prevBtn.addEventListener('click', () => {
  showSlide(index - 1);
});

/* свайп для телефона */
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
