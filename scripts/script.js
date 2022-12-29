const key = "b94b74effdba2f36dc816c7086aa0d8b";
let town = document.querySelector("#town");
let btn = document.querySelector("#searchBtn");
let content = document.querySelector(".content");

btn.addEventListener("click", getWeather);

async function getWeather() {
  if (town.value == "") {
    alert("Enter town!");
    return;
  } else {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${town.value}&appid=${key}&units=metric`
    );
    console.log(response);
    if (response.status !== 200) {
      content.innerHTML = `<h2>Town do not found!</h2>`;
    } else {
      const data = await response.json();
      content.style.padding = 20 + "px"
      console.log(data);
      content.innerHTML = `
        <h2>${data.name}</h2>
        <br/>
        <p>Feels like : ${data.main.temp}</p>
        <p>Temp: ${data.main.feels_like}</p>
        <img  src="https://api.openweathermap.org/img/w/${data.weather[0].icon}.png"/>
        <p> Pressure: ${data.main.pressure} hPa</p>
        <p> Humidity: ${data.main.humidity} %</p>
        <h3>${data.weather[0].main}</h3>
        <p>${data.weather[0].description}</p>
        <p>Clouds: ${data.clouds.all}%</p>
        <p>Wind: ${data.wind.speed} м/s </p>
        `;
    }
  }
}