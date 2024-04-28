const cartUrl = 'http://localhost:3001/api/carts';

//  'http://localhost:3001/api/carts/{cartId}/items';

// get item from cart
const fetchCart = async () => {
    try {
        const cartId = localStorage.getItem('cartId');
        const response = await fetch(`${cartUrl}/${cartId}/items`);
        const data = await response.json();
        console.log('cart data:', data.length);

        // Display the items in a table

        if (data.length === 0) {
            const cartContainer = document.getElementById('cart-items');
            cartContainer.innerHTML = 'Your cart is empty';
        } else {
            const cartTable = document.createElement('table');
            cartTable.innerHTML = `
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
            `;
    
            let totalItems = 0;
            let totalPrice = 0;
    
            data.forEach(item => {
                const row = document.createElement('tr');
    
                const nameCell = document.createElement('td');
                nameCell.textContent = item.book.title;
                row.appendChild(nameCell);
    
                const quantityCell = document.createElement('td');
                quantityCell.textContent = item.quantity;
                row.appendChild(quantityCell);
    
                const priceCell = document.createElement('td');
                priceCell.textContent = `¢${item.totalPrice.toFixed(2)}`;
                row.appendChild(priceCell);
    
                cartTable.appendChild(row);
    
                totalItems += item.quantity;
                totalPrice += item.totalPrice;
            });
    
            // Append the table to the container
            const cartContainer = document.getElementById('cart-items');
            cartContainer.innerHTML = ''; // Clear previous content
            cartContainer.appendChild(cartTable);
    
            // Update total items and total price
            const itemCount = document.getElementById('cart-count');
            itemCount.textContent = totalItems;
    
            const totalItem = document.getElementById('cart-total');
            totalItem.textContent = `¢${totalPrice.toFixed(2)}`;
        }

    } catch (error) {
        console.error('Error fetching cart:', error);
    }
};

fetchCart();
