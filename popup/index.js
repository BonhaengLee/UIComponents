const $toggleButton = document.querySelector('.toggle-button');
const $popupContainer = document.querySelector('.popup-container');
const $closeButton = document.querySelector('.close-button');
const $cancelButton = document.querySelector('.cancel-button');
const $okButton = document.querySelector('.ok-button');
const $popupMessage = document.querySelector('.popup-message');
const $popupInput = document.querySelector('.popup-input');

$toggleButton.onclick = () => {
  $popupContainer.style.display = $popupContainer.style.display === 'block' ? 'none' : 'block';
};

$closeButton.onclick = e => {
  e.target.closest('div').style.display = 'none';
};

$cancelButton.onclick = e => {
  e.target.closest('div').style.display = 'none';
};

$okButton.onclick = e => {
  e.target.closest('div').style.display = 'none';
  console.log(e.target.closest('input').value);

  $popupMessage.textContent =
    e.target.closest('input').value.trim() !== '' ? 'from popup : ' + e.target.closest('input').value : '';
};

$popupInput.onchange = e => {
  console.log(e.target.value);
  e.target.closest('div').style.display = 'none';
  $popupMessage.textContent =
    e.target.closest('input').value.trim() !== '' ? 'from popup : ' + e.target.closest('input').value : '';
};
