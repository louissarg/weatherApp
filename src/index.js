function refreshWeather(response) {
  let temperatureElement = response.data.temperature.current;
  temperature.innerHTML = Math.round(temperature);
}

function searchCity(city) {
  let apikey = "baef1db434f00t5c6510a0f45a35996o";
  let apiUrl =
    "https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}";
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#weather-app-city");
  cityElement.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
