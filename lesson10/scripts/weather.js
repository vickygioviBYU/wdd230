const currentTemp = document.querySelector('#current-temp')
const weatherIcon = document.querySelector('#weather-icon')
const captionDesc = document.querySelector('figcaption')

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${49.75}&lon=${6.64}&appid=${'c268926197781bc8f8765202c6d3ae95'}&units=imperial`

async function apiFetch() {
    try {
        let response = await fetch(url)
        if (response.ok) {
            let data = await response.json()
            console.log(data)
            displayResults(data)
        } else {
            throw Error(await response.text())
        }
    } catch (ex) {
        console.error(ex)
    }
}

apiFetch()

function displayResults(data) {
    currentTemp.textContent = Math.round(data.main.temp) + " °F"
    let weatherSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
    weatherIcon.setAttribute("src", weatherSrc)
    weatherIcon.setAttribute("alt", "Weather Icon")
    captionDesc.textContent = data.weather[0].description
}