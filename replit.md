# Muiez Arif Portfolio

## Overview

This is a personal portfolio website for Muiez Arif, a Senior Software Engineer specializing in MERN Stack and React Native development. The site showcases professional experience, technical projects, and provides a contact form for potential clients or employers. The application features a modern, visually striking design with Three.js 3D animations and a dark theme aesthetic.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: Next.js 15 with Pages Router
- Uses the traditional `pages/` directory structure rather than the newer App Router
- TypeScript enabled for type safety
- React 19 for UI components

**Styling Approach**: CSS Modules + Tailwind CSS 4
- Primary styling through CSS Modules (`styles/Home.module.css`)
- Global styles in `styles/globals.css`
- Custom fonts loaded via Google Fonts (Orbitron, Exo 2)
- Font Awesome icons loaded via CDN in `_document.tsx`

**3D Graphics**: Three.js
- Animated geometric shapes as background decoration
- Canvas-based rendering with transparency
- Dynamic loading to avoid SSR issues (`import('three')`)

**Page Structure**:
- `pages/index.tsx` - Home page with hero section, skills, and contact form
- `pages/portfolio.tsx` - Project showcase
- `pages/experience.tsx` - Work history timeline
- `components/Navbar.tsx` - Shared navigation component

### Backend Architecture

**API Routes**: Next.js API Routes (`pages/api/`)
- `api/contact.ts` - Contact form handler (currently logs data, ready for email service integration)
- `api/hello.ts` - Default template endpoint

**Form Handling**: Client-side state management with React hooks
- Form validation on both client and server
- Prepared for email service integration (SendGrid, Nodemailer, AWS SES, or Resend)

### Design Decisions

**Why Pages Router over App Router**: The project uses the more established Pages Router pattern, which is simpler for static/portfolio sites and has broader ecosystem compatibility.

**Why CSS Modules**: Provides scoped styling without additional build configuration, works well with Next.js out of the box, and allows for complex custom animations that would be verbose in Tailwind alone.

**Why Three.js directly**: Used directly rather than through React Three Fiber for simpler integration with decorative background animations that don't require complex interactivity.

## External Dependencies

### Core Dependencies
- **Next.js 15**: React framework for server-side rendering and static generation
- **React 19**: UI library
- **Three.js 0.178**: 3D graphics library for animated background
- **Tailwind CSS 4**: Utility-first CSS framework

### Development Dependencies
- **TypeScript 5.8**: Type checking
- **ESLint**: Code linting with Next.js configuration

### CDN Resources
- **Font Awesome 6**: Icon library loaded via CDN
- **Google Fonts**: Orbitron and Exo 2 font families

### Prepared Integrations (Not Yet Configured)
- Email services for contact form (SendGrid, Nodemailer, AWS SES, or Resend)
- Stripe integration experience mentioned in resume content

### Runtime Configuration
- Development server runs on port 5000
- Configured for Replit environment with `allowedDevOrigins` handling