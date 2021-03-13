// Scrolling
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('.about_area');

btnScrollTo.addEventListener('click', function(e) {
    section1.scrollIntoView({behavior: 'smooth'});
})