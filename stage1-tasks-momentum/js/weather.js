const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const input = document.querySelector('.city');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const error = document.querySelector('.weather-error');
let city = '';
let defualtCity = langArr['defualtCity'][currentLanguage];

input.addEventListener('input', function () {
  city = this.value;
  localStorage.setItem('city', this.value);
});

async function getWeather() {
  city = localStorage.getItem('city') || defualtCity;
  input.value = city;
  localStorage.setItem('city', input.value);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${currentLanguage}&appid=08f2a575dda978b9c539199e54df03b0&units=metric`;
  const res = await fetch(url).then((resp) => {
    if (!resp.ok) {
      error.textContent = 'Error! This city does not exist.';
      temperature.textContent = '';
      weatherDescription.textContent = '';
      wind.textContent = '';
      humidity.textContent = '';
    }
    return resp;
  });

  const data = await res.json();

  weatherIcon.className = 'weather-icon owf';
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
  weatherDescription.textContent = data.weather[0].description;
  wind.textContent = `${langArr['windSpeed'][currentLanguage]}: ${data.wind.speed.toFixed(0)} ${
    langArr['ms'][currentLanguage]
  }`;
  humidity.textContent = `${langArr['humidity'][currentLanguage]}: ${data.main.humidity} %`;

  error.textContent = '';
}

function setCity(event) {
  if (event.code === 'Enter') {
    let value = input.value;
    if (!value) return false;
    city = value;
    getWeather();
    input.blur();
  }
}

input.addEventListener('keypress', setCity);
document.addEventListener('DOMContentLoaded', getWeather);
