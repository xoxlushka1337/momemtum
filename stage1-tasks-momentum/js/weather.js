const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const input = document.querySelector('.city');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const error = document.querySelector('.weather-error');
let city = '';
let defualtCity = 'Минск';
document.addEventListener('DOMContentLoaded', function () {
  if (input) {
    city = localStorage.getItem('city') || defualtCity;
    input.value = city;
    input.addEventListener('input', function () {
      localStorage.setItem('city', this.value);
    });
  }
});

async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&appid=08f2a575dda978b9c539199e54df03b0&units=metric`;
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
  wind.textContent = `Wind speed: ${data.wind.speed.toFixed(0)} m/s`;
  humidity.textContent = `Humidity: ${data.main.humidity} %`;
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
// save local Storage