let time = document.getElementById("time");
let now = new Date();
let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
time.innerHTML = `${days[now.getDay()]} ${now.getHours()}:${now.getMinutes()}`;

function celsius(event) {
    event.preventDefault();
    let temperature = document.querySelector(".temperature");
    let change = `${Math.round(((66 - 32) * 5) / 9)}`;
    temperature.innerHTML = `${change}`;
}

let a = document.querySelector("#celsius");
a.addEventListener("click", celsius);

function fahrenheit(event) {
    event.preventDefault();
    let temperature = document.querySelector(".temperature");

    let change1 = `${Math.round((19 * 9) / 5 + 32)}`;
    temperature.innerHTML = `${change1}`;
}

let units = document.querySelector("#fahrenheit");
units.addEventListener("click", fahrenheit);

function updateCity(response) {
    let temperature = Math.round(response.data.main.temp);
    console.log(temperature);
    console.log(response);
    let city = response.data.name;
    let currentTemp = document.querySelector(".temperature");
    currentTemp.innerHTML = `${temperature}`;
    let currentCity = document.querySelector("h1");
    currentCity.innerHTML = `${city}`;
}

function searchCity(city) {
    let apiKey = "267c856400f4f5972b08b873cbe4b99e";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;

    axios.get(apiUrl).then(updateCity);
}
searchCity("Myanmar");

function result(event) {
    event.preventDefault();
    let input = document.querySelector("#search1");
    let h1 = document.querySelector("h1");
    h1.innerHTML = `${input.value}`;
    searchCity(input.value);
}

function currentPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiKey = "93ee5edf8b01fcf1ab855552cf673f5e";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(updateCity);
}

function showCurrentLoc(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(currentPosition);
}

let currentButton = document.querySelector("#buttonBtn1");
currentButton.addEventListener("click", showCurrentLoc);

let form = document.querySelector("form");
form.addEventListener("submit", result);