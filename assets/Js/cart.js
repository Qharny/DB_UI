const products = [
    {
        id: 0,
        image: '/items/1.jpg',
        title: 'No.1',
        price: 150,
    },
    {
        id: 1,
        image: '/items/2.jpg',
        title: 'No.2',
        price: 10,
    },
    {
        id: 2,
        image: '/items/3.jpg',
        title: 'No.3',
        price: 100,
    },
    {
        id: 3,
        image: '/items/4.jpg',
        title: 'No.4',
        price: 250,
    }
];

let cart = [];

function addtocart(productId) {
    const productToAdd = products[productId];
    cart.push(productToAdd);
    updateCartUI();
}

function deleteFromCart(productId) {
    cart.splice(productId, 1);
    updateCartUI();
}

function calculateTotal() {
    let total = 0;
    cart.forEach((item) => {
        total += item.price;
    });
    return total;
}

function updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;

    const cartItems = document.getElementById('cart-items');
    if (cart.length === 0) {
        cartItems.textContent = 'Your cart is empty';
    } else {
        cartItems.innerHTML = '';
        cart.forEach((item, index) => {
            cartItems.innerHTML += `
                <div>${item.title} - ¢${item.price}.00
                    <button onclick="deleteFromCart(${index})">Remove</button>
                </div>`;
        });
    }

    const totalElement = document.getElementById('cart-total');
    const total = calculateTotal();
    totalElement.textContent = `¢ ${total}.00`;
}


document.getElementById('root').innerHTML = products.map((item, i) => {
    return `
        <div class="box">
            <div class="img-box">
                <img class="images" src="${item.image}" alt="${item.title}">
            </div>
            <div class="bottom">
                <p>${item.title}</p>
                <h2>¢ ${item.price}.00</h2>
                <button onclick="addtocart(${i})">Add to cart</button>
            </div>
        </div>
    `;
}).join('');