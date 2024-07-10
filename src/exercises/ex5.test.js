const fs = require('fs'); // Importation du module fs pour lire les fichiers
const path = require('path'); // Importation du module path pour gérer et transformer les chemins de fichiers
const { JSDOM } = require('jsdom'); // Importation de JSDOM pour simuler un environnement DOM dans Node.js

// Configuration de JSDOM pour simuler un environnement de navigateur
const html = fs.readFileSync(path.resolve(__dirname, '../../index.html'), 'utf8'); // Lecture du fichier HTML
const dom = new JSDOM(html, { runScripts: "dangerously", resources: "usable" }); // Création d'un nouvel objet JSDOM avec les options nécessaires
global.window = dom.window; // Définir global.window pour qu'il soit accessible globalement
global.document = dom.window.document; // Définir global.document pour qu'il soit accessible globalement
global.navigator = {
  userAgent: 'node.js',
}; // Définir global.navigator pour simuler l'objet navigator du navigateur

// Importer le fichier ex5.js pour s'assurer que les écouteurs d'événements sont configurés
require('./ex5');

describe('Exercice 5', () => {
  let hoverArea;
  let interactionResult;

  // Avant chaque test, obtenir les éléments du DOM nécessaires (ici Hover-area et Interaction-result)
  beforeEach(() => {
    hoverArea = document.getElementById('hover-area');
    interactionResult = document.getElementById('interaction-result');
  });

  // Test pour vérifier que le texte se met à jour lors du survol de la zone
  test('affiche un message lorsque l\'utilisateur survole la zone', () => {
    const mouseOverEvent = new dom.window.Event('mouseover'); // Créer un nouvel événement de survol
    hoverArea.dispatchEvent(mouseOverEvent); // Déclencher l'événement de survol sur la zone de survol
    expect(interactionResult.textContent).toBe('You are hovering over the area!'); // Vérifier que le texte de interactionResult est mis à jour
  });

  // Test pour vérifier que le texte se réinitialise lorsque la souris quitte la zone
  test('réinitialise le message lorsque la souris quitte la zone', () => {
    const mouseOutEvent = new dom.window.Event('mouseout'); // Créer un nouvel événement de sortie de la souris
    hoverArea.dispatchEvent(mouseOutEvent); // Déclencher l'événement de sortie de la souris sur la zone de survol
    expect(interactionResult.textContent).toBe('Hover over the area.'); // Vérifier que le texte de interactionResult est réinitialisé
  });
});
