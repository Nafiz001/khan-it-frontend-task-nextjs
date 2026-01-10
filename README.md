# Khan IT Frontend Task - Next.js

A modern, responsive digital marketing agency website built with Next.js 16 and Tailwind CSS v3.

## 🚀 Live Demo

**[View Live Site](https://khan-it-frontend-task-nextjs.vercel.app/)**

## 📋 Task 1 Requirements

✅ **Framework**: Next.js with TypeScript  
✅ **Styling**: Tailwind CSS v3  
✅ **Font**: Plus Jakarta Sans from Google Fonts  
✅ **Icons**: Material Symbols (Rounded & Outlined)  
✅ **Responsive Design**: Mobile-first approach with full responsiveness  
✅ **Dark Mode**: Complete dark mode support  

### Features Implemented

- **Navbar**: Responsive navigation with mobile hamburger menu
- **Hero Section**: Eye-catching hero with stat cards, video case study, track record, and testimonial
- **Services Section**: 8 service offerings with hover effects and color-coded icons
- **CTA Section**: Call-to-action with gradient background and decorative illustrations

## 🛠️ Tech Stack

- **Next.js**: 16.1.1 with Turbopack
- **React**: 19.2.3
- **TypeScript**: Latest
- **Tailwind CSS**: v3
- **Google Fonts**: Plus Jakarta Sans (400-800 weights)
- **Material Icons**: Rounded and Outlined variants

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🏗️ Project Structure

```
src/
├── app/
│   ├── globals.css       # Global styles and Tailwind directives
│   ├── layout.tsx        # Root layout with fonts and Material Icons
│   └── page.tsx          # Main landing page
└── components/
    ├── Navbar.tsx        # Responsive navigation component
    ├── Hero.tsx          # Hero section with cards
    ├── Services.tsx      # Services grid section
    └── CTA.tsx           # Call-to-action section
```

## 🎨 Customization

### Colors
Primary theme colors are defined in `tailwind.config.js`:
- Primary Blue: `#1D7BEF`
- Card variants: Purple, Blue, Orange

### Fonts
Plus Jakarta Sans is configured in `layout.tsx` with weights 400-800.

## 🚢 Deployment

Deployed on [Vercel Platform](https://vercel.com) using Vercel CLI.

```bash
# Deploy to Vercel
vercel
```

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px


