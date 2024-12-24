'use strict';

// Toggle class active 
const navbarNav = document.querySelector('.navbar-nav');
const hamburgerMenu = document.querySelector('#hamburger-menu');

if (hamburgerMenu && navbarNav) {
    // Ketika hamburger menu di klik
    hamburgerMenu.addEventListener('click', () => {
        navbarNav.classList.toggle('active');
    });

    // Klik diluar sidebar untuk menghilangkan nav
    document.addEventListener('click', (e) => {
        if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
            navbarNav.classList.remove('active');
        }
    });
} else {
    console.error('Hamburger menu or navbar not found');
}

