const carousel = ($container, images) => {
  $container.innerHTML = `<div class="carousel-slides">
        ${images.map(image => `<img src="${image}" />`).join('')}      
      </div>
      <button class="carousel-control prev">&laquo;</button>
      <button class="carousel-control next">&raquo;</button>`;
};

carousel(document.querySelector('.carousel'), [
  'https://poiemaweb.com/assets/fs-images/exercise/movies/movie-1.jpg"',
  'https://poiemaweb.com/assets/fs-images/exercise/movies/movie-2.jpg"',
  'https://poiemaweb.com/assets/fs-images/exercise/movies/movie-3.jpg"',
  'https://poiemaweb.com/assets/fs-images/exercise/movies/movie-4.jpg"',
]);

const $carouselSlides = document.querySelector('.carousel-slides');
$carouselSlides.style.setProperty('--duration', '0.5s');

const carouselImages = document.querySelectorAll('.carousel-slides img');
const size = carouselImages[0].clientWidth;
const $carousel = document.querySelector('.carousel');
$carousel.style.opacity = 1;

const $prevButton = document.querySelector('.carousel-control.prev');
const $nextButton = document.querySelector('.carousel-control.next');

let counter = 1;
$nextButton.onclick = () => {
  if (counter >= carouselImages.length - 1) return;
  counter++;
  $carouselSlides.style.setProperty('--currentSlide', `${size * counter}`);
  console.log(counter, $carouselSlides.style.getPropertyValue('--currentSlide'));
};

$prevButton.onclick = () => {
  if (counter <= 0) return;
  counter--;
  $carouselSlides.style.setProperty('--currentSlide', `${size * counter}`);
};
