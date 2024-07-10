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

// Importer le fichier ex6.js pour s'assurer que les fonctions sont accessibles
const { findMax, removeDuplicates, includesValue, sortArray } = require('./ex6');

describe('Exercice 6', () => {
  // Test pour findMax function
  test('trouve la valeur maximale dans un tableau', () => {
    const arr = [1, 3, 2, 8, 5];
    expect(findMax(arr)).toBe(8); // Vérifier que la fonction retourne 8
  });

  // Test pour removeDuplicates function
  test('supprime les valeurs dupliquées d\'un tableau', () => {
    const arr = [1, 2, 2, 3, 4, 4, 5];
    expect(removeDuplicates(arr)).toEqual([1, 2, 3, 4, 5]); // Vérifier que la fonction retourne un tableau sans doublons
  });

  // Test pour includesValue function
  test('vérifie si un tableau contient une valeur spécifique', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(includesValue(arr, 3)).toBe(true); // Vérifier que la fonction retourne true pour une valeur présente
    expect(includesValue(arr, 6)).toBe(false); // Vérifier que la fonction retourne false pour une valeur absente
  });

  // Test pour sortArray function
  test('tri un tableau de nombres dans l\'ordre croissant', () => {
    const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5];
    expect(sortArray(arr)).toEqual([1, 1, 2, 3, 4, 5, 5, 6, 9]); // Vérifier que la fonction retourne le tableau trié
  });
});
