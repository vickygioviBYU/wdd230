async function fetchWeather() {
    const result = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=34&lon=56&appid=c268926197781bc8f8765202c6d3ae95");
    const data = await result.json();
    const temperature = data.main.temp - 273.15;
    const conditions = data.weather[0].description;
    const currentConditions = data.weather.main;
    const temp = document.querySelector("#temperature")
    temp.textContent = Math.round(temperature) + "º C"
    const cond = document.querySelector("#conditions")
    cond.textContent = conditions
    const img = document.querySelector("#image")
    if (conditions == "clear sky") {
        const image = document.createElement("img")
        image.setAttribute("src", "images/clear sky.png")
        img.appendChild(image)
    } else if (conditions == "few clouds") {
        const image = document.createElement("img")
        image.setAttribute("src", "images/few clouds.png")
        img.appendChild(image)
    } else if (conditions == "scattered clouds") {
        const image = document.createElement("img")
        image.setAttribute("src", "images/scattered cloud.png")
        img.appendChild(image)
    } else if (conditions == "broken clouds") {
        const image = document.createElement("img")
        image.setAttribute("src", "images/broken clouds.png")
        img.appendChild(image)
    } else if (conditions == "shower rain") {
        const image = document.createElement("img")
        image.setAttribute("src", "images/shower rain.png")
        img.appendChild(image)
    } else if (conditions == "rain") {
        const image = document.createElement("img")
        image.setAttribute("src", "images/rain.png")
        img.appendChild(image)
    } else if (conditions == "thunderstorm") {
        const image = document.createElement("img")
        image.setAttribute("src", "images/thunderstorm.png")
        img.appendChild(image)
    } else if (conditions == "snow") {
        const image = document.createElement("img")
        image.setAttribute("src", "images/snow.png")
        img.appendChild(image)
    } else if (conditions == "mist") {
        const image = document.createElement("img")
        image.setAttribute("src", "images/mist.png")
        img.appendChild(image)
    }
}

fetchWeather()