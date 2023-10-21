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