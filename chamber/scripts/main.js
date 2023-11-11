{/* <div id="divBanner">
    <p>Do you like to join us in our meet and greet on Wednesday at 7:00 p.m?</p>
    <button id="bannerToggle">X</button>
</div> */}

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

bannerButton.addEventListener('click', () => {
    banner.classList.toggle('hide');
})

let oLastModif = new Date(document.lastModified);
document.querySelector("#lastMod").innerHTML = oLastModif;

document.querySelector("#toggleDarkMode").addEventListener("click", () => {
    toggleDarkMode()
})

function toggleDarkMode() {
    var element = document.body;
    var footer = document.querySelector("footer")
    var h2 = document.querySelector(".h2")
    element.classList.toggle("dark-mode");
    footer.classList.toggle("dark-mode-footer");
    h2.classList.toggle("dark-mode-h2")
}

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;



if (numVisits !== 0) {
    let datePlusDay = Number(localStorage.getItem("date")) + 86400000
    if (Date.now() < datePlusDay) {
        document.querySelector("#alert").textContent = "Back so soon! Awesome!"
    } else {
        let days = Math.floor((Date.now() - Number(localStorage.getItem("date"))) / 86400000)
        if (days !== 1) {
            document.querySelector("#alert").textContent = "You last visited" + days + "days ago."
        } else {}
        document.querySelector("#alert").textContent = "You last visited" + days + "day ago."
    }
} else {
	alert("Welcome! Let us know if you have any questions.");
}

// 4️⃣ increment the number of visits by one.
numVisits++;

// 5️⃣ store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("numVisits-ls", numVisits);

localStorage.setItem("date", Date.now())
