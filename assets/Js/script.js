// the navbar scrolling effect.
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
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
