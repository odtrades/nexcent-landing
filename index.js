document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.navbar__toggle');
    const navMenu = document.querySelector('.navbar__menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('is-active');
        });
    }
});