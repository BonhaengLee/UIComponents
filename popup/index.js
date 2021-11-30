$toggleButton = document.querySelector('.toggle-button');
$container = document.querySelector('.popup-container');

$toggleButton.onclick = () => {
  $container.style.display = 'block';
};
