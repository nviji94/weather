document.addEventListener('DOMContentLoaded', function () {
    const cityInput = document.getElementById('cityInput');
    const weatherInfo = document.getElementById('weatherInfo');

    function getWeather() {
        const cityName = cityInput.value.trim();
        if (cityName !== '') {
            const apiKey = 'YOUR_API_KEY'; // Replace with your API key
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    displayWeather(data);
                })
                .catch(error => {
                    console.error('Error fetching weather data:', error);
                    weatherInfo.innerHTML = '<p>Unable to fetch weather data. Please try again later.</p>';
                });
        } else {
            weatherInfo.innerHTML = '<p>Please enter a city name.</p>';
        }
    }

    function displayWeather(data) {
        const temperature = data.main.temp;
        const description = data.weather[0].description;

        const weatherHTML = `
            <p>Temperature: ${temperature}°C</p>
            <p>Description: ${description}</p>
        `;

        weatherInfo.innerHTML = weatherHTML;
    }
});
