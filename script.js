const slides = document.querySelectorAll('.slide');
let index = 0;

function show(i) {
  slides[index].classList.remove('active');
  index = (i + slides.length) % slides.length;
  slides[index].classList.add('active');
}

document.querySelector('.next').onclick = () => show(index + 1);
document.querySelector('.prev').onclick = () => show(index - 1);
