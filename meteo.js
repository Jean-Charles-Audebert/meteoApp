const credentialsUrl = 'credentials.json'; // where apiKey is stored
const weatherContainer = document.getElementById('weather-container');
const cityNameElement = document.getElementById('city-name');
const weatherDescriptionElement = document.getElementById('weather-description');
const weatherIconElement = document.getElementById('weather-icon');
const temperatureElement = document.getElementById('temperature');
const feelsLikeElement = document.getElementById('feels-like');
const humidityElement = document.getElementById('humidity');
const windSpeedElement = document.getElementById('wind-speed');
const configUrl = 'config.json';

async function fetchData() {
    try {
        const credentialsResponse = await fetch(credentialsUrl);
        const credentials = await credentialsResponse.json();
        //console.log('Réponse des credentials :', credentials);

        const { latitude, longitude } = await fetch(configUrl).then(response => response.json());
        //console.log("latitude et longitude : " + latitude + "   " + longitude);
        const apiKey = credentials.apiKey;
        //console.log(apiKey);
        const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&lang=fr&units=metric`;

        const weatherResponse = await fetch(weatherApiUrl);
        const weatherData = await weatherResponse.json();
        console.log("weatherResponse : ", weatherResponse);
        console.log("Réponse de l'API :", weatherData);

        updateWeatherUI(weatherData);

       /*  setInterval(async () => {
            const weatherResponse = await fetch(weatherApiUrl);
            const weatherData = await weatherResponse.json();

            console.log("Réponse de l'API :", weatherData);
            // Traitement des données météo ici
            
            // Mise à jour de l'interface
            updateWeatherUI(weatherData);
        }, 3600000); // Rafraîchissement toutes les heures */
    } catch (error) {
        console.error('Erreur de récupération des données:', error);
    }
}

function updateWeatherUI(data) {
    cityNameElement.textContent = `Météo à Niort`;
    weatherDescriptionElement.textContent = `Maintenant : ${data.weather[0].description}`;
    //weatherIconElement.innerHTML = `<img src="icon.png" alt="Weather Icon">`;
    temperatureElement.textContent = `Température: ${data.main.temp} °C`;
    feelsLikeElement.textContent = `Température ressentie: ${data.main.feels_like} °C`;
    humidityElement.textContent = `Humidité: ${data.main.humidity}%`;
    windSpeedElement.textContent = `Vitesse du vent: ${data.wind.speed} m/s`;
}

fetchData();