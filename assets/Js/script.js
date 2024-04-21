
// // Function to slide items horizontally
// function slideItems() {
//     // Get the container element
//     var container = document.querySelector('.cat-container');

//     // Get the width of a single card
//     var cardWidth = container.querySelector('.cat-card').offsetWidth;

//     // Calculate the total width of all cards
//     var totalWidth = container.querySelectorAll('.cat-card').length * cardWidth;

//     // Set the initial position
//     var position = 0;

//     // Set the interval for sliding (adjust the duration as needed)
//     var interval = setInterval(function () {
//         // Update the position
//         position -= 1;

//         // Check if we reached the end of the cards
//         if (position <= -totalWidth) {
//             position = 0;
//         }

//         // Apply the new position to the container
//         container.style.transform = 'translateX(' + position + 'px)';
//     }, 10); // Adjust the interval duration as needed
// }

// // Call the slideItems function when the page loads
// window.addEventListener('load', slideItems);


var slideIndex = 0;

function showSlide(index) {
    var slides = document.querySelectorAll('.cat-card');
    var totalSlides = slides.length;

    if (index >= totalSlides) { slideIndex = 0; }
    if (index < 0) { slideIndex = totalSlides - 1; }

    for (var i = 0; i < totalSlides; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex].style.display = 'block';
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

// Show the first slide initially
showSlide(slideIndex);

