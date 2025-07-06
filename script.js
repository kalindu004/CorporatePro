// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 70;
            const elementPosition = target.offsetTop;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    }
});

// Contact Form Validation and Submission
const contactForm = document.getElementById('contactForm');
const formFields = {
    name: document.getElementById('name'),
    email: document.getElementById('email'),
    phone: document.getElementById('phone'),
    message: document.getElementById('message')
};

const errorElements = {
    name: document.getElementById('nameError'),
    email: document.getElementById('emailError'),
    phone: document.getElementById('phoneError'),
    message: document.getElementById('messageError')
};

// Validation functions
function validateName(name) {
    const nameRegex = /^[a-zA-Z\s]{2,50}$/;
    return nameRegex.test(name.trim());
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
}

function validatePhone(phone) {
    if (!phone.trim()) return true; // Optional field
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{7,20}$/;
    return phoneRegex.test(phone.trim());
}

function validateMessage(message) {
    return message.trim().length >= 10 && message.trim().length <= 1000;
}

// Clear error messages
function clearErrors() {
    Object.values(errorElements).forEach(element => {
        element.textContent = '';
    });
}

// Show error message
function showError(field, message) {
    errorElements[field].textContent = message;
}

// Real-time validation
Object.keys(formFields).forEach(fieldName => {
    formFields[fieldName].addEventListener('blur', () => {
        validateField(fieldName);
    });

    formFields[fieldName].addEventListener('input', () => {
        // Clear error message when user starts typing
        errorElements[fieldName].textContent = '';
    });
});

function validateField(fieldName) {
    const value = formFields[fieldName].value;
    let isValid = true;

    switch (fieldName) {
        case 'name':
            if (!validateName(value)) {
                showError('name', 'Please enter a valid name (2-50 characters, letters only)');
                isValid = false;
            }
            break;
        case 'email':
            if (!validateEmail(value)) {
                showError('email', 'Please enter a valid email address');
                isValid = false;
            }
            break;
        case 'phone':
            if (!validatePhone(value)) {
                showError('phone', 'Please enter a valid phone number');
                isValid = false;
            }
            break;
        case 'message':
            if (!validateMessage(value)) {
                showError('message', 'Message must be between 10 and 1000 characters');
                isValid = false;
            }
            break;
    }

    return isValid;
}

// Form submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    clearErrors();
    
    // Validate all fields
    let isFormValid = true;
    
    // Check required fields
    if (!formFields.name.value.trim()) {
        showError('name', 'Name is required');
        isFormValid = false;
    } else if (!validateField('name')) {
        isFormValid = false;
    }
    
    if (!formFields.email.value.trim()) {
        showError('email', 'Email is required');
        isFormValid = false;
    } else if (!validateField('email')) {
        isFormValid = false;
    }
    
    if (!formFields.message.value.trim()) {
        showError('message', 'Message is required');
        isFormValid = false;
    } else if (!validateField('message')) {
        isFormValid = false;
    }
    
    // Validate optional phone field if provided
    if (formFields.phone.value.trim() && !validateField('phone')) {
        isFormValid = false;
    }
    
    if (isFormValid) {
        // In a real application, this would send data to a server
        // For now, we'll show a success message
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    } else {
        // Focus on the first field with an error
        const firstErrorField = Object.keys(errorElements).find(field => 
            errorElements[field].textContent !== ''
        );
        if (firstErrorField) {
            formFields[firstErrorField].focus();
        }
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.service-card, .brand-card, .project-card, .contact-card');
    animatedElements.forEach(element => {
        observer.observe(element);
    });
});

// Lazy loading for images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });
});

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    // Close mobile menu with Escape key
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// Focus management for accessibility
document.addEventListener('DOMContentLoaded', () => {
    const focusableElements = document.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    focusableElements.forEach(element => {
        element.addEventListener('focus', () => {
            element.style.outline = '2px solid #3498DB';
            element.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', () => {
            element.style.outline = '';
            element.style.outlineOffset = '';
        });
    });
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimized scroll handler
const optimizedScrollHandler = debounce(() => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    }
}, 10);

window.addEventListener('scroll', optimizedScrollHandler);

// Add loading state management
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Error handling for images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('error', (e) => {
            console.warn('Image failed to load:', e.target.src);
            // You could set a placeholder image here
            // e.target.src = 'path/to/placeholder.jpg';
        });
    });
});
