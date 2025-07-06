# Arctic (Pvt) Ltd - Company Website

## Overview

This is a corporate website for Arctic (Pvt) Ltd, a Sri Lankan precision cooling solutions company established in 1987. The website serves as a digital presence showcasing their services, brands, projects, and contact information. It's built as a single-page application with multiple sections and smooth scrolling navigation.

## System Architecture

### Frontend Architecture
- **Type**: Static Single Page Application (SPA)
- **Structure**: Traditional HTML/CSS/JavaScript approach
- **Layout**: Responsive design with mobile-first approach
- **Navigation**: Smooth scrolling with fixed header navigation
- **Styling**: Custom CSS with CSS variables for consistent theming

### Key Design Decisions
- **Static Site**: Chosen for simplicity, fast loading, and easy hosting
- **Vanilla JavaScript**: Used instead of frameworks for lightweight implementation
- **CSS Variables**: Implemented for consistent theming and easy maintenance
- **Mobile-First Design**: Responsive layout prioritizing mobile experience

## Key Components

### 1. Navigation System
- Fixed header with brand logo and navigation menu
- Mobile hamburger menu with toggle functionality
- Smooth scrolling between sections
- Dynamic background opacity change on scroll

### 2. Hero Section
- Full-screen hero with background image
- Company tagline and statistics
- Call-to-action elements
- Overlay for better text readability

### 3. Content Sections
- About section with company history
- Services showcase
- Brand partnerships display
- Project portfolio
- Contact form with validation

### 4. Interactive Elements
- Mobile menu toggle
- Smooth scroll navigation
- Form validation
- Hover effects and transitions

## Data Flow

### Client-Side Flow
1. **Page Load**: HTML loads with CSS and JavaScript
2. **Navigation**: Click events trigger smooth scrolling
3. **Mobile Menu**: Toggle events show/hide mobile navigation
4. **Form Submission**: Client-side validation before submission
5. **Scroll Events**: Dynamic navbar styling based on scroll position

### Form Data Handling
- Client-side validation for form fields
- Form submission handling (implementation appears incomplete)
- Error messaging for invalid inputs

## External Dependencies

### CDN Resources
- **Google Fonts**: Inter font family for typography
- **Font Awesome**: Icon library for UI elements
- **Pixabay**: External image hosting for background images

### Third-Party Services
- **Image Hosting**: Pixabay for hero background images
- **Font Delivery**: Google Fonts CDN
- **Icon Library**: Font Awesome CDN

## Deployment Strategy

### Current Setup
- **Hosting**: Designed for static file hosting
- **Assets**: External CDN dependencies
- **Deployment**: Simple file upload to web server

### Recommended Hosting Options
- Static hosting services (Netlify, Vercel, GitHub Pages)
- Traditional web hosting with HTML/CSS/JS support
- CDN-based hosting for global distribution

### Performance Considerations
- Preconnect links for Google Fonts optimization
- External image optimization needed
- CSS and JavaScript minification recommended for production

## Technical Stack

### Frontend Technologies
- **HTML5**: Semantic markup with proper meta tags
- **CSS3**: Modern CSS with custom properties and flexbox
- **Vanilla JavaScript**: DOM manipulation and event handling
- **Responsive Design**: Mobile-first approach with breakpoints

### Code Organization
- **Separation of Concerns**: HTML structure, CSS styling, JavaScript behavior
- **Modular CSS**: Organized with sections and consistent naming
- **Event-Driven JavaScript**: Clean event handling for interactions

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

Changelog:
- July 06, 2025. Initial setup