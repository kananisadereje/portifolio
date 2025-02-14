// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation for contact form
const form = document.getElementById('contact-form');
form.addEventListener('submit', (event) => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (!name || !email || !message) {
        alert('Please fill in all the fields.');
        event.preventDefault(); // prevents form from submitting
    }
});

// Animate progress bars when they come into view
window.addEventListener('scroll', () => {
    const skillsSection = document.getElementById('skills');
    const skillsPosition = skillsSection.getBoundingClientRect().top;

    if (skillsPosition <= window.innerHeight) {
        const progressBars = document.querySelectorAll('.progress');
        progressBars.forEach((bar) => {
            const width = bar.style.width; // Getting width of the progress bar
            bar.style.transition = 'width 2s ease-in-out';
            bar.style.width = width; // Animate the bar width
        });
    }
});

const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-links');
menuToggle.addEventListener('click', () => {
    document.querySelector('header nav').classList.toggle('active'); // Toggle on header nav
});


// Light/Dark mode toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Scroll animation for sections
const sections = document.querySelectorAll('section');

const animateOnScroll = () => {
    sections.forEach(section => {
        const position = section.getBoundingClientRect().top;
        if (position <= window.innerHeight) {
            section.classList.add('animate');
        }
    });
};
document.getElementById('menu-toggle').addEventListener('click', function() {
    const nav = document.querySelector('header nav');
    nav.classList.toggle('active');
});
window.addEventListener('scroll', animateOnScroll);

// Load projects dynamically (optional)
const projects = [
    { name: "Project 1", description: "Description of Project 1", image: "project1.jpg" },
    { name: "Project 2", description: "Description of Project 2", image: "project2.jpg" },
    { name: "Project 3", description: "Description of Project 3", image: "project3.jpg" }
];
document.getElementById('menu-toggle').addEventListener('click', function() {
    const nav = document.querySelector('header nav');
    nav.classList.toggle('active');
});

// Hide dropdown when clicking outside
document.addEventListener('click', function(event) {
    const nav = document.querySelector('header nav');
    const menuToggle = document.getElementById('menu-toggle');
    const isClickInside = nav.contains(event.target) || menuToggle.contains(event.target);

    if (!isClickInside) {
        nav.classList.remove('active'); // Hide the dropdown
    }
});
const projectsContainer = document.querySelector('.projects-container');
projects.forEach(project => {
    const projectElement = document.createElement('div');
    projectElement.classList.add('project');
    projectElement.innerHTML = `
        <img src="${project.image}" alt="${project.name}">
        <h3>${project.name}</h3>
        <p>${project.description}</p>
    `;
    projectsContainer.appendChild(projectElement);
});

// Modal for displaying project details (optional)
const projectImages = document.querySelectorAll('.project img');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('close-modal');

projectImages.forEach(image => {
    image.addEventListener('click', () => {
        modal.classList.add('open');
        modal.querySelector('img').src = image.src;
        modal.querySelector('p').textContent = image.alt;
    });
});

closeModal.addEventListener('click', () => {
    modal.classList.remove('open');
});
menuToggle.addEventListener('click', () => {
    console.log('Menu toggle clicked');  // Check if the click event is triggered
    navMenu.classList.toggle('active');
});
