// Declaring the variables
let lon;
let lat;
let temperature = document.querySelector(".temp");
let condition = document.querySelector(".condition");
let windy = document.querySelector(".wind");
let loc = document.querySelector(".location");
let icon = document.querySelector(".icon");
const kelvin = 273;
let advice = document.getElementById('advice')


window.addEventListener("load", () => {
if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition((position) => {
	console.log(position);
	lon = position.coords.longitude;
	lat = position.coords.latitude;

	const api = "86fb277ccbb0ea478f6c1580ffd5d4da";

	const base =
`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&` +
`lon=${lon}&appid=6d055e39ee237af35ca066f35474e9df`;

	// Calling the API
	fetch(base)
		.then((response) => {
		return response.json();
		})
		.then((data) => {
		console.log(data);
    let currentWeather = Math.floor(data.main.temp - kelvin);
    let currentWind = Math.floor(data.wind.speed); 
		temperature.textContent = Math.floor(currentWeather * 9/5 +32) + "°F";
		condition.textContent = data.weather[0].description;
    windy.textContent = currentWind + " mph";
		loc.textContent = data.name + ", " + data.sys.country;
    if (currentWeather > 23 && currentWind > 15)
    {advice.textContent = "☠️ You should not run. You'll die. ☠️"}
    else if (currentWeather > 23 || currentWind > 12)
    {advice.textContent = "Running will be hard but you'll make it. 😅"}
    else {advice.textContent= "It's great conditions for running! 🥳"}
console.log(currentWeather)
console.log(currentWind)
		});
	});
}
});

