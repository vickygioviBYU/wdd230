const main = document.querySelector(".members")

async function getMembers() {
    // const response = await fetch("https://vickygiovibyu.github.io/wdd230/chamber/data/members.json")
    const response = await fetch("./data/members.json")
    const data = await response.json();
    displayMembers(data)
}

getMembers()

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let website = document.createElement("p");
        let image = document.createElement("img");
        let membership = document.createElement("p");
        let ranking = document.createElement("p");
        name.textContent = member.Name;
        address.textContent = member.Address;
        phone.textContent = member.Phone;
        website.textContent = member.Website;
        image.setAttribute("src", member.Image);
        image.setAttribute("width", "280")
        image.setAttribute("height", "auto")
        membership.textContent = member.Membership + " Membership";
        ranking.textContent = "Ranking: " + member.Ranking;
        card.appendChild(name)
        card.appendChild(address)
        card.appendChild(phone)
        card.appendChild(website)
        card.appendChild(image)
        card.appendChild(membership)
        card.appendChild(ranking)

        main.appendChild(card)
    })
}

const toggleGrid = document.querySelector("#grid");

const display = document.querySelector(".members");

toggleGrid.addEventListener("click", () => {
	// example using arrow function
	display.classList.toggle("toggleGrid");
});