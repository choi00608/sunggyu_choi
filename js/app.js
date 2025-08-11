import { header } from './components/header.js';
import { about } from './components/about.js';
import { projects } from './components/projects.js';
import { skills } from './components/skills.js';
import { interests } from './components/interests.js';
import { contactHTML, setupContactSection } from './components/contact.js';

document.addEventListener('DOMContentLoaded', () => {
    const headerPlaceholder = document.getElementById('header-placeholder');
    if(headerPlaceholder) {
        headerPlaceholder.outerHTML = header;
    }

    const mainContent = document.getElementById('main-content');
    if(mainContent) {
        mainContent.innerHTML = about + projects + skills + contactHTML;
    }
    setupContactSection(); // Call after content is rendered
});
