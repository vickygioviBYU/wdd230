chaptersArray = getChapterList() || []

chaptersArray.forEach(chapter => {
    displayList(chapter)
});

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1)
    chaptersArray = chaptersArray.filter((item) => item !== chapter)
    setChapterList()
}

function setChapterList() {
    localStorage.setItem("chapters", JSON.stringify(chaptersArray))
}

function getChapterList() {
    return JSON.parse(localStorage.getItem("chapters"))
}

function displayList(item) {
    const li = document.createElement('li')

    const deleteButton = document.createElement('button')

    li.textContent = item

    deleteButton.textContent = "❌"

    li.append(deleteButton)

    list.append(li)

    deleteButton.addEventListener('click', () => {
        list.removeChild(li)
        deleteChapter(li.textContent)
        input.focus()
    })
}

const input = document.querySelector("#favchap")
const button = document.querySelector("button")
const list = document.querySelector("#list")

button.addEventListener('click', () => {
    if (input.value != "") {
        displayList(input.value)
        chaptersArray.push(input.value)
        setChapterList()
        input.value = ""
        input.focus()
    } else {
        
    }
})


const listBooks = ["1 Nephi", "2 Nephi", "Jacob", "Enos", "Jarom", "Omni", "Words of Mormon", "Mosiah", "Alma", "Helaman", "3 Nephi", "4 Nephi", "Mormon", "Ether", "Moroni"]