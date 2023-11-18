{/* <div id="divBanner">
    <p>Do you like to join us in our meet and greet on Wednesday at 7:00 p.m?</p>
    <button id="bannerToggle">X</button>
</div> */}

const business1 = document.querySelector('#business1')
const business2 = document.querySelector('#business2')
const divInsideBanner = document.querySelector('#divInsideBanner')

const date = new Date()

if (date.getDay() == 1 | date.getDay() == 2 | date.getDay() == 3) {
    const div = document.createElement("div")
    const p = document.createElement("p")
    const button = document.createElement("button")
    div.setAttribute("id", "divBanner")
    button.setAttribute("id", "bannerToggle")
    p.textContent = "Do you like to join us in our meet and greet on Wednesday at 7:00 p.m?"
    button.textContent = "X"
    div.appendChild(p)
    div.appendChild(button)
    divInsideBanner.appendChild(div)
}

const banner = document.querySelector('#divBanner')
const bannerButton = document.querySelector('#bannerToggle')

try {
    bannerButton.addEventListener('click', () => {
        banner.classList.toggle('hide');
    })
} catch (Exception) {

}

let oLastModif = new Date(document.lastModified);
document.querySelector("#lastMod").innerHTML = oLastModif;

document.querySelector("#toggleDarkMode").addEventListener("click", () => {
    toggleDarkMode()
})

function toggleDarkMode() {
    var element = document.body;
    var footer = document.querySelector("footer")
    var community = document.querySelector("#community")
    var weather = document.querySelector("#weather")
    var spotlights = document.querySelector("#spotlights")
    var b1 = document.querySelector("#b1")
    var b2 = document.querySelector("#b2")
    var label = document.querySelector("label")
    element.classList.toggle("dark-mode");
    footer.classList.toggle("dark-mode-footer");
    community.classList.toggle("dark-mode-h2-community")
    weather.classList.toggle("dark-mode-h2-weather")
    spotlights.classList.toggle("dark-mode-h2")
    b1.classList.toggle("dark-mode-h2-b1")
    b2.classList.toggle("dark-mode-h2-b2")
    label.classList.toggle("dark-mode-label")
}

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

try {
    if (numVisits !== 0) {
        let datePlusDay = Number(localStorage.getItem("date")) + 86400000
        if (Date.now() < datePlusDay) {
            document.querySelector("#alert").textContent = "Back so soon! Awesome!"
        } else {
            let days = Math.floor((Date.now() - Number(localStorage.getItem("date"))) / 86400000)
            if (days !== 1) {
                document.querySelector("#alert").textContent = "You last visited " + days + " days ago."
            } else {}
            document.querySelector("#alert").textContent = "You last visited " + days + " day ago."
        }
    } else {
        alert("Welcome! Let us know if you have any questions.");
    }
} catch (ex) {

}

// 4️⃣ increment the number of visits by one.
numVisits++;

// 5️⃣ store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("numVisits-ls", numVisits);

localStorage.setItem("date", Date.now())

async function getMembers() {
    const response = await fetch("https://vickygiovibyu.github.io/wdd230/chamber/data/members.json")
    // const response = await fetch("./data/members.json")
    const data = await response.json();
    let membersTop = []
    data.forEach((member) => {
        if (member.Membership === "Silver" || member.Membership === "Gold") {
            membersTop.push(member)
        }
    })

    let random1 = Math.floor((Math.random() * membersTop.length) );
    let random2 = Math.floor((Math.random() * membersTop.length) );
    
    let card = document.createElement("section");
    let name = document.createElement("h2");
    name.setAttribute("id", "b1")
    let address = document.createElement("p");
    let phone = document.createElement("p");
    let website = document.createElement("p");
    let image = document.createElement("img");
    let membership = document.createElement("p");
    let ranking = document.createElement("p");
    name.textContent = membersTop[random1].Name;
    address.textContent = membersTop[random1].Address;
    phone.textContent = membersTop[random1].Phone;
    website.textContent = membersTop[random1].Website;
    image.setAttribute("src", membersTop[random1].Image);
    image.setAttribute("alt", name)
    image.setAttribute("width", "280")
    image.setAttribute("height", "auto")
    membership.textContent = membersTop[random1].Membership + " Membership";
    ranking.textContent = "Ranking: " + membersTop[random1].Ranking;
    card.appendChild(name)
    card.appendChild(address)
    card.appendChild(phone)
    card.appendChild(website)
    card.appendChild(image)
    card.appendChild(membership)
    card.appendChild(ranking)

    try {
        business1.appendChild(card)
    } catch (Ex) {

    }
    
    let card2 = document.createElement("section");
    let name2 = document.createElement("h2");
    name2.setAttribute("id", "b2")
    let address2 = document.createElement("p");
    let phone2 = document.createElement("p");
    let website2 = document.createElement("p");
    let image2 = document.createElement("img");
    let membership2 = document.createElement("p");
    let ranking2 = document.createElement("p");
    name2.textContent = membersTop[random2].Name;
    address2.textContent = membersTop[random2].Address;
    phone2.textContent = membersTop[random2].Phone;
    website2.textContent = membersTop[random2].Website;
    image2.setAttribute("src", membersTop[random2].Image);
    image2.setAttribute("alt", name2)
    image2.setAttribute("width", "280")
    image2.setAttribute("height", "auto")
    membership2.textContent = membersTop[random2].Membership + " Membership";
    ranking2.textContent = "Ranking: " + membersTop[random2].Ranking;
    card2.appendChild(name2)
    card2.appendChild(address2)
    card2.appendChild(phone2)
    card2.appendChild(website2)
    card2.appendChild(image2)
    card2.appendChild(membership2)
    card2.appendChild(ranking2)

    try {
        business2.appendChild(card2)
    } catch (Ex) {

    }
    

}

getMembers()