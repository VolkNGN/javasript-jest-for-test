const form = document.getElementById('email-form');
const emailInput = document.getElementById('email-input');
const validationMessage = document.getElementById('validation-message');

function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Empêche le comportement par défaut de soumission du formulaire
  const email = emailInput.value;
  if (validateEmail(email)) {
    validationMessage.textContent = 'Email is valid.';
    validationMessage.style.color = 'green';
  } else {
    validationMessage.textContent = 'Email is invalid.';
    validationMessage.style.color = 'red';
  }
});

module.exports = validateEmail;
