const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');
const OPENWEATHERMAP_API_KEY = '841616e1b228c00f7d60c85a1c9a9708';

container.classList.add('initial');
search.addEventListener('click', async () => {
  const APIKey = '841616e1b228c00f7d60c85a1c9a9708';
  const city = document.querySelector('.search-box input').value.trim().replace(/\s+/g, '+');

  if (!city) {
    return;
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric&lang=de`)
    .then(response => response.json())
    .then(json => {
      if (json.cod === '404' || !json.weather || json.weather.length === 0) {
        container.style.height = '400px';
        weatherBox.style.display = 'none';
        weatherDetails.style.display = 'none';
        error404.style.display = 'block';
        error404.classList.add('fadeIn');
        return;
      }

      error404.style.display = 'none';
      error404.classList.remove('fadeIn');

      const temperature = document.querySelector('.weather-box .temperature');
      const description = document.querySelector('.weather-box .description');
      const humidity = document.querySelector('.weather-details .humidity span');
      const wind = document.querySelector('.weather-details .wind span');
      const time = document.querySelector('.weather-details .time span');
      const sunrise = document.querySelector('.weather-details .sunrise span');
      const sunset = document.querySelector('.weather-details .sunset span');
      const precipitation = document.querySelector('.weather-details .precipitation span');
      const icon = document.querySelector('.weather-box .weather-icon');
      const lastUpdated = new Date(json.dt * 1000);
      const sunriseTime = new Date(json.sys.sunrise * 1000);
      const sunsetTime = new Date(json.sys.sunset * 1000);
      const precipChance = json.clouds.all;
      const weatherCondition = json.weather[0].main;

      setIcon(weatherCondition, icon);
      function setIcon(weatherCondition, icon) {
        switch (weatherCondition) {
          case 'Clear':
            icon.className = 'weather-icon wi wi-day-sunny';
            break;

          case 'Rain':
            icon.className = 'weather-icon wi wi-rain';
            break;

          case 'Snow':
            icon.className = 'weather-icon wi wi-snow';
            break;

          case 'Clouds':
            icon.className = 'weather-icon wi wi-cloudy';
            break;

          case 'Haze':
            icon.className = 'weather-icon wi wi-fog';
            break;

          default:
            icon.className = 'weather-icon';
        }
      }

      temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
      description.innerHTML = `${json.weather[0].description}`;
      humidity.innerHTML = `${json.main.humidity}%`;
      wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;
      time.innerHTML = `${lastUpdated.getHours()}:${lastUpdated.getMinutes().toString().padStart(2, '0')}`;
      sunrise.innerHTML = `${sunriseTime.getHours()}:${sunriseTime.getMinutes().toString().padStart(2, '0')}`;
      sunset.innerHTML = `${sunsetTime.getHours()}:${sunsetTime.getMinutes().toString().padStart(2, '0')}`;
      precipitation.innerHTML = `${precipChance}%`;

      container.style.height = 'auto';
      weatherBox.style.display = 'flex';
      weatherDetails.style.display = 'flex';
      weatherDetails.style.flexDirection = 'column';

      weatherBox.classList.add('fadeIn');
      weatherDetails.classList.add('fadeIn');
    })
    .catch(() => {
      container.style.height = 'auto';
      weatherBox.style.display = 'none';
      weatherDetails.style.display = 'none';
      error404.style.display = 'block';
      error404.classList.add('fadeIn');
    });

  // Hinzugefügter Code
  setTimeout(() => {
    container.style.height = 'auto';
    const containerHeight = container.offsetHeight;
    container.style.height = `${containerHeight}px`;
  }, 100);
});