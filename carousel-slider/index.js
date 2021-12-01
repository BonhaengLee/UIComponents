const carousel = ($container, images) => {
  $container.innerHTML = `<div class="carousel-slides">
        <img src="https://poiemaweb.com/assets/fs-images/exercise/movies/movie-4.jpg" />
        <img src="https://poiemaweb.com/assets/fs-images/exercise/movies/movie-1.jpg" />
        <img src="https://poiemaweb.com/assets/fs-images/exercise/movies/movie-2.jpg" />
        <img src="https://poiemaweb.com/assets/fs-images/exercise/movies/movie-3.jpg" />
        <img src="https://poiemaweb.com/assets/fs-images/exercise/movies/movie-4.jpg" />
        <img src="https://poiemaweb.com/assets/fs-images/exercise/movies/movie-1.jpg" />
      </div>
      <button class="carousel-control prev">&laquo;</button>
      <button class="carousel-control next">&raquo;</button>`;

  // console.log($container);
};

carousel(document.querySelector('.carousel'), [
  'https://poiemaweb.com/assets/fs-images/exercise/movies/movie-1.jpg"',
  'https://poiemaweb.com/assets/fs-images/exercise/movies/movie-2.jpg"',
  'https://poiemaweb.com/assets/fs-images/exercise/movies/movie-3.jpg"',
  'https://poiemaweb.com/assets/fs-images/exercise/movies/movie-4.jpg"',
]);

const $prevButton = document.querySelector('.carousel-control.prev');
const $nextButton = document.querySelector('.carousel-control.next');

$prevButton.onclick = () => {};
$nextButton.onclick = () => {};
