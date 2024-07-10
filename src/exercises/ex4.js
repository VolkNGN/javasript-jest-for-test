// Fonction pour récupérer les données depuis l'API OpenWeatherMap avec une API key
export const fetchData = async () => {
  try {
    // Coordonnées de Rennes
    let latitude = 48.1173; // La latitude de Rennes
    let longitude = -1.6778; // La longitude de Rennes
    // API Key
    let api_key = '1db3cf629ed34b77854175aa24be064d'; // Remplacez par votre propre clé API si nécessaire
    // URL de l'API avec les coordonnées et la clé API
    let api_url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api_key}&units=metric`;

    // Effectuer la requête GET vers l'API
    const response = await fetch(api_url);
    
    // Vérifier si la réponse est correcte 
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    // Parser les données JSON de la réponse
    const data = await response.json();
    
    return data;
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
};