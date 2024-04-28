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

    const checkoutButton = document.getElementById('checkout-button');
    checkoutButton.style.display = cart.length > 0 ? 'block' : 'none';
}
