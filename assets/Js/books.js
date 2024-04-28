const cartUrl = 'http://localhost:3001/api/carts';
const bookUrl = 'http://localhost:3001/api/books';

const addToCart = async (cartId, book) => {
    try {
        const response = await fetch(`${cartUrl}/${cartId}/items`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ bookId: book.id, quantity: 1 })
        });
        const data = await response.json();
        console.log('cart data:', data);
    } catch (error) {
        console.error('Error adding item to cart:', error);
    }
};

const fetchBooks = async () => {
    try {
        const response = await fetch(bookUrl);
        const data = await response.json();
        const cardContainer = document.getElementById('cardContainer');
        cardContainer.innerHTML = ''; // Clear existing content
        data.forEach(book => {
            const card = document.createElement('div');
            card.classList.add('card');
            const image = document.createElement('img');
            image.src = book.imageUrl;
            image.alt = book.title;
            const about = document.createElement('div');
            about.classList.add('about');
            const titleElement = document.createElement('h3');
            titleElement.textContent = book.title;
            const authorElement = document.createElement('h4');
            authorElement.textContent = book.author.name;
            const addToCartButton = document.createElement('button');
            addToCartButton.textContent = 'Add to cart';
            addToCartButton.type = 'submit';
            addToCartButton.addEventListener('click', async () => {
                const cartId = localStorage.getItem('cartId') || (await createCart());
                console.log(cartId);
                addToCart(cartId, book);
            });
            about.appendChild(titleElement);
            about.appendChild(authorElement);
            about.appendChild(addToCartButton);
            card.appendChild(image);
            card.appendChild(about);
            cardContainer.appendChild(card);
        });
    } catch (error) {
        console.error('Error fetching book data:', error);
    }
};

const createCart = async () => {
    try {
        const response = await fetch('http://localhost:3001/api/carts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        });
        const data = await response.json();
        localStorage.setItem('cartId', data.id);
        return data.id;
    } catch (error) {
        console.error('Error creating cart:', error);
        return null;
    }
};

const searchBooks = async () => {
    const searchTerm = document.getElementById('search').value.trim().toLowerCase();
    if (searchTerm === '') {
        fetchBooks(); // If search field is empty, fetch all books
        return;
    }
    try {
        const response = await fetch(`${bookUrl}?search=${searchTerm}`);
        const data = await response.json();
        const cardContainer = document.getElementById('cardContainer');
        cardContainer.innerHTML = ''; // Clear existing content
        data.forEach(book => {
            // Create card elements similar to fetchBooks function
        });
    } catch (error) {
        console.error('Error searching books:', error);
    }
};

document.getElementById('search').addEventListener('input', searchBooks);

fetchBooks();
