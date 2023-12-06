const credentialsUrl = 'credentials.json'; // where apiKey is stored
const weatherContainer = document.getElementById('weather-container');
const cityNameElement = document.getElementById('city-name');
const weatherDescriptionElement = document.getElementById('weather-description');
const weatherIconElement = document.getElementById('weather-icon');
const temperatureElement = document.getElementById('temperature');
const feelsLikeElement = document.getElementById('feels-like');
const humidityElement = document.getElementById('humidity');
const windSpeedElement = document.getElementById('wind-speed');
const configUrl = 'config.json'; // where latitude and longitude are stored
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

async function fetchData() {
    try {
        const credentialsResponse = await fetch(credentialsUrl);
        const credentials = await credentialsResponse.json();
        //console.log('Réponse des credentials :', credentials);

        const { latitude, longitude } = await fetch(configUrl).then(response => response.json());
        //console.log("latitude et longitude : " + latitude + "   " + longitude);
        const apiKey = credentials.apiKey;
        //console.log(apiKey);
        const weatherApiUrl = `${apiUrl}?lat=${latitude}&lon=${longitude}&appid=${apiKey}&lang=fr&units=metric`;

        const updateWeather = async () => {
            const weatherResponse = await fetch(weatherApiUrl);
            const weatherData = await weatherResponse.json();
            console.log("Réponse de l'API :", weatherData);
            updateWeatherUI(weatherData);
        };

        // Init interface
        await updateWeather();

        // 1 hour updating
        setInterval(updateWeather, 3600000);

    } catch (error) {
        console.error('Erreur de récupération des données:', error);
    }
}

function updateWeatherUI(data) {
    cityNameElement.textContent = `Météo à ${data.name}`;
    weatherDescriptionElement.textContent = `${data.weather[0].description}`;
    temperatureElement.textContent = `${data.main.temp} °C`;
    //feelsLikeElement.textContent = `Température ressentie: ${data.main.feels_like} °C`;
    humidityElement.textContent = `Humidité: ${data.main.humidity}%`;
    windSpeedElement.textContent = `Vent: ${data.wind.speed} m/s`;

     // using abdellatif laghjaj weather icons according to the id
     const weatherIconId = data.weather[0].id;
     const wIcon = document.getElementById('weather-icon');

     const weatherIcons = {
        200: "storm.svg",
        500: "rain.svg",
        600: "snow.svg",
        701: "haze.svg",
        800: "clear.svg",
        801: "cloud.svg",
    };
    wIcon.src = `img/${weatherIcons[weatherIconId]}`;
}

fetchData();