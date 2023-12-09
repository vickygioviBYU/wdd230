const pricing = document.querySelector("#pricing")
const pricingTable = document.querySelector("#pricingTable")
const rental1 = document.querySelector("#rental1")
const rental2 = document.querySelector("#rental2")
const rental3 = document.querySelector("#rental3")
const rental4 = document.querySelector("#rental4")
const rental5 = document.querySelector("#rental5")
const rental6 = document.querySelector("#rental6")
const max1 = document.querySelector("#max1")
const max2 = document.querySelector("#max2")
const max3 = document.querySelector("#max3")
const max4 = document.querySelector("#max4")
const max5 = document.querySelector("#max5")
const max6 = document.querySelector("#max6")
const res1 = document.querySelector("#res1")
const res2 = document.querySelector("#res2")
const res3 = document.querySelector("#res3")
const res4 = document.querySelector("#res4")
const res5 = document.querySelector("#res5")
const res6 = document.querySelector("#res6")
const walk1 = document.querySelector("#walk1")
const walk2 = document.querySelector("#walk2")
const walk3 = document.querySelector("#walk3")
const walk4 = document.querySelector("#walk4")
const walk5 = document.querySelector("#walk5")
const walk6 = document.querySelector("#walk6")

async function getRentals() {
    const response = await fetch("https://vickygiovibyu.github.io/wdd230/finalproject/data/data.json")
    // const response = await fetch("./data/data.json")
    const data = await response.json();
    displayRentals(data)
}

function displayRentals(data) {
    data.forEach(elem => {
        const rentaltype = document.createElement("h3")
        const maxpersons = document.createElement("p")
        const reservation = document.createElement("p")
        const walking = document.createElement("p")
        const div = document.createElement("div")
       
        const image = document.createElement("img")
        image.setAttribute("alt", "Vehicle")
        image.setAttribute("src", elem.image)
        // image.setAttribute("height", "400")

        rentaltype.textContent = elem.rentaltype

        maxpersons.textContent = "Max Persons: " + elem.maxpersons
        reservation.textContent = "Reservation: $" + elem.reservation
        walking.textContent = "Walk-In: $" + elem.walkin

        div.appendChild(rentaltype)
        div.appendChild(image)
        div.appendChild(maxpersons)
        div.appendChild(reservation)
        div.appendChild(walking)

        pricing.appendChild(div)
    });

    // data.forEach(elem => {
    //     const table = document.createElement("table")

    // });

    rental1.textContent = data[0].rentaltype
    rental2.textContent = data[1].rentaltype
    rental3.textContent = data[2].rentaltype
    rental4.textContent = data[3].rentaltype
    rental5.textContent = data[4].rentaltype
    rental6.textContent = data[5].rentaltype

    max1.textContent = data[0].maxpersons
    max2.textContent = data[1].maxpersons
    max3.textContent = data[2].maxpersons
    max4.textContent = data[3].maxpersons
    max5.textContent = data[4].maxpersons
    max6.textContent = data[5].maxpersons

    res1.textContent = "$" + data[0].reservation
    res2.textContent = "$" + data[1].reservation
    res3.textContent = "$" + data[2].reservation
    res4.textContent = "$" + data[3].reservation
    res5.textContent = "$" + data[4].reservation
    res6.textContent = "$" + data[5].reservation

    walk1.textContent = "$" + data[0].walkin
    walk2.textContent = "$" + data[1].walkin
    walk3.textContent = "$" + data[2].walkin
    walk4.textContent = "$" + data[3].walkin
    walk5.textContent = "$" + data[4].walkin
    walk6.textContent = "$" + data[5].walkin
    
}

getRentals()