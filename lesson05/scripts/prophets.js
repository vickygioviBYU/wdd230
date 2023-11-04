const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch("https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json")
    const data = await response.json();
    // console.table(data);
    displayProphets(data.prophets)
}

getProphetData()

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let card = document.createElement("section");
        let fullName = document.createElement("h2");
        let portrait = document.createElement("img");
        let birth = document.createElement("p");
        let placeBirth = document.createElement("p");
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        birth.textContent = prophet.birthdate;
        placeBirth.textContent = prophet.birthplace;
        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", prophet.name);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "480");
        portrait.setAttribute("height", "595");
        card.appendChild(fullName)
        card.appendChild(birth)
        card.appendChild(placeBirth)
        card.appendChild(portrait)
        cards.appendChild(card)
    })
}