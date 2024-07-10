// ex6.js

// Function to find the maximum value in an array
function findMax(arr) {
    return Math.max(...arr);
  }
  
  // Function to remove duplicate values from an array
  function removeDuplicates(arr) {
    return [...new Set(arr)];
  }
  
  // Function to check if an array includes a specific value
  function includesValue(arr, value) {
    return arr.includes(value);
  }
  
  // Function to sort an array of numbers in ascending order
  function sortArray(arr) {
    return arr.slice().sort((a, b) => a - b);
  }
  
  // Vérifiez que le document est disponible avant d'ajouter des écouteurs d'événements
  if (typeof document !== 'undefined') {
    document.getElementById('find-max-button').addEventListener('click', () => {
      const arr = [1, 3, 2, 8, 5];
      const result = findMax(arr);
      document.getElementById('max-result').textContent = `Max value: ${result}`;
    });
  
    document.getElementById('remove-duplicates-button').addEventListener('click', () => {
      const arr = [1, 2, 2, 3, 4, 4, 5];
      const result = removeDuplicates(arr);
      document.getElementById('duplicates-result').textContent = `Array without duplicates: ${result.join(', ')}`;
    });
  
    document.getElementById('includes-value-button').addEventListener('click', () => {
      const arr = [1, 2, 3, 4, 5];
      const value = 3; // You can change this value to test different cases
      const result = includesValue(arr, value);
      document.getElementById('includes-result').textContent = `Array includes ${value}: ${result}`;
    });
  
    document.getElementById('sort-array-button').addEventListener('click', () => {
      const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5];
      const result = sortArray(arr);
      document.getElementById('sort-result').textContent = `Sorted array: ${result.join(', ')}`;
    });
  }
  
  // Exporter les fonctions pour les tests uniquement si le module est défini (c'est-à-dire dans Node.js)
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      findMax,
      removeDuplicates,
      includesValue,
      sortArray
    };
  }
  