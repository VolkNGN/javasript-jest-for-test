const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

// Charger le contenu HTML depuis le fichier index.html
const html = fs.readFileSync(path.resolve(__dirname, '../../index.html'), 'utf8');

// Fonction utilitaire pour configurer le DOM
function setupDOM(html) {
  const dom = new JSDOM(html);
  const { document } = dom.window;
  return { dom, document };
}

// Importer la fonction validateEmail depuis ex3.js
const validateEmail = require('./ex3');

describe('validateEmail', () => {
  test('should return true for valid emails', () => {
    expect(validateEmail('test@example.com')).toBe(true);
    expect(validateEmail('user.name+tag+sorting@example.com')).toBe(true);
    expect(validateEmail('user@example.co.jp')).toBe(true);
  });

  test('should return false for invalid emails', () => {
    expect(validateEmail('plainaddress')).toBe(false);
    expect(validateEmail('@missingusername.com')).toBe(false);
    expect(validateEmail('username@.com')).toBe(false);
    expect(validateEmail('username@com')).toBe(false);
  });
});

describe('Form submission tests', () => {
  let document, emailInput, validationMessage, form;

  beforeEach(() => {
    ({ document } = setupDOM(html));

    // Simuler l'importation et l'exécution de ex3.js dans le contexte jsdom
    const emailFormScript = require(path.resolve(__dirname, './ex3.js'));

    form = document.getElementById('email-form');
    emailInput = document.getElementById('email-input');
    validationMessage = document.getElementById('validation-message');

    // Simuler la soumission du formulaire
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const email = emailInput.value;
      if (validateEmail(email)) {
        validationMessage.textContent = 'Email is valid.';
        validationMessage.style.color = 'green';
      } else {
        validationMessage.textContent = 'Email is invalid.';
        validationMessage.style.color = 'red';
      }
    });
  });

  test('should display valid message for valid email', () => {
    emailInput.value = 'test@example.com';
    form.dispatchEvent(new Event('submit'));

    expect(validationMessage.textContent).toBe('Email is valid.');
    expect(validationMessage.style.color).toBe('green');
  });

  test('should display invalid message for invalid email', () => {
    emailInput.value = 'invalid-email';
    form.dispatchEvent(new Event('submit'));

    expect(validationMessage.textContent).toBe('Email is invalid.');
    expect(validationMessage.style.color).toBe('red');
  });
});
