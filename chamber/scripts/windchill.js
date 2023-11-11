let temperature = document.querySelector('#temperature')
let description = document.querySelector('#description')
let windspeed = document.querySelector('#windspeed').textContent
let windchill = document.querySelector('#windchill')
let forecast = document.querySelector('#forecast')

if (temperature <= 50 && windspeed > 3) {
    windchill_calc = 35.74 + 0.6215 * temperature - 35.75 * windspeed ** 0.16 + 0.4275 * temperature * windspeed ** 0.16
    windchill.textContent = Math.round(windchill_calc)
} else {
    windchill.textContent = "N/A"
}

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${-34.90}&lon=${-56.20}&appid=${'c268926197781bc8f8765202c6d3ae95'}&units=imperial`

async function apiFetch() {
    try {
        let response = await fetch(url)
        if (response.ok) {
            let data = await response.json()
            
            displayResults(data)
        } else {
            throw Error(await response.text())
        }
    } catch (ex) {
        console.error(ex)
    }
}

apiFetch()

const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=-34.90&lon=-56.20&appid=c268926197781bc8f8765202c6d3ae95`

async function apiFetchForecast() {
    try {
        let response = await fetch(urlForecast)
        if (response.ok) {
            let data = await response.json()
            
            displayResultsForecast(data)
        } else {
            throw Error(await response.text())
        }
    } catch (ex) {
        console.error(ex)
    }
}

apiFetchForecast()

function displayResults(data) {
    temperature.textContent = Math.round(data.main.temp)
    description.textContent = data.weather[0].description
}

function displayResultsForecast(data) {
    let count = 0
    data.list.forEach(elem => {
        count++
        if (count < 25) {
            let day = elem.dt_txt
            let max = elem.main.temp_max
            let min = elem.main.temp_min
            const element = document.createElement("p")
            element.textContent = day + ": " + " MAX: " + max + " MIN: " + min
            forecast.appendChild(element)

        }
    });
}