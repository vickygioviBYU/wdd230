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