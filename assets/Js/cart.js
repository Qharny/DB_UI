const cartUrl = 'http://localhost:3001/api/carts';

// Function to fetch cart items
const fetchCartItems = async () => {
    try {
        const response = await fetch(cartUrl);
        const data = await response.json();
        return data.items;
    } catch (error) {
        console.error('Error fetching cart items:', error);
        return [];
    }
};

// Function to delete item from cart
const deleteFromCart = async (index) => {
    try {
        const response = await fetch(`${cartUrl}/items/${index}`, {
            method: 'DELETE'
        });
        if (response.ok) {
            updateCartUI();
        } else {
            console.error('Failed to delete item from cart:', response.statusText);
        }
    } catch (error) {
        console.error('Error deleting item from cart:', error);
    }
};

// Function to calculate total price
const calculateTotal = (items) => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
};

// Function to update cart UI
const updateCartUI = async () => {
    try {
        const cartCount = document.getElementById('cart-count');
        const cartItems = document.getElementById('cart-items');
        const totalElement = document.getElementById('cart-total');

        const items = await fetchCartItems();
        const total = calculateTotal(items);

        cartCount.textContent = items.length;

        if (items.length === 0) {
            cartItems.textContent = 'Your cart is empty';
        } else {
            cartItems.innerHTML = '';
            items.forEach((item, index) => {
                cartItems.innerHTML += `
                    <div>${item.title} - ¢${item.price}.00
                        <button onclick="deleteFromCart(${index})">Remove</button>
                    </div>`;
            });
        }

        totalElement.textContent = `¢ ${total}.00`;
    } catch (error) {
        console.error('Error updating cart UI:', error);
    }
};

// Call updateCartUI function initially to populate cart data
updateCartUI();
