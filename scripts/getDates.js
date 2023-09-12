const copyrightYear = new Date().getFullYear();

let oLastModif = new Date(document.lastModified);

document.querySelector("#copyright").innerHTML = `©${copyrightYear}, Giovanni Canavesi, Uruguay`;
document.querySelector("#lastModified").innerHTML = oLastModif;