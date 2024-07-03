// ex3.js
function validateEmail(email) {
  // Simple regex pour vérifier si l'email est valide
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

// Vérifiez que le document est disponible avant d'ajouter des écouteurs d'événements
if (typeof document !== 'undefined') {
  const emailForm = document.getElementById('email-form');
  const emailInput = document.getElementById('email-input');
  const validationMessage = document.getElementById('validation-message');

  emailForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = emailInput.value;
    if (validateEmail(email)) {
      validationMessage.textContent = 'Email is valid.';
      validationMessage.style.color = 'green';
    } else {
      validationMessage.textContent = 'Email is invalid.';
      validationMessage.style.color = 'red';
    }
  });
}

// Exporter la fonction pour les tests
module.exports = { validateEmail };
