const $toggleButton = document.querySelector('.toggle-button');
const $popupContainer = document.querySelector('.popup-container');
const $closeButton = document.querySelector('.close-button');
const $cancelButton = document.querySelector('.cancel-button');
const $okButton = document.querySelector('.ok-button');
const $popupMessage = document.querySelector('.popup-message');
const $popupInput = document.querySelector('.popup-input');

$toggleButton.onclick = () => {
  $popupContainer.style.display = $popupContainer.style.display === 'block' ? 'none' : 'block';
  $popupMessage.textContent = '';
};

$closeButton.onclick = () => {
  $popupContainer.style.display = 'none';
  $popupInput.value = '';
};

$cancelButton.onclick = () => {
  $popupContainer.style.display = 'none';
  $popupInput.value = '';
};

$okButton.onclick = () => {
  $popupContainer.style.display = 'none';
  const content = $popupInput.value.trim();

  if (content !== '') {
    $popupContainer.style.display = 'none';
    $popupMessage.textContent = 'from popup : ' + content;
  }

  $popupInput.value = '';
};

$popupInput.onkeyup = e => {
  if (e.key !== 'Enter') return;

  const content = $popupInput.value.trim();

  if (content !== '') {
    $popupContainer.style.display = 'none';
    $popupMessage.textContent = 'from popup : ' + content;
  }

  $popupInput.value = '';
};
