document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector('.navbar-frame');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('navbar-frame--scrolled');
        } else {
            navbar.classList.remove('navbar-frame--scrolled');
        }
    });
});


// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu-wrapper');

  // Ensure both components exist on the page to prevent errors
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      // Toggles the "X" animation on the hamburger button
      hamburger.classList.toggle('active');
      // Toggles the slide-down/slide-in visibility of the menu
      navMenu.classList.toggle('active');
    });

    // Optional safety feature: Closes the menu automatically if a user clicks a nav link
    const navLinks = document.querySelectorAll('.nav-container__link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }
});