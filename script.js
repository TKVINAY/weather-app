async function getWeather(){

let city = document.getElementById("city").value;

let apiKey = "ec8f49052ade60ea6fb56ae5594db436";

let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

let response = await fetch(url);

let data = await response.json();

document.getElementById("result").innerHTML =
`
Temperature: ${data.main.temp} °C <br>
Weather: ${data.weather[0].description}
`;

}