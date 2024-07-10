// ex4.test.js

import { fetchData } from './ex4';

describe('fetchData', () => {
  test('should fetch real data from the API', async () => {
    jest.setTimeout(10000); // Augmentez le timeout si nécessaire pour les appels API réels

    const data = await fetchData();
    expect(data).toHaveProperty('main.temp'); // Vérifie que la réponse contient la propriété main.temp
  });

  test('should handle fetch errors', async () => {
    // Pour simuler une erreur, utiliser une URL incorrecte, 'jest.fn' fonction mock qui, lorsqu'elle est appelée, retourne une Promise résolue avec un objet ayant ok: false.
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
