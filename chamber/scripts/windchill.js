let temperature = document.querySelector('#temperature')
let description = document.querySelector('#description')

try {
    let windspeed = document.querySelector('#windspeed').textContent
} catch (Ex) {

}

try {
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
        description.textContent = data.weather[0].description.toUpperCase()
    }
    
    function displayResultsForecast(data) {
        let count = 0
        data.list.forEach(elem => {
            
            if (count == 8 || count == 16 || count == 24) {
                let day = elem.dt_txt
                let max = elem.main.temp_max - 273
                let min = elem.main.temp_min - 273
                const section = document.createElement("section")
                const element = document.createElement("p")
                const image = document.createElement("img")
                image.setAttribute("src", `https://openweathermap.org/img/w/${elem.weather[0].icon}.png`)
                image.setAttribute("alt", "weather icon")
                image.setAttribute("height", "200")
                image.setAttribute("width", "200")

                if (count == 8) {
                    element.textContent = "24 Hours: " + " MAX: " + Math.round(max) + " °C MIN: " + Math.round(min) + " °C"
                } else if (count == 16) {
                    element.textContent = "48 Hours: " + " MAX: " + Math.round(max) + " °C MIN: " + Math.round(min) + " °C"
                } else {
                    element.textContent = "72 Hours: " + " MAX: " + Math.round(max) + " °C MIN: " + Math.round(min) + " °C"
                }

                
                section.appendChild(element)
                section.appendChild(image)
                forecast.appendChild(section)
            }

            count++
        });
    }
} catch (Ex) {
    
}

