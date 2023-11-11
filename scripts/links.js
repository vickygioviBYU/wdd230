const baseURL = "https://vickygiovibyu.github.io/wdd230/"

const linksURL = "https://vickygiovibyu.github.io/wdd230/data/links.json"

// const linksURL = "./data/links.json"

async function getLinks() {
    const results = await fetch(linksURL)
    const data = await results.json()
    displayLinks(data)
}

function displayLinks(weeks) {
    const ul = document.createElement("ul")
    
    weeks.lessons.forEach(week => {
        const li = document.createElement("li")
        const textNode = document.createTextNode(week.lesson + ": ")
        li.appendChild(textNode)
        week.links.forEach((link) => {
            const a = document.createElement("a")
            a.setAttribute("href", link.url)
            a.innerHTML = link.title
            li.appendChild(a)
            const character = document.createTextNode(" | ")
            li.appendChild(character)
        })
        
        ul.appendChild(li)
    });

    document.querySelector(".learning-activities").appendChild(ul)
}

getLinks()