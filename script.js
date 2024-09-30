document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".nav-links");

    menuIcon.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    navLinks.querySelectorAll("li a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });
});

const marquess = document.querySelectorAll('.marquee');

marquess.forEach(marquee => {
    const duration = Math.random() * 5 + 5; // Random duration between 5s and 10s
    const randomYPosition = Math.random() * 50; // Random vertical position within the container height
    marquee.style.animationDuration = `${duration}s`;
    marquee.style.top = `${randomYPosition}px`; // Set vertical position
    marquee.style.animationName = 'bounce';
});




const menuIcon = document.getElementById('menu-icon');
const navbar = document.getElementById('navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

