// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-sm');
    } else {
        navbar.classList.remove('shadow-sm');
    }
});

// Enroll button functionality - Auto-fill course name
document.querySelectorAll('.enroll-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const courseName = this.getAttribute('data-course');
        
        // Store course name in sessionStorage
        sessionStorage.setItem('selectedCourse', courseName);
        
        // Redirect to contact page
        window.location.href = 'contact.html';
    });
});

// Auto-fill course name on contact page
window.addEventListener('DOMContentLoaded', function() {
    const courseInput = document.getElementById('interestedCourse');
    
    if (courseInput) {
        const selectedCourse = sessionStorage.getItem('selectedCourse');
        
        if (selectedCourse) {
            courseInput.value = selectedCourse;
            
            // Scroll to form if course is pre-selected
            setTimeout(() => {
                courseInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
                courseInput.focus();
            }, 500);
            
            // Clear the session storage after use
            sessionStorage.removeItem('selectedCourse');
        }
    }
});

// Form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const course = document.getElementById('interestedCourse').value;
        const message = document.getElementById('message').value;
        
        // Basic validation
        if (!fullName || !email || !phone || !message) {
            alert('Please fill in all required fields');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Phone validation (10 digits)
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
            alert('Please enter a valid 10-digit phone number');
            return;
        }
        
        // Show success message
        alert(`Thank you ${fullName}! We have received your inquiry for ${course || 'our courses'}. We will contact you soon.`);
        
        // Reset form
        contactForm.reset();
        
        // In a real application, you would send this data to a server
        console.log({
            fullName,
            email,
            phone,
            course,
            message,
            timestamp: new Date().toISOString()
        });
    });
}

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.fade-up').forEach(el => {
    observer.observe(el);
});

// Add loading state to enroll buttons
document.querySelectorAll('.enroll-btn').forEach(button => {
    button.addEventListener('click', function() {
        const originalText = this.textContent;
        this.innerHTML = '<i class="bi bi-arrow-right-circle me-2"></i>Redirecting...';
        this.disabled = true;
        
        // Re-enable after redirect (in case of navigation issues)
        setTimeout(() => {
            this.textContent = originalText;
            this.disabled = false;
        }, 3000);
    });
});

// Course search/filter functionality (optional enhancement)
function filterCourses(searchTerm) {
    const cards = document.querySelectorAll('.course-card-modern');
    searchTerm = searchTerm.toLowerCase();
    
    cards.forEach(card => {
        const title = card.querySelector('h4').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            card.parentElement.style.display = 'block';
        } else {
            card.parentElement.style.display = 'none';
        }
    });
}

// Smooth reveal animation on page load
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});
