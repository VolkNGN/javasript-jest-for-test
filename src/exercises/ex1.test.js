const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

// Charger le contenu HTML depuis le fichier index.html
const html = fs.readFileSync(path.resolve(__dirname, '../../index.html'), 'utf8');

describe('addClassToElement', () => {
  let document;

  // Configurer jsdom avant chaque test
  beforeEach(() => {
    const dom = new JSDOM(html);
    document = dom.window.document;

    // Simuler l'importation et l'exécution de ex1.js dans le contexte jsdom
    const addButton = document.getElementById('add-class-button');
    const element = document.getElementById('element');

    function addClassToElement() {
      element.classList.add('new-class');
    }

    addButton.addEventListener('click', addClassToElement);

    // Exporter la fonction pour les tests
    module.exports = addClassToElement;
  });

  test('should add new-class to element when button is clicked', () => {
    const addButton = document.getElementById('add-class-button');
    const element = document.getElementById('element');

    // Simuler un clic sur le bouton
    addButton.click();

    // Vérifier que la classe 'new-class' a été ajoutée à l'élément
    expect(element.classList.contains('new-class')).toBe(true);
  });
});
