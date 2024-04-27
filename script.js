// Smooth Scrolling for Navigation Links
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = this.getAttribute('href');
    const targetElement = document.querySelector(target);

    const scrollTop = targetElement.offsetTop;

    window.scrollTo({
      top: scrollTop,
      behavior: "smooth"
    });
  });
});

// Typed Text Animation for Introduction
var typed = new Typed('.text', {
  strings: ["Web Developer", "Mechatronics Engineer"],
  typeSpeed: 50,
  backSpeed: 25,
  loop: true
});

// Accordion Functionality for Skills Section
const skillCards = document.querySelectorAll('#cards');

skillCards.forEach(card => {
  card.addEventListener('click', function() {
    this.classList.toggle('active');
  });
});

