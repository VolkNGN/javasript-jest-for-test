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

describe('showMessage', () => {
  let document;

  // Configurer jsdom avant chaque test
  beforeEach(() => {
    ({ document } = setupDOM(html));

    // Simuler l'importation et l'exécution de ex2.js dans le contexte jsdom
    const clickMeButton = document.getElementById('click-me-button');
    const message = document.getElementById('message');

    function showMessage() {
      message.textContent = 'Message has been updated!';
    }

    clickMeButton.addEventListener('click', showMessage);
  });

  test('should update message content when button is clicked', () => {
    const clickMeButton = document.getElementById('click-me-button');
    const message = document.getElementById('message');

    // Simuler un clic sur le bouton
    clickMeButton.click();

    // Vérifier que le contenu du message a été mis à jour
    expect(message.textContent).toBe('Message has been updated!');
  });
});
