const openShopping = document.querySelector(".shopping");
const closeShopping = document.querySelector(".close-shopping");
const list = document.querySelector(".list");
const cartList = document.querySelector(".cart-list");
const total = document.querySelector(".total");
const body = document.querySelector("body");
const quantity = document.querySelector(".quantity");

openShopping.addEventListener("click", () => {
    body.classList.add("active");
});

closeShopping.addEventListener("click", () => {
    body.classList.remove("active");
});

let products = [
    {
        id: 1,
        name: "PRODUCT 1",
        image: "1.png",
        price: 2000,
    },
    {
        id: 2,
        name: "PRODUCT 2",
        image: "2.png",
        price: 2000,
    },
    {
        id: 3,
        name: "PRODUCT 3",
        image: "3.png",
        price: 2000,
    },
    {
        id: 4,
        name: "PRODUCT 4",
        image: "4.png",
        price: 2000,
    },
    {
        id: 5,
        name: "PRODUCT 5",
        image: "5.png",
        price: 2000,
    },
    {
        id: 6,
        name: "PRODUCT 6",
        image: "6.png",
        price: 2000,
    },
];

let cart = [];

const initApp = () => {
    products.forEach((value, key) => {
        let newDiv = document.createElement("div");
        newDiv.classList.add("item");
        newDiv.innerHTML = `
        <img src="img/${value.image}">
        <div class="title">${value.name}</div>
        <div class="price">${value.price.toLocaleString()}</div>
        <button onclick = "addToCart(${key})">Add to cart</button> `;
        list.appendChild(newDiv);
    });
};

initApp();

const addToCart = (key) => {
    if (cart[key] == null) {
        cart[key] = JSON.parse(JSON.stringify(products[key]));
        cart[key].quantity = 1;
    }

    reloadCart();
};

const reloadCart = () => {
    cartList.innerHTML = "";
    let count = 0;
    let totalPrice = 0;

    cart.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;

        if (value != null) {
            let newDiv = document.createElement("li");
            newDiv.innerHTML = `
            <div><img src = "./img/${value.image}"></div>
            <div class = "cart-title">${value.name}</div>
            <div class = "cart-price">${value.price.toLocaleString()}</div>
            
            <div>
                <button style = "background-color: #008b8b;" class = "cart-button" onclick = "changeQuantity(${key}, ${value.quantity - 1
                }) ">-</button>
                <div class = "count">${value.quantity}</div>
                <button style = "background-color: #008b8b;" class = "cart-button" onclick = "changeQuantity(${key}, ${value.quantity + 1
                })">+</button>`;

            cartList.appendChild(newDiv);
        }

        total.innerText = totalPrice.toLocaleString();
        quantity.innerText = count;
    });
};

const changeQuantity = (key, quantity) => {
    if (quantity == 0) {
        delete cart[key]
    } else {
        cart[key].quantity = quantity;
        cart[key].price = quantity * products[key].price
    }
    reloadCart()
}