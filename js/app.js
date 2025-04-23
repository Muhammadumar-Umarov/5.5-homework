const formControl = document.querySelector(".form-control")
const messageInput = document.querySelector(".message")
const wrapper = document.querySelector(".wrapper")

const DATA = [
    "salom",
    "yaxshi",
    "ha",
    "yo'q",
    "rahmat",
    "hayr",
    "😂😂",
]

function anotherMessage() {
    const box = document.createElement("div")
    box.className = "box"
    let date = new Date()
    let randomIndex = Math.floor(Math.random() * DATA.length)
    let randomMsg = DATA[randomIndex]

    box.innerHTML = `
        <p>${randomMsg}</p>
        <span>${date.getHours()}:${date.getMinutes()}</span>
    `
    wrapper.appendChild(box)
}

formControl.addEventListener("submit", (event) => {
    event.preventDefault()
    if (!messageInput.value.trim()) {
        return null
    }
    const box = document.createElement("div")
    box.className = "box another"
    let date = new Date()

    box.innerHTML = `
    <p>${messageInput.value}</p>
    <span>${date.getHours()}:${date.getMinutes()}</span>
`

    wrapper.appendChild(box)
    messageInput.value = ""
    setTimeout(() => {
        anotherMessage()
    }, 2500)

})















// TASK 2

const form = document.querySelector(".creating__wrapper")
const firstName = document.querySelector(".first__name")
const email = document.querySelector(".email")
const job = document.querySelector(".job")
const cardsWrapper = document.querySelector(".cards__wrapper")



form.addEventListener("submit", (event) => {
    event.preventDefault()

    if (firstName.value.trim() == "" || email.value.trim() == "" || job.value.trim() == "") {
        return null
    }

    createNewCard(firstName.value, email.value, job.value)
    firstName.value = ""
    email.value = ""
    job.value = ""

})

function createNewCard(firstName, email, job) {
    const card = document.createElement("div")
    card.className = "card"
    card.innerHTML = `
        <div class="avatar">${firstName[0].toUpperCase()}</div>
        <h1>${firstName}</h1>
        <p>${email}</p>
        <p class="title">${job}</p>
        <div class="footer">Delete</div>
    `
    cardsWrapper.appendChild(card)

    const footer = card.querySelector(".footer");
    footer.addEventListener("click", () => {
      card.remove();
    });

} 