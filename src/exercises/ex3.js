const emailForm = document.getElementById('email-form');
const emailInput = document.getElementById('email-input');
const validationMessage = document.getElementById('validation-message');

function validateEmail() {
  // Your code here: Implement email validation and display a message accordingly.
}

emailForm.addEventListener('submit', function (e) {
  e.preventDefault();
  validateEmail();
});