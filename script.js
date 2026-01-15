// ========================================
// NAVIGATION
// ========================================

const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Navbar scroll effect
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
});

// Close mobile menu on link click
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// PORTFOLIO FILTERS
// ========================================

const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        portfolioItems.forEach(item => {
            const categories = item.getAttribute('data-category');
            
            if (filterValue === 'all') {
                item.classList.remove('hidden');
                // Animate in
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, 100);
            } else {
                if (categories.includes(filterValue)) {
                    item.classList.remove('hidden');
                    // Animate in
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    // Animate out
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        item.classList.add('hidden');
                    }, 300);
                }
            }
        });
    });
});

// ========================================
// VIDEO MODAL
// ========================================

const videoModal = document.getElementById('videoModal');
const modalClose = document.getElementById('modalClose');
const playButtons = document.querySelectorAll('.play-btn');
const modalOverlay = document.querySelector('.modal-overlay');

// Open modal
playButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const videoId = button.getAttribute('data-video');
        
        // Here you would load the actual video
        // For now, we just show the modal
        videoModal.classList.add('show');
        document.body.style.overflow = 'hidden';
        
        // Add animation
        setTimeout(() => {
            videoModal.querySelector('.modal-content').style.opacity = '1';
        }, 10);
    });
});

// Close modal
const closeModal = () => {
    videoModal.classList.remove('show');
    document.body.style.overflow = '';
    
    // Reset animation
    videoModal.querySelector('.modal-content').style.opacity = '0';
};

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

// Close modal on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && videoModal.classList.contains('show')) {
        closeModal();
    }
});

// ========================================
// CONTACT FORM
// ========================================

const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Here you would send the data to your backend
    // For now, we just show the success message
    console.log('Form data:', data);
    
    // Hide form and show success message
    contactForm.style.display = 'none';
    formSuccess.classList.add('show');
    
    // Scroll to success message
    formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Reset form after 5 seconds
    setTimeout(() => {
        contactForm.reset();
        contactForm.style.display = 'block';
        formSuccess.classList.remove('show');
    }, 5000);
});

// ========================================
// SCROLL ANIMATIONS
// ========================================

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements that should fade in
const fadeElements = document.querySelectorAll('.service-card, .portfolio-item, .method-step, .value-item, .stat-item');

fadeElements.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// ========================================
// PARALLAX EFFECT FOR HERO SHAPES
// ========================================

const shapes = document.querySelectorAll('.bg-shape');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    shapes.forEach((shape, index) => {
        const speed = 0.5 + (index * 0.2);
        const yPos = -(scrolled * speed);
        shape.style.transform = `translateY(${yPos}px)`;
    });
});

// ========================================
// CURSOR EFFECT - DÉSACTIVÉ
// ========================================

// Le curseur personnalisé a été désactivé pour une meilleure expérience utilisateur

// ========================================
// TYPING EFFECT FOR HERO TITLE (OPTIONAL)
// ========================================

const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    const titleLines = heroTitle.querySelectorAll('.title-line');
    
    // Add typing animation class after initial fade in
    setTimeout(() => {
        titleLines.forEach((line, index) => {
            setTimeout(() => {
                line.style.animation = 'none';
                line.style.opacity = '1';
                
                // Optional: Add typing effect
                // const text = line.textContent;
                // line.textContent = '';
                // let i = 0;
                // const typeWriter = setInterval(() => {
                //     if (i < text.length) {
                //         line.textContent += text.charAt(i);
                //         i++;
                //     } else {
                //         clearInterval(typeWriter);
                //     }
                // }, 50);
            }, index * 200);
        });
    }, 1000);
}

// ========================================
// STATS COUNTER ANIMATION
// ========================================

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('.stat-number');
            const finalValue = statNumber.textContent;
            
            // Only animate numbers
            if (finalValue.includes('+')) {
                const numValue = parseInt(finalValue);
                let currentValue = 0;
                const increment = numValue / 50;
                
                const counter = setInterval(() => {
                    currentValue += increment;
                    if (currentValue >= numValue) {
                        statNumber.textContent = finalValue;
                        clearInterval(counter);
                    } else {
                        statNumber.textContent = Math.floor(currentValue) + '+';
                    }
                }, 30);
            } else if (finalValue.includes('%')) {
                const numValue = parseInt(finalValue);
                let currentValue = 0;
                const increment = numValue / 50;
                
                const counter = setInterval(() => {
                    currentValue += increment;
                    if (currentValue >= numValue) {
                        statNumber.textContent = finalValue;
                        clearInterval(counter);
                    } else {
                        statNumber.textContent = Math.floor(currentValue) + '%';
                    }
                }, 30);
            }
            
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statItems = document.querySelectorAll('.stat-item');
statItems.forEach(item => statsObserver.observe(item));

// ========================================
// PERFORMANCE OPTIMIZATIONS
// ========================================

// Lazy load images when they come into view
const lazyImages = document.querySelectorAll('img[data-src]');

const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
        }
    });
});

lazyImages.forEach(img => imageObserver.observe(img));

// ========================================
// PRELOADER (OPTIONAL)
// ========================================

window.addEventListener('load', () => {
    // Hide preloader if exists
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
    
    // Trigger any load animations
    document.body.classList.add('loaded');
});

// ========================================
// UTILITY FUNCTIONS
// ========================================

// Debounce function for performance
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

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ========================================
// CONSOLE EASTER EGG
// ========================================

console.log('%c🎬 Kev Studio', 'font-size: 24px; font-weight: bold; color: #6366f1;');
console.log('%cDonner du sens à l\'image.', 'font-size: 14px; color: #a0a0a0;');
console.log('%c\nVous cherchez quelque chose ? 👀', 'font-size: 12px; color: #666;');
console.log('%ccontact@kevstudio.fr', 'font-size: 12px; color: #6366f1;');

// ========================================
// ACCESSIBILITY IMPROVEMENTS
// ========================================

// Skip to main content link
const skipLink = document.createElement('a');
skipLink.href = '#hero';
skipLink.className = 'skip-link';
skipLink.textContent = 'Aller au contenu principal';
skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 0;
    background: var(--color-accent);
    color: white;
    padding: 8px 16px;
    text-decoration: none;
    z-index: 10000;
    transition: top 0.3s;
`;
skipLink.addEventListener('focus', () => {
    skipLink.style.top = '0';
});
skipLink.addEventListener('blur', () => {
    skipLink.style.top = '-40px';
});
document.body.insertBefore(skipLink, document.body.firstChild);

// Keyboard navigation improvements
document.addEventListener('keydown', (e) => {
    // Close modal on Escape
    if (e.key === 'Escape') {
        if (videoModal.classList.contains('show')) {
            closeModal();
        }
        if (navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
});

// Focus trap for modal
const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

videoModal.addEventListener('keydown', (e) => {
    if (e.key === 'Tab' && videoModal.classList.contains('show')) {
        const focusable = videoModal.querySelectorAll(focusableElements);
        const firstFocusable = focusable[0];
        const lastFocusable = focusable[focusable.length - 1];
        
        if (e.shiftKey) {
            if (document.activeElement === firstFocusable) {
                lastFocusable.focus();
                e.preventDefault();
            }
        } else {
            if (document.activeElement === lastFocusable) {
                firstFocusable.focus();
                e.preventDefault();
            }
        }
    }
});

// ========================================
// ANALYTICS TRACKING (PLACEHOLDER)
// ========================================

// Track button clicks
document.querySelectorAll('.btn, .nav-link').forEach(element => {
    element.addEventListener('click', (e) => {
        const label = e.target.textContent.trim() || e.target.getAttribute('aria-label');
        console.log('Button clicked:', label);
        
        // Here you would send to your analytics service
        // Example: gtag('event', 'click', { 'event_label': label });
    });
});

// Track form submission
contactForm.addEventListener('submit', () => {
    console.log('Form submitted');
    // Example: gtag('event', 'form_submit', { 'form_name': 'contact' });
});

// Track scroll depth
let maxScroll = 0;
const scrollMilestones = [25, 50, 75, 100];
const trackedMilestones = new Set();

window.addEventListener('scroll', throttle(() => {
    const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    
    if (scrollPercentage > maxScroll) {
        maxScroll = scrollPercentage;
        
        scrollMilestones.forEach(milestone => {
            if (scrollPercentage >= milestone && !trackedMilestones.has(milestone)) {
                trackedMilestones.add(milestone);
                console.log(`Scroll depth: ${milestone}%`);
                // Example: gtag('event', 'scroll', { 'percent': milestone });
            }
        });
    }
}, 500));

// ========================================
// INITIALIZATION
// ========================================

console.log('✅ Kev Studio website initialized');
