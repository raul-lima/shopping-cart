const openShopping = document.querySelector(".shopping");
const closeShopping = document.querySelector(".close-shopping");
const list = document.querySelector(".list");
const listCard = document.querySelector(".list-card")
const total = document.querySelector(".total")
const body = document.querySelector(".body")
const quantity = document.querySelector(".quantity")


openShopping.addEventListener("click", () => {
    body.classList.add("item")
})

closeShopping.addEventListener("click", () => {
    body.classList.remove("item")
})

let products = [
    {
        id: 1,
        name: "PRODUCT 1",
        image: "1.png",
        price: 2000
    },
    {
        id: 2,
        name: "PRODUCT 2",
        image: "2.png",
        price: 2000
    },
    {
        id: 3,
        name: "PRODUCT 3",
        image: "3.Png",
        price: 2000
    },
    {
        id: 4,
        name: "PRODUCT 4",
        image: "4.png",
        price: 2000
    },
    {
        id: 5,
        name: "PRODUCT 5",
        image: "5.png",
        price: 2000
    },
    {
        id: 6,
        name: "PRODUCT 6",
        image: "6.png",
        price: 2000
    }
]

let listCards = []

const initApp = () => {

    products.forEach((value, key) => {
        let newDiv = document.createElement("div")
        newDiv.classList.add("item")
        newDiv.innerHTML = `
        <img src="./img/${value.image}">
        <div class="title">${value.name}</div>
        <div class="price">${value.price.toLocaleString()}</div>
        <button onclick = "addToCart(${key})">Add to cart</button> `
        list.appendChild(newDiv)
    })


}

initApp()