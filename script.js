// Hamburger menu toggle functionality
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

// Toggle the menu open/close
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// Close the menu when a navigation link is clicked
navLinks.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        navLinks.classList.remove('open');
    }
});

// Show the cookie consent banner if the user hasn't accepted cookies yet
window.onload = function() {
    const cookieBanner = document.getElementById("cookie");
    const acceptButton = document.getElementById("accept-cookies");
    const declineButton = document.getElementById("decline-cookies");

    // Forces the banner to always show
    cookieBanner.style.display = "flex";

    // Accept Cookies button functionality
    acceptButton.onclick = function() {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieBanner.style.display = "none";
    };

    // Decline Cookies button functionality
    declineButton.onclick = function() {
        localStorage.setItem('cookiesAccepted', 'false');
        cookieBanner.style.display = "none";
    };
};