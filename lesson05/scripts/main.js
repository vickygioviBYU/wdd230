const input = document.querySelector("#favchap")
const button = document.querySelector("button")
const list = document.querySelector("#list")

button.addEventListener('click', () => {
    if (input.value != "") {
        console.log(input.value)
        let arrayInput = input.value.split(' ')
        console.log(arrayInput)

        if (listBooks.includes(arrayInput[0])) {
            const li = document.createElement('li')

            const deleteButton = document.createElement('button')
    
            li.textContent = input.value
    
            deleteButton.textContent = "❌"
    
            li.append(deleteButton)
    
            list.append(li)
    
            deleteButton.addEventListener('click', () => {
                list.removeChild(li)
                input.focus()
            })
    
            input.value = ''
        } else {
            console.log("Book doesn't exist")
        }

        

    } else {
        console.log("input in blank")
    }
})

const listBooks = ["1 Nephi", "2 Nephi", "Jacob", "Enos", "Jarom", "Omni", "Words of Mormon", "Mosiah", "Alma", "Helaman", "3 Nephi", "4 Nephi", "Mormon", "Ether", "Moroni"]