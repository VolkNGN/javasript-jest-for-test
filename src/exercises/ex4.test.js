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

// Importer les fonctions depuis ex4.js
const { fetchData, removeWeatherContainer } = require('./ex4');

// Obtenez les éléments du DOM par leur ID
const weatherContainer = document.getElementById('weather-container');
const removeWeatherButton = document.getElementById('remove-weather-button');

describe('fetchData', () => {
  // Test pour vérifier que la fonction fetchData récupère des données réelles de l'API
  test('should fetch real data from the API', async () => {
    jest.setTimeout(10000); // Augmentez le timeout si nécessaire pour les appels API réels

    const data = await fetchData();
    expect(data).toHaveProperty('main.temp'); // Vérifie que la réponse contient la propriété main.temp
  });

  // Test pour vérifier que la fonction fetchData gère les erreurs de récupération
  test('should handle fetch errors', async () => {
    // Pour simuler une erreur, utiliser une URL incorrecte
    const originalFetch = global.fetch;
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
      })
    );

    try {
      await fetchData();
    } catch (error) {
      expect(error.message).toBe('Network response was not ok');
    }

    global.fetch = originalFetch; // Restaurer l'original fetch après le test
  });
});

describe('removeWeatherContainer', () => {
  // Test pour vérifier que la fonction removeWeatherContainer supprime le conteneur météo
  test('should remove the weather container', () => {
    document.body.innerHTML = `
      <div id="weather-container">
        <div id="weather">
          <p>Chargement des données météo...</p>
        </div>
      </div>
    `;

    removeWeatherContainer();

    const weatherContainer = document.getElementById('weather-container');
    expect(weatherContainer).toBeNull();
  });

  // Test pour vérifier que le bouton remove-weather fonctionne
  test('should remove weather container when button is clicked', () => {
    document.body.innerHTML = `
      <button id="remove-weather-button">Remove weather</button>
      <div id="weather-container">
        <div id="weather">
          <p>Chargement des données météo...</p>
        </div>
      </div>
    `;

    const removeWeatherButton = document.getElementById('remove-weather-button');
    removeWeatherButton.addEventListener('click', () => {
      removeWeatherContainer();
    });

    removeWeatherButton.click();

    const weatherContainer = document.getElementById('weather-container');
    expect(weatherContainer).toBeNull();
  });
});
