const fs = require('fs'); // Importation du module fs pour lire les fichiers
const path = require('path'); // Importation du module path pour gérer et transformer les chemins de fichiers
const { JSDOM } = require('jsdom'); // Importation de JSDOM pour simuler un environnement DOM dans Node.js

// Configurer jsdom pour simuler un environnement de navigateur
const html = fs.readFileSync(path.resolve(__dirname, '../../index.html'), 'utf8'); // Lecture du fichier HTML
const dom = new JSDOM(html, { runScripts: "dangerously", resources: "usable" }); // Création d'un nouvel objet JSDOM avec les options nécessaires
global.window = dom.window; // Définir global.window pour qu'il soit accessible globalement
global.document = dom.window.document; // Définir global.document pour qu'il soit accessible globalement
global.navigator = {
  userAgent: 'node.js',
}; // Définir global.navigator pour simuler l'objet navigator du navigateur

// Importer la fonction validateEmail depuis ex3.js
const { validateEmail } = require('./ex3');

// Obtenez les éléments du DOM par leur ID
const form = document.getElementById('email-form');
const emailInput = document.getElementById('email-input');
const validationMessage = document.getElementById('validation-message');

describe('validateEmail', () => {
  // Test pour vérifier que la fonction retourne true pour les emails valides
  test('should return true for valid emails', () => {
    emailInput.value = 'test@example.com'; // Définir une valeur valide pour l'input email
    expect(validateEmail(emailInput.value)).toBe(true); // Vérifier que validateEmail retourne true
  });

  // Test pour vérifier que la fonction retourne false pour les emails invalides
  test('should return false for invalid emails', () => {
    emailInput.value = 'invalid-email'; // Définir une valeur invalide pour l'input email
    expect(validateEmail(emailInput.value)).toBe(false); // Vérifier que validateEmail retourne false
  });

  describe('Form submission tests', () => {
    // Test pour vérifier l'affichage du message de validation pour un email valide
    test('should display valid message for valid email', () => {
      emailInput.value = 'test@example.com'; // Définir une valeur valide pour l'input email
      form.dispatchEvent(new dom.window.Event('submit')); // Simuler la soumission du formulaire

      expect(validationMessage.textContent).toBe('Email is valid.'); // Vérifier que le message de validation est correct
      expect(validationMessage.style.color).toBe('green'); // Vérifier que la couleur du texte est verte
    });

    // Test pour vérifier l'affichage du message de validation pour un email invalide
    test('should display invalid message for invalid email', () => {
      emailInput.value = 'invalid-email'; // Définir une valeur invalide pour l'input email
      form.dispatchEvent(new dom.window.Event('submit')); // Simuler la soumission du formulaire

      expect(validationMessage.textContent).toBe('Email is invalid.'); // Vérifier que le message de validation est correct
      expect(validationMessage.style.color).toBe('red'); // Vérifier que la couleur du texte est rouge
    });
  });
});
