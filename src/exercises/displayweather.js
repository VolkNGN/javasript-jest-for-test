import { fetchData } from './ex4.js';

const displayWeather = async () => {
  const weatherElement = document.getElementById('weather');

  try {
    const data = await fetchData();
    if (data) {
      const temperature = data.main.temp;
      const description = data.weather[0].description;
      const city = data.name;
      const country = data.sys.country;
      const pressure = data.main.pressure; // Extraction de la pression
      const humidity = data.main.humidity; // Extraction de l'humidité 

      weatherElement.innerHTML = `
        <h2>Météo à ${city}, ${country}</h2>
        <p>Température : ${temperature}°C</p>
        <p>Conditions : ${description}</p>
        <p>Pression : ${pressure} hPa</p>
        <p>Humidité : ${humidity}%</p>
      `;
    } else {
      weatherElement.innerHTML = '<p>Impossible de récupérer les données météo.</p>';
    }
  } catch (error) {
    weatherElement.innerHTML = '<p>Une erreur s\'est produite lors de la récupération des données météo.</p>';
    console.error('Error fetching weather data:', error);
  }
};

displayWeather();
