// DOM Elements
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
const contactForm = document.getElementById('contact-form');
const navLinks = document.querySelectorAll('nav ul li a');

// Toggle mobile navigation
if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
    });
}

// Close mobile menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
    });
});

// Handle form submission
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            interest: document.getElementById('interest').value,
            message: document.getElementById('message').value
        };

        // Log form data to console (placeholder for actual form submission)
        console.log('Form Data Submitted:', formData);

        // Show success message
        alert('Thank you for your message! We will get back to you soon.');

        // Reset form
        contactForm.reset();
    });
}

// Smooth scrolling for navbar links and buttons
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');

        if (targetId === '#') return;

        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add parallax effect to header on scroll (subtle animation)
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const scrollPosition = window.scrollY;

    if (header) {
        header.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
    }

    // Move decorative elements on scroll for organic feel
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const distance = (sectionTop - scrollPosition) * 0.1;

        if (section.querySelector(':before')) {
            section.style.setProperty('--move-factor', `${distance}px`);
        }
    });
});

// Add a subtle animation to elements when they come into view
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('section, .about-item, .image-placeholder, form').forEach(element => {
    element.classList.add('fade-in');
    observer.observe(element);
});

// Add floating leaf particles in the background for solarpunk effect
function createLeaves() {
    const body = document.querySelector('body');
    const numLeaves = 10;

    for (let i = 0; i < numLeaves; i++) {
        const leaf = document.createElement('div');
        leaf.classList.add('leaf');

        // Randomize leaf properties
        const size = Math.random() * 20 + 10;
        const posX = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 20 + 10;

        // Set leaf styles
        leaf.style.width = `${size}px`;
        leaf.style.height = `${size}px`;
        leaf.style.left = `${posX}vw`;
        leaf.style.animationDelay = `${delay}s`;
        leaf.style.animationDuration = `${duration}s`;

        body.appendChild(leaf);
    }
}

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    .fade-in {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }

    .animated {
        opacity: 1;
        transform: translateY(0);
    }

    section::before {
        transition: transform 0.5s ease;
        transform: translateY(var(--move-factor, 0));
    }

    .leaf {
        position: fixed;
        z-index: -5;
        width: 20px;
        height: 20px;
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%234CAF50" opacity="0.3"><path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/></svg>');
        animation: falling linear infinite;
        opacity: 0.5;
    }

    @keyframes falling {
        0% {
            top: -10%;
            transform: translateX(0) rotate(0deg);
        }
        100% {
            top: 110%;
            transform: translateX(100px) rotate(360deg);
        }
    }
`;
document.head.appendChild(style);

// Initialize leaves
window.addEventListener('load', createLeaves);