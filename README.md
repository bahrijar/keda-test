# ERP Website Project - ReactJS Test for KeDA-Tech

## Project Overview

This project is a responsive landing page for an ERP (Enterprise Resource Planning) startup that offers inventory management, sales tracking, and profit analysis solutions. The website includes a hero section, about section, pricing plans, contact form, and login functionality.

## Technologies Used

### Next.js (App Router)
Next.js is a React framework that enables server-side rendering, static site generation, and API routes. The App Router is the newer routing system that provides more intuitive file-based routing.

**Why we use it:** Next.js provides better performance, SEO benefits, and a more organized project structure compared to plain React.

### Tailwind CSS
Tailwind CSS is a utility-first CSS framework that allows for rapid UI development through pre-defined classes.

**Why we use it:** Tailwind speeds up development by eliminating the need to write custom CSS and provides a consistent design system.

### shadcn/ui Components
shadcn/ui is a collection of reusable components built with Radix UI and Tailwind CSS.

**Why we use it:** These components provide accessible, customizable UI elements that save development time while maintaining high quality.

### Lucide React
Lucide React is a library of simple, consistent SVG icons.

**Why we use it:** These icons are lightweight, customizable, and provide a consistent visual language throughout the interface.

## Project Structure

\`\`\`
test-2/
├── app/
│   ├── layout.tsx       # Main layout wrapper
│   └── page.tsx         # Homepage that imports all sections
├── components/
│   ├── about.tsx        # About section
│   ├── contact.tsx      # Contact form and info
│   ├── footer.tsx       # Site footer
│   ├── hero.tsx         # Hero section
│   ├── login-modal.tsx  # Login popup
│   ├── navbar.tsx       # Navigation bar
│   └── pricing.tsx      # Pricing plans
├── public/              # Static assets
└── documentation.md     # This documentation file
\`\`\`

## Setup and Installation

1. Clone the repository
2. Install dependencies:
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`
3. Run the development server:
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Key Features

### Responsive Design
- The website is fully responsive and works well on mobile, tablet, and desktop devices
- Mobile navigation menu with toggle functionality
- Responsive grid layouts that adapt to different screen sizes

### Interactive Elements
- Login modal popup
- Pricing toggle between monthly and annual billing
- Contact form with validation
- Smooth scrolling navigation

### Membership Tiers
The website showcases three membership tiers:
1. **TIER 1 / Basic**
   - Record incoming and outgoing goods
   - Track daily profits

2. **TIER 2 / Business**
   - All Basic features
   - Sales analytics with charts
   - 24/7 support

3. **TIER 3 / Entrepreneur**
   - All Business features
   - Export data to Excel
   - AI revenue predictions

## Component Breakdown

### Navbar (`navbar.tsx`)
- Responsive navigation with mobile menu
- Login button that triggers the login modal
- Smooth scroll to page sections

### Hero Section (`hero.tsx`)
- Eye-catching gradient background
- Main value proposition
- Call-to-action buttons
- Decorative elements that match the design in the reference image

### About Section (`about.tsx`)
- Feature highlights with icons
- Brief description of the ERP solution
- Visual elements to enhance engagement

### Pricing Section (`pricing.tsx`)
- Toggle between monthly and annual billing
- Three pricing tiers with feature lists
- Highlighted recommended plan

### Contact Section (`contact.tsx`)
- Contact form with validation
- Business information and hours
- Visual elements to enhance engagement

### Login Modal (`login-modal.tsx`)
- Email and password fields
- Remember me checkbox
- Forgot password link
- Sign up link

### Footer (`footer.tsx`)
- Company information
- Quick links
- Feature links
- Newsletter signup
- Social media links
- Copyright and legal links

## Customization Options

### Colors
The primary colors used in this project are sky blue and dark blue gradients. You can customize these by modifying the Tailwind configuration or directly in the component classes.

### Content
All text content can be easily modified in each component file. Look for text strings and replace them with your own content.

### Images
Replace placeholder images with your own by adding them to the public directory and updating the image paths in the components.

### Features
You can add, remove, or modify features in the pricing plans by editing the `plans` array in the `pricing.tsx` file.

## Future Enhancements

Potential future enhancements for this project include:

1. Adding authentication with NextAuth.js or similar
2. Implementing a dashboard interface for logged-in users
3. Adding dark mode support
4. Creating additional pages like blog, features, etc.
5. Implementing internationalization for multiple languages

## Conclusion

This documentation provides an overview of the ERP startup website project, its technologies, structure, and features. The project is built with modern web technologies and follows best practices for performance, accessibility, and user experience.

## Unit Test

<img width="846" alt="Screenshot 2025-04-28 at 18 26 14" src="https://github.com/user-attachments/assets/6869403a-e1f1-4934-8cb0-08dfa1d54ea7" />

