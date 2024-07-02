/* EXAMPLE OF AN API REQUEST */

/*
let longitude = 44.83; // Bordeaux longitude
let latitude = -0.57; // Bordeaux latitude
let api_key = '891fcaaa0f613df11046ed15bd1a4607'; // Teacher's API Key
let api_url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api_key}`; // API URL

const getWeather = () => {
  axios.get(api_url)
  .then((response)=>console.log(response.data.main.temp - 273.15))
  .catch((err)=> console.log(err))
}
getWeather();
*/




export const fetchData = async () => {
    // Your code here: Implement an API request (e.g., fetch data from a fictional API).
  };
  
  // script.js
  import { fetchData } from './ex4';
  
  function displayData() {
    // Your code here: Fetch and display data from the API using fetchData.
  }
  
  document.addEventListener('DOMContentLoaded', displayData);