document.addEventListener('DOMContentLoaded', function () {
    const cartItemsContainer = document.getElementById('cartItems');

    // Retrieve cart ID from localStorage
    const cartId = localStorage.getItem('cartId');

    if (cartId) {
        // Fetch cart items from the server
        fetch(`http://localhost:3000/api/carts/${cartId}/items`)
            .then(response => response.json())
            .then(data => {
                // Display cart items
                displayCartItems(data);
            })
            .catch(error => console.error('Error fetching cart items:', error));
    } else {
        // If cart ID doesn't exist, display a message indicating an empty cart
        cartItemsContainer.textContent = "Your cart is empty.";
    }

    function displayCartItems(items) {
        if (items.length === 0) {
            cartItemsContainer.textContent = "Your cart is empty.";
        } else {
            // Clear previous cart items
            cartItemsContainer.innerHTML = '';

            // Loop through cart items and display them
            items.forEach(item => {
                const cartItem = document.createElement('div');
                cartItem.classList.add('cart-item');

                const titleElement = document.createElement('h3');
                titleElement.textContent = item.book.title;

                const authorElement = document.createElement('h4');
                authorElement.textContent = item.book.author;

                const quantityElement = document.createElement('span');
                quantityElement.textContent = `Quantity: ${item.quantity}`;

                cartItem.appendChild(titleElement);
                cartItem.appendChild(authorElement);
                cartItem.appendChild(quantityElement);

                cartItemsContainer.appendChild(cartItem);
            });
        }
    }
});
