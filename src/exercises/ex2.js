const clickMeButton = document.getElementById('click-me-button');
const message = document.getElementById('message');

function showMessage() {
  message.textContent = 'Message has been updated!';
}

clickMeButton.addEventListener('click', showMessage);

module.exports = showMessage;
