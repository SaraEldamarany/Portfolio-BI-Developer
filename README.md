# 👩‍💻 Sara Eldamarany - Data Analyst & AI Engineer Portfolio

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

> A modern, responsive portfolio website showcasing data analysis and AI engineering expertise with beautiful animations and interactive effects.

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Demo](#-demo)
- [Files Structure](#-files-structure)
- [Technologies Used](#-technologies-used)
- [Installation](#-installation)
- [Customization](#-customization)
- [Animations & Effects](#-animations--effects)
- [Contact](#-contact)
- [License](#-license)

---

## 🌟 Overview

This is a professional portfolio website for **Sara Eldamarany**, a Data Analyst and AI Engineer. The portfolio features a modern design with smooth animations, dark/light mode toggle, and fully responsive layout.

### Key Highlights:
- 🎨 Modern UI/UX Design
- 🌓 Dark/Light Theme Toggle
- ✨ Smooth Animations & Transitions
- 📱 Fully Responsive
- ⚡ Fast Loading
- 🔍 SEO Optimized

---

## ✨ Features

### Sections Included:
| Section | Description |
|---------|-------------|
| 🏠 **Hero** | Eye-catching introduction with animated stats |
| 👤 **About** | Professional summary and key strengths |
| 🛤️ **Journey** | Interactive timeline of experience |
| 💻 **Skills** | Animated skill bars and tools grid |
| 📂 **Projects** | Portfolio of featured projects |
| 🏆 **Certificates** | Professional certifications |
| 📧 **Contact** | Contact form and social links |
| 💼 **Freelance** | Links to Khamsat & Mostaql |

### Interactive Features:
- ✅ Typing animation effect
- ✅ Counter animation for stats
- ✅ Parallax background effect
- ✅ Custom cursor
- ✅ Ripple effect on buttons
- ✅ Tilt effect on cards
- ✅ Scroll animations
- ✅ Particle background

---

## 🎬 Demo

To view the portfolio:
1. Download or clone the repository
2. Open `index.html` in your browser
3. Or deploy to any static hosting service

---

## 📁 Files Structure

```
portfolio/
│
├── index.html          # Main HTML structure
│   ├── Navigation
│   ├── Hero Section
│   ├── About Section
│   ├── Journey Timeline
│   ├── Skills Section
│   ├── Projects Section
│   ├── Certificates Section
│   ├── Contact Section
│   └── Footer
│
├── styles.css          # Complete CSS styling
│   ├── CSS Variables
│   ├── Dark/Light Theme
│   ├── Animations
│   ├── Responsive Design
│   └── Custom Scrollbar
│
├── script.js           # JavaScript functionality
│   ├── Particles Effect
│   ├── Theme Toggle
│   ├── Typing Effect
│   ├── Counter Animation
│   ├── Parallax Effect
│   ├── Form Validation
│   └── Notification System
│
└── README.md           # Documentation
```

---

## 🛠️ Technologies Used

### Frontend
| Technology | Purpose |
|------------|---------|
| HTML5 | Structure |
| CSS3 | Styling & Animations |
| JavaScript | Interactivity |
| Font Awesome | Icons |
| Google Fonts | Typography (Inter, Poppins) |

### Features
- **CSS Variables** - Easy theming
- **Flexbox & Grid** - Modern layouts
- **Intersection Observer** - Scroll animations
- **Local Storage** - Theme preference

---

## 🚀 Installation

### Option 1: Direct Use
```bash
# Download the files
# Open index.html in your browser
```

### Option 2: GitHub Pages
```bash
# Create a new repository
# Upload all files
# Go to Settings > Pages > Enable
# Your site will be live at: https://username.github.io/repo-name
```

### Option 3: Netlify
```bash
# Go to netlify.com
# Drag and drop the portfolio folder
# Get instant live URL
```

### Option 4: Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

---

## 🎨 Customization

### Change Colors
Edit CSS variables in `styles.css`:

```css
:root {
    --primary: #0d9488;        /* Main color */
    --primary-light: #14b8a6;  /* Light variant */
    --primary-dark: #0f766e;   /* Dark variant */
    --secondary: #6366f1;       /* Accent color */
    --accent: #f59e0b;          /* Highlight color */
}
```

### Change Personal Info
Edit `index.html`:

```html
<!-- Update name -->
<span class="logo-text">Your Name</span>

<!-- Update title -->
<title>Your Name | Your Title</title>

<!-- Update contact info -->
<a href="mailto:your@email.com">your@email.com</a>
```

### Add Profile Image
Replace the placeholder in `index.html`:

```html
<div class="profile-placeholder">
    <img src="your-image.jpg" alt="Your Name">
</div>
```

### Update Timeline
Add new timeline items:

```html
<div class="timeline-item">
    <div class="timeline-marker"><span>Year</span></div>
    <div class="timeline-content">
        <div class="timeline-card">
            <span class="timeline-year">Date</span>
            <h3>Job Title</h3>
            <h4>Company</h4>
            <p>Description</p>
        </div>
    </div>
</div>
```

### Add New Project
```html
<div class="project-card">
    <div class="project-image">
        <div class="project-icon">
            <i class="fas fa-icon"></i>
        </div>
    </div>
    <div class="project-content">
        <h3>Project Name</h3>
        <p>Project description...</p>
        <div class="project-tags">
            <span>Tag1</span>
            <span>Tag2</span>
        </div>
    </div>
</div>
```

---

## 🎭 Animations & Effects

### Included Animations:

| Animation | Location | Description |
|-----------|----------|-------------|
| `fadeInUp` | All sections | Elements fade in from bottom |
| `float` | Hero cards | Floating effect |
| `pulse` | Current job | Pulsing highlight |
| `spin` | Profile ring | Rotating border |
| `bounce` | Scroll indicator | Bouncing arrow |
| `shimmer` | Skill bars | Light shimmer effect |
| `ripple` | Buttons | Click ripple effect |
| `morphShape` | Background shapes | Morphing blobs |

### JavaScript Effects:

```javascript
// Typing Effect
const roles = ['Data Analyst', 'AI Engineer', 'BI Developer'];

// Counter Animation
animateCounter(element, targetNumber);

// Parallax Effect
initParallaxEffect();

// Custom Cursor
initCursorEffects();
```

---

## 📱 Responsive Breakpoints

| Device | Breakpoint |
|--------|------------|
| Desktop | > 1024px |
| Tablet | 768px - 1024px |
| Mobile Large | 480px - 768px |
| Mobile Small | < 480px |

---

## 🔗 Links

| Platform | URL |
|----------|-----|
| 📧 Email | saraeldamarany@gmail.com |
| 💼 LinkedIn | [linkedin.com/in/saraeldamarany](https://www.linkedin.com/in/saraeldamarany/) |
| 💻 GitHub | [github.com/SaraEldamarany](https://github.com/SaraEldamarany) |
| 🛒 Khamsat | [khamsat.com/user/saraeldamarany](https://khamsat.com/user/saraeldamarany) |
| 🚀 Mostaql | [mostaql.com/u/Sara_eldamarany](https://mostaql.com/u/Sara_eldamarany) |

---

## 📞 Contact

**Sara Eldamarany**
- 📧 Email: saraeldamarany@gmail.com
- 🌍 Location: Egypt



---

<div align="center">

**⭐ If you like this portfolio, give it a star! ⭐**

Made with ❤️ by Sara Eldamarany

</div>
