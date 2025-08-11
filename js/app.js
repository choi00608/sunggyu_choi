import { header } from './components/header.js';
import { about } from './components/about.js';
import { projects } from './components/projects.js';
import { skills } from './components/skills.js';
import { interests } from './components/interests.js';
import { contactHTML, setupContactSection } from './components/contact.js';

/**
 * Sets up the navigation bar event listeners.
 * Specifically, it handles closing the mobile navbar when a link is clicked.
 */
function setupNavbar() {
    const navLinks = document.querySelectorAll('#navbarNav .nav-link');
    const menuToggle = document.getElementById('navbarNav');

    // Exit if the navbar isn't found
    if (!menuToggle) {
        return;
    }

    // Create a Bootstrap Collapse instance to control the menu
    const bsCollapse = new bootstrap.Collapse(menuToggle, {
      toggle: false
    });

    // Add a click event to each nav link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // If the menu is currently shown, hide it
            if (menuToggle.classList.contains('show')) {
                bsCollapse.hide();
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        headerPlaceholder.outerHTML = header;
        // Call setupNavbar() after the header has been injected into the DOM
        setupNavbar();
    }

    const mainContent = document.getElementById('main-content');
    if (mainContent) {
        mainContent.innerHTML = about + projects + skills + contactHTML;
    }
    setupContactSection(); // Call after content is rendered
});


// Intersection Observer for fade-in effect
const sections = document.querySelectorAll('section');

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});