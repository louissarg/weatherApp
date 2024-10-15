function searchCity(city) {
  let apiKey = "baef1db434f00t5c6510a0f45a35996o";
  let apiUrl =
    "https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}";
  console.log(apiUrl);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.Value;
  searchCity(searchInput.value);
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
