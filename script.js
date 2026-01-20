const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');

let index = 0;
let startX = 0;

function showNext() {
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}

nextBtn.addEventListener('click', showNext);

// свайп
document.addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
});

document.addEventListener('touchend', e => {
  const endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) {
    showNext();
  }
});
