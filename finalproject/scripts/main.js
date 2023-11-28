let temp = document.querySelector("#temp")
let desc = document.querySelector("#desc")
let iconDescription = document.querySelector("#iconDescription")
let humidity = document.querySelector("#humidity")

let temp2 = document.querySelector("#tempForecast")
let desc2 = document.querySelector("#descForecast")
let iconDescription2 = document.querySelector("#iconDescriptionForecast")

async function GetWeather() {
    const result = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=-34.79&lon=-55.90&appid=c268926197781bc8f8765202c6d3ae95")
    const data = await result.json()
    Populate(data)
}

function Populate(data) {
    let weatherSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
    let tempCelsius = data.main.temp - 273.15
    temp.textContent = Math.round(tempCelsius) + " ºC"
    desc.textContent = data.weather[0].description
    let img = document.createElement("img")
    img.setAttribute("src", weatherSrc)
    img.setAttribute("alt", "Icon Description")
    iconDescription.appendChild(img)
    humidity.textContent = data.main.humidity + "%"
}

GetWeather()

async function GetForecast() {
    const result = await fetch("https://api.openweathermap.org/data/2.5/forecast?lat=-34.79&lon=-55.90&appid=c268926197781bc8f8765202c6d3ae95")
    const data = await result.json()
    PopulateForecast(data)
}

function PopulateForecast(data) {
    let weatherSrc = `https://openweathermap.org/img/w/${data.list[8].weather[0].icon}.png`
    let tempCelsius = data.list[8].main.temp - 273.15
    temp2.textContent = Math.round(tempCelsius) + " ºC"
    desc2.textContent = data.list[8].weather[0].description
    let img2 = document.createElement("img")
    img2.setAttribute("src", weatherSrc)
    img2.setAttribute("alt", "Icon Description")
    iconDescription2.appendChild(img2)
}
GetForecast()

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});