// Mobile Menu Toggle
function toggleMenu() {
    const menu = document.querySelector('.nav-menu');
    menu.classList.toggle('active');
}

// Smooth Scrolling for Anchor Links (if added)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Newsletter Form Submission
document.getElementById('newsletter-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for subscribing! (Demo)');
    this.reset();
});

// Contact Form Validation and Submission
document.getElementById('contact-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;
    if (name && email && message) {
        alert('Message sent successfully! (Demo - In production, integrate with backend)');
        this.reset();
    } else {
        alert('Please fill all fields.');
    }
});

// Product Filter
function filterProducts(category) {
    const buttons = document.querySelectorAll('.category-filter button');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
            card.style.animation = 'fadeIn 0.6s ease-out';
        } else {
            card.style.display = 'none';
        }
    });
}

// Intersection Observer for Scroll Animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.6s ease-out';
        }
    });
});
document.querySelectorAll('.product-card, .stat-item').forEach(el => observer.observe(el));