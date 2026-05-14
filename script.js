/**
 * Sara Eldamarany - Data Analyst & AI Engineer Portfolio
 * Enhanced Interactive JavaScript Functionality
 */

// ==========================================
// DOM Content Loaded Event
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    initParticles();
    initNavbar();
    initThemeToggle();
    initMobileMenu();
    initSmoothScroll();
    initScrollAnimations();
    initSkillBars();
    initContactForm();
    initActiveNavLink();
    initTypingEffect();
    initCounterAnimation();
    initParallaxEffect();
    initTiltEffect();
    initCursorEffects();
    initScreenshotGallery();
    initLightbox();
});

// ==========================================
// Particle Background Effect
// ==========================================
function initParticles() {
    const container = document.getElementById('particles-container');
    if (!container) return;
    
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        createParticle(container);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random position
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    
    // Random size
    const size = Math.random() * 8 + 3;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    
    // Random animation delay
    particle.style.animationDelay = Math.random() * 15 + 's';
    particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
    
    // Random opacity
    particle.style.opacity = Math.random() * 0.5 + 0.1;
    
    container.appendChild(particle);
    
    // Animate particle movement
    animateParticle(particle);
}

function animateParticle(particle) {
    const duration = Math.random() * 20000 + 15000;
    const startX = parseFloat(particle.style.left);
    const startY = parseFloat(particle.style.top);
    
    particle.animate([
        { transform: 'translate(0, 0) rotate(0deg)' },
        { transform: `translate(${Math.random() * 200 - 100}px, ${Math.random() * -300 - 100}px) rotate(${Math.random() * 360}deg)` }
    ], {
        duration: duration,
        iterations: Infinity,
        direction: 'alternate',
        easing: 'ease-in-out'
    });
}

// ==========================================
// Navbar Scroll Effect
// ==========================================
function initNavbar() {
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Add shadow on scroll
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
}

// ==========================================
// Theme Toggle (Dark/Light Mode)
// ==========================================
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const icon = themeToggle.querySelector('i');
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
        
        // Add animation effect
        themeToggle.style.transform = 'rotate(360deg) scale(1.2)';
        setTimeout(() => {
            themeToggle.style.transform = 'rotate(0deg) scale(1)';
        }, 300);
    });
}

function updateThemeIcon(theme) {
    const icon = document.querySelector('#themeToggle i');
    if (theme === 'dark') {
        icon.className = 'fas fa-sun';
    } else {
        icon.className = 'fas fa-moon';
    }
}

// ==========================================
// Mobile Menu Toggle
// ==========================================
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    const icon = mobileMenuBtn.querySelector('i');
    
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Toggle icon with animation
        mobileMenuBtn.style.transform = 'rotate(180deg)';
        setTimeout(() => {
            if (navLinks.classList.contains('active')) {
                icon.className = 'fas fa-times';
            } else {
                icon.className = 'fas fa-bars';
            }
            mobileMenuBtn.style.transform = 'rotate(0deg)';
        }, 150);
    });
    
    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            icon.className = 'fas fa-bars';
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            navLinks.classList.remove('active');
            icon.className = 'fas fa-bars';
        }
    });
}

// ==========================================
// Smooth Scroll for Navigation Links
// ==========================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const navbarHeight = document.getElementById('navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ==========================================
// Active Navigation Link on Scroll
// ==========================================
function initActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        const navbarHeight = document.getElementById('navbar').offsetHeight;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - navbarHeight - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.pageYOffset >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ==========================================
// Scroll Animations (Intersection Observer)
// ==========================================
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll(
        '.value-card, .timeline-card, .skills-category, .project-card, ' +
        '.education-item, .certificate-card, .contact-method, .leadership-item, ' +
        '.freelance-card'
    );
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add staggered delay
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 80);
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(40px)';
        element.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
        observer.observe(element);
    });
}

// ==========================================
// Skill Progress Bars Animation
// ==========================================
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progress = entry.target.getAttribute('data-progress');
                entry.target.style.width = `${progress}%`;
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    skillBars.forEach(bar => {
        bar.style.width = '0%';
        observer.observe(bar);
    });
}

// ==========================================
// Typing Effect
// ==========================================
function initTypingEffect() {
    const typingElement = document.getElementById('typing-text');
    if (!typingElement) return;
    
    const roles = [
        'Data Analyst & AI Engineer',
        'Power BI Expert',
        'Python Developer',
        'Data Engineer',
        'SQL Specialist'
    ];
    
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function type() {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }
        
        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            typingSpeed = 2000; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typingSpeed = 500; // Pause before next word
        }
        
        setTimeout(type, typingSpeed);
    }
    
    // Start typing after a delay
    setTimeout(type, 1500);
}

// ==========================================
// Counter Animation
// ==========================================
function initCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number');
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                animateCounter(entry.target, target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
}

function animateCounter(element, target) {
    const duration = 2000;
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    function updateCounter() {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    }
    
    updateCounter();
}

// ==========================================
// Contact Form Handling - Email & WhatsApp
// ==========================================
function initContactForm() {
    const form = document.getElementById('contactForm');
    const sendEmailBtn = document.getElementById('sendEmailBtn');
    const sendWhatsAppBtn = document.getElementById('sendWhatsAppBtn');
    
    // Validate form data
    function validateForm() {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!name || name.length < 2) {
            showNotification('Please enter a valid name', 'error');
            return null;
        }
        
        if (!emailRegex.test(email)) {
            showNotification('Please enter a valid email address', 'error');
            return null;
        }
        
        if (!subject || subject.length < 3) {
            showNotification('Please enter a subject', 'error');
            return null;
        }
        
        if (!message || message.length < 10) {
            showNotification('Please enter a message (at least 10 characters)', 'error');
            return null;
        }
        
        return { name, email, subject, message };
    }
    
    // Send via Email (mailto link)
    sendEmailBtn.addEventListener('click', () => {
        const formData = validateForm();
        if (!formData) return;
        
        const mailtoSubject = encodeURIComponent(formData.subject);
        const mailtoBody = encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
        );
        const mailtoLink = `mailto:saraeldamarany@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
        
        window.location.href = mailtoLink;
        showNotification('Opening your email client...', 'success');
    });
    
    // Send via WhatsApp
    sendWhatsAppBtn.addEventListener('click', () => {
        const formData = validateForm();
        if (!formData) return;
        
        const whatsappMessage = encodeURIComponent(
            `Hi Sara! I'm ${formData.name} (${formData.email})\n\nSubject: ${formData.subject}\n\n${formData.message}`
        );
        const whatsappLink = `https://wa.me/201123221464?text=${whatsappMessage}`;
        
        window.open(whatsappLink, '_blank');
        showNotification('Opening WhatsApp...', 'success');
    });
    
    // Add input animations
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });
        input.addEventListener('blur', () => {
            input.parentElement.classList.remove('focused');
        });
    });
}

// ==========================================
// Notification System
// ==========================================
function showNotification(message, type = 'info') {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${type === 'success' ? 'linear-gradient(135deg, #10b981, #059669)' : 'linear-gradient(135deg, #ef4444, #dc2626)'};
        color: white;
        border-radius: 12px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        display: flex;
        align-items: center;
        gap: 1rem;
        z-index: 9999;
        animation: slideIn 0.4s ease;
        max-width: 400px;
    `;
    
    // Add animation keyframes
    if (!document.getElementById('notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(100%) scale(0.8);
                    opacity: 0;
                }
                to {
                    transform: translateX(0) scale(1);
                    opacity: 1;
                }
            }
            @keyframes slideOut {
                from {
                    transform: translateX(0) scale(1);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%) scale(0.8);
                    opacity: 0;
                }
            }
            .notification-content {
                display: flex;
                align-items: center;
                gap: 0.75rem;
            }
            .notification-close {
                background: none;
                border: none;
                color: white;
                cursor: pointer;
                padding: 0.25rem;
                opacity: 0.8;
                transition: opacity 0.2s;
            }
            .notification-close:hover {
                opacity: 1;
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideOut 0.4s ease forwards';
            setTimeout(() => notification.remove(), 400);
        }
    }, 5000);
}

// ==========================================
// Parallax Effect
// ==========================================
function initParallaxEffect() {
    const shapes = document.querySelectorAll('.hero-shape');
    const floatingIcons = document.querySelectorAll('.floating-icons i');
    
    window.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 30;
            const xOffset = (x - 0.5) * speed;
            const yOffset = (y - 0.5) * speed;
            
            shape.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        });
        
        floatingIcons.forEach((icon, index) => {
            const speed = (index + 1) * 10;
            const xOffset = (x - 0.5) * speed;
            const yOffset = (y - 0.5) * speed;
            
            icon.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        });
    });
}

// ==========================================
// Tilt Effect for Cards
// ==========================================
function initTiltEffect() {
    const cards = document.querySelectorAll('.value-card, .project-card:not(.project-card-featured), .certificate-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
}

// ==========================================
// Custom Cursor Effects
// ==========================================
function initCursorEffects() {
    // Create cursor elements
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        border: 2px solid var(--primary);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.1s ease, opacity 0.3s ease;
        opacity: 0;
    `;
    document.body.appendChild(cursor);
    
    const cursorDot = document.createElement('div');
    cursorDot.className = 'custom-cursor-dot';
    cursorDot.style.cssText = `
        position: fixed;
        width: 5px;
        height: 5px;
        background: var(--primary);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        opacity: 0;
    `;
    document.body.appendChild(cursorDot);
    
    // Show cursor on desktop only
    if (window.innerWidth > 768) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            cursor.style.opacity = '1';
            cursor.style.transform = 'translate(-50%, -50%)';
            
            cursorDot.style.left = e.clientX + 'px';
            cursorDot.style.top = e.clientY + 'px';
            cursorDot.style.opacity = '1';
            cursorDot.style.transform = 'translate(-50%, -50%)';
        });
        
        // Hover effects
        const interactiveElements = document.querySelectorAll('a, button, .btn, .tool-item, .project-card, .value-card');
        
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
                cursor.style.borderColor = 'var(--accent)';
            });
            el.addEventListener('mouseleave', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1)';
                cursor.style.borderColor = 'var(--primary)';
            });
        });
    }
}

// ==========================================
// Screenshot Gallery for Featured Project
// ==========================================
function initScreenshotGallery() {
    const screenshotBtns = document.querySelectorAll('.screenshot-btn');
    
    screenshotBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const index = btn.getAttribute('data-index');
            
            // Find the parent gallery container
            const galleryContainer = btn.closest('.project-image-gallery');
            if (!galleryContainer) return;
            
            // Update active button within this gallery only
            galleryContainer.querySelectorAll('.screenshot-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Update active screenshot within this gallery only
            galleryContainer.querySelectorAll('.project-screenshot').forEach(s => s.classList.remove('active'));
            const target = galleryContainer.querySelector(`.project-screenshot[data-index="${index}"]`);
            if (target) {
                target.classList.add('active');
            }
        });
    });
}

// ==========================================
// Lightbox for Project Screenshots
// ==========================================
function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;
    
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxCounter = document.getElementById('lightboxCounter');
    const lightboxClose = lightbox.querySelector('.lightbox-close');
    const lightboxOverlay = lightbox.querySelector('.lightbox-overlay');
    const lightboxPrev = lightbox.querySelector('.lightbox-prev');
    const lightboxNext = lightbox.querySelector('.lightbox-next');
    
    let currentImages = [];
    let currentTitles = [];
    let currentIndex = 0;
    
    // Open lightbox from "View Screenshots" button
    document.querySelectorAll('.open-lightbox-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const images = JSON.parse(btn.getAttribute('data-images'));
            const titles = JSON.parse(btn.getAttribute('data-titles'));
            openLightbox(images, titles, 0);
        });
    });
    
    // Open lightbox from zoom button on any gallery card (ITI, SSIS, Kafka, etc.)
    document.querySelectorAll('.project-image-gallery .screenshot-zoom-btn').forEach(zoomBtn => {
        zoomBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const galleryContainer = zoomBtn.closest('.project-image-gallery');
            const projectCard = zoomBtn.closest('.project-card');
            const activeScreenshot = galleryContainer.querySelector('.project-screenshot.active');
            const activeIndex = activeScreenshot ? parseInt(activeScreenshot.getAttribute('data-index')) : 0;
            
            // Get images and titles from the open-lightbox-btn in the same card
            const lightboxBtn = projectCard.querySelector('.open-lightbox-btn');
            if (lightboxBtn) {
                const images = JSON.parse(lightboxBtn.getAttribute('data-images'));
                const titles = JSON.parse(lightboxBtn.getAttribute('data-titles'));
                openLightbox(images, titles, activeIndex);
            } else {
                // Fallback: get images from gallery screenshots directly
                const allScreenshots = galleryContainer.querySelectorAll('.project-screenshot');
                const images = Array.from(allScreenshots).map(s => s.getAttribute('src'));
                const titles = Array.from(allScreenshots).map(s => s.getAttribute('alt'));
                openLightbox(images, titles, activeIndex);
            }
        });
    });
    
    // Open lightbox from clickable project images (like Superstore)
    document.querySelectorAll('.project-image-clickable').forEach(imgContainer => {
        const zoomBtnInCard = imgContainer.querySelector('.screenshot-zoom-btn');
        if (zoomBtnInCard) {
            zoomBtnInCard.addEventListener('click', (e) => {
                e.stopPropagation();
                const src = imgContainer.getAttribute('data-lightbox-src');
                const title = imgContainer.getAttribute('data-lightbox-title');
                if (src) {
                    openLightbox([src], [title || 'Project Screenshot'], 0);
                }
            });
        }
    });
    
    function openLightbox(images, titles, startIndex) {
        currentImages = images;
        currentTitles = titles;
        currentIndex = startIndex;
        updateLightboxImage();
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    function updateLightboxImage() {
        lightboxImage.src = currentImages[currentIndex];
        lightboxImage.alt = currentTitles[currentIndex];
        lightboxCaption.textContent = currentTitles[currentIndex];
        lightboxCounter.textContent = `${currentIndex + 1} / ${currentImages.length}`;
        
        // Update navigation visibility
        lightboxPrev.style.display = currentImages.length > 1 ? 'flex' : 'none';
        lightboxNext.style.display = currentImages.length > 1 ? 'flex' : 'none';
    }
    
    function showPrev() {
        currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
        updateLightboxImage();
    }
    
    function showNext() {
        currentIndex = (currentIndex + 1) % currentImages.length;
        updateLightboxImage();
    }
    
    // Event listeners
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxOverlay.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', showPrev);
    lightboxNext.addEventListener('click', showNext);
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') showPrev();
        if (e.key === 'ArrowRight') showNext();
    });
}

// ==========================================
// Scroll to Top Button
// ==========================================
function initScrollToTop() {
    const scrollBtn = document.createElement('button');
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--primary-gradient);
        color: white;
        border: none;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 15px rgba(13, 148, 136, 0.3);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.25rem;
    `;
    
    document.body.appendChild(scrollBtn);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            scrollBtn.style.opacity = '1';
            scrollBtn.style.visibility = 'visible';
        } else {
            scrollBtn.style.opacity = '0';
            scrollBtn.style.visibility = 'hidden';
        }
    });
    
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    scrollBtn.addEventListener('mouseenter', () => {
        scrollBtn.style.transform = 'scale(1.1) translateY(-5px)';
    });
    
    scrollBtn.addEventListener('mouseleave', () => {
        scrollBtn.style.transform = 'scale(1) translateY(0)';
    });
}

// Initialize scroll to top
initScrollToTop();

// ==========================================
// Magnetic Buttons Effect
// ==========================================
function initMagneticButtons() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0, 0)';
        });
    });
}

initMagneticButtons();

// ==========================================
// Ripple Effect on Buttons
// ==========================================
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.style.cssText = `
            position: absolute;
            background: rgba(255, 255, 255, 0.4);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
            left: ${x}px;
            top: ${y}px;
            width: 100px;
            height: 100px;
            margin-left: -50px;
            margin-top: -50px;
        `;
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation
if (!document.getElementById('ripple-styles')) {
    const style = document.createElement('style');
    style.id = 'ripple-styles';
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// ==========================================
// Console Easter Egg
// ==========================================
console.log('%c Welcome to Sara Eldamarany\'s Portfolio! ', 
    'background: linear-gradient(135deg, #0d9488, #14b8a6); color: white; font-size: 16px; padding: 10px 20px; border-radius: 8px; font-weight: bold;'
);
console.log('%c Data Engineer | AI Specialist | BI Developer ', 
    'color: #0d9488; font-size: 12px; font-weight: bold;'
);
console.log('%c LinkedIn: linkedin.com/in/saraeldamarany ', 
    'color: #6366f1; font-size: 11px;'
);
console.log('%c GitHub: github.com/SaraEldamarany ', 
    'color: #6366f1; font-size: 11px;'
);