// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Select the loader container
    const loaderContainer = document.querySelector(".loader-container");
    const htmlBody = document.querySelector(".wrapper");

    // Show the loader when the DOM is fully loaded
    loaderContainer.style.display = "block";
    htmlBody.style.display = "none"

    // Hide the loader once the page has fully loaded
    window.addEventListener("load", function() {
        loaderContainer.style.display = "none";
        htmlBody.style.display = "block"
    });
});


// the navbar scrolling effect.
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.NavBar');
    const navbarHeight = navbar.getBoundingClientRect().height;
    const headerHeight = document.querySelector('header').getBoundingClientRect().height;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > headerHeight) {
        navbar.style.position = 'fixed';
        navbar.style.top = '0';
        navbar.style.width = '100%'
        document.body.style.paddingTop = navbarHeight + 'px'; // To prevent sudden jump in content
    } else {
        navbar.style.position = 'static';
        document.body.style.paddingTop = '0';
    }
});

// the sliding effect in the catalogue section.
document.addEventListener('DOMContentLoaded', function() {
    new Swiper('.catalogue-slider', {
        speed: 600,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        slidesPerView: 'auto',
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 20
            }
        }
    });
});
