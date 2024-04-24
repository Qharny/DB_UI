function addToCart(cartId, book) {
    console.log(cartId)
    console.log(book)
    // Fetch to add the item to the cart
    fetch(`http://localhost:3000/api/carts/${cartId}/items`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: [{ bookId: book.id, quantity: 1 }] })
    })
    .then(response => response.json())
    .then(data => {
        // Handle response if needed
        console.log('Item added to cart:', data);
    })
    .catch(error => console.error('Error adding item to cart:', error));
}

fetch('http://localhost:3000/api/books') // Assuming this endpoint returns JSON data with book information
    .then(response => response.json())
    .then(data => {
        // Assuming data is an array of book objects
        const cardContainer = document.getElementById('cardContainer');

        // Loop through each book in the data array
        data.forEach(book => {
            // Create a new card div
            const card = document.createElement('div');
            card.classList.add('card');

            // Create elements for book details
            const image = document.createElement('img');
            image.src = book.imageUrl; // Assuming there's an 'imageUrl' property in the book object
            image.alt = book.title;

            const about = document.createElement('div');
            about.classList.add('about');

            const titleElement = document.createElement('h3');
            titleElement.textContent = book.title;

            const authorElement = document.createElement('h4');
            authorElement.textContent = book.author.name; // Assuming there's an 'author' object with a 'name' property

            const descriptionElement = document.createElement('p');
            descriptionElement.textContent = book.description;

            const addToCartButton = document.createElement('button');
            addToCartButton.textContent = 'Add to cart';
            addToCartButton.type = 'submit';

            addToCartButton.addEventListener('click', (event) => {
                const book = data.find(item => item.title === event.target.closest('.card').querySelector('h3').textContent);
                let cartId = localStorage.getItem('cartId');

                // Check if cartId exists in localStorage
                if (!cartId) {
                    // If cartId doesn't exist, create a new cart
                    fetch('http://localhost:3000/api/carts', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' }
                    })
                    .then(response => response.json())
                    .then(data => {
                        // Store the cartId in localStorage
                        localStorage.setItem('cartId', data.id);
                        // Once cart is created, add the item to the cart
                        addToCart(data.id, book);
                    })
                    .catch(error => console.error('Error creating cart:', error));
                } else {
                    // If cartId exists, directly add the item to the cart
                    addToCart(cartId, book);
                }
            });

            // Append elements to the about div
            about.appendChild(titleElement);
            about.appendChild(authorElement);
            about.appendChild(descriptionElement);
            about.appendChild(addToCartButton);

            // Append image and about div to the card div
            card.appendChild(image);
            card.appendChild(about);

            // Append the card to the card container
            cardContainer.appendChild(card);
        });
    })
    .catch(error => console.error('Error fetching book data:', error));
