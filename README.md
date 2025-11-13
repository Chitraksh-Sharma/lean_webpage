# Lena AI - Voice Agent Platform

A modern, responsive landing page for Lena AI, a multilingual voice agent platform that automates customer calls, appointments, and support interactions across 40+ languages.

## ✅ Production Ready - Voice Agent Integration

This frontend is now **production-ready** with environment-based configuration for the voice agent token server.

**What Changed:**
1. ✅ **Environment Variables** - Token server URL configurable via `.env` files
2. ✅ **Development Setup** - `.env.development` with `http://localhost:3000/get-token`
3. ✅ **Production Template** - `.env.production` ready for your deployed server
4. ✅ **Updated Component** - `VoiceAgentModal.tsx` uses `import.meta.env.VITE_TOKEN_SERVER_URL`

**Quick Start:**
```bash
npm install
npm run dev  # Automatically uses localhost:3000 token server
```

**Deploy to Production:**
1. Update `.env.production` with your token server URL
2. Run `npm run build`
3. Deploy `dist/` folder to Vercel/Netlify/etc.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Development](#development)
- [Build & Deployment](#build--deployment)
- [Components](#components)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## Overview

Lena AI is a sophisticated voice agent platform designed to handle real conversations naturally. The website showcases:

- **Multilingual Support**: Communication in 40+ languages with regional accents
- **Natural Conversations**: Context-aware interactions without rigid scripts
- **24/7 Availability**: Round-the-clock automated customer service
- **Enterprise-Ready**: SOC 2, GDPR & HIPAA compliant
- **Seamless Integrations**: Works with popular tools like Calendly, HubSpot, Twilio, Shopify, and more

## Features

### Core Features

- **Responsive Design**: Fully responsive across all device sizes
- **Modern UI/UX**: Built with shadcn/ui components and Tailwind CSS
- **Interactive Demos**: Live audio demonstrations of voice agent capabilities
- **Animated Components**: Smooth animations powered by Framer Motion
- **SEO Optimized**: Meta tags and structured data for search engines
- **Dark Mode Support**: Theme switching capabilities (currently set to light mode)

### Use Cases Showcased

1. **Customer Support**: Proactive issue resolution with human-like interactions
2. **Lead Generation**: Automated lead qualification and follow-up
3. **Loan Collection**: Respectful payment reminders and scheduling
4. **Last-mile Delivery**: Delivery confirmation and coordination
5. **Appointment Booking**: Automated scheduling and reminder system

### Key Sections

- Hero section with call demo
- Social proof and trust badges
- Interactive use case carousel
- Live conversation demonstrations
- Feature showcase with icons
- Integration partners display
- Statistics and metrics
- FAQ accordion
- Company information pages

## Tech Stack

### Core Technologies

- **React 18.3**: UI library
- **TypeScript 5.8**: Type-safe development
- **Vite 5.4**: Build tool and dev server
- **React Router DOM 6.30**: Client-side routing

### UI & Styling

- **Tailwind CSS 3.4**: Utility-first CSS framework
- **shadcn/ui**: High-quality React component library
- **Radix UI**: Unstyled, accessible component primitives
- **Framer Motion 12.23**: Animation library
- **Lucide React**: Icon library

### State Management & Data

- **TanStack Query 5.83**: Server state management
- **React Hook Form 7.61**: Form handling
- **Zod 3.25**: Schema validation

### Additional Libraries

- **Embla Carousel**: Touch-friendly carousel
- **date-fns**: Date utility library
- **class-variance-authority**: Component variant management
- **tailwind-merge**: Tailwind class merging
- **next-themes**: Theme management
- **Sonner**: Toast notifications

## Project Structure

```
Lisa_web_page/
├── src/
│   ├── assets/
│   │   ├── audio/              # Demo audio files
│   │   ├── charactors/         # Character illustrations
│   │   └── logos/              # Integration partner logos
│   ├── components/
│   │   ├── ui/                 # shadcn/ui components
│   │   ├── AgentDemoSection.tsx
│   │   ├── ConversationDemo.tsx
│   │   ├── CTASection.tsx
│   │   ├── FAQSection.tsx
│   │   ├── Features.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── IntegrationsSection.tsx
│   │   ├── LenaShowcase.tsx
│   │   ├── ParallaxSection.tsx
│   │   ├── SocialProof.tsx
│   │   ├── StatsSection.tsx
│   │   ├── TrustSection.tsx
│   │   ├── UseCases.tsx
│   │   └── WaveAnimation.tsx
│   ├── hooks/
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── lib/
│   │   └── seo.tsx              # SEO utilities
│   ├── pages/
│   │   ├── Agents.tsx
│   │   ├── Company.tsx
│   │   ├── Index.tsx
│   │   ├── NotFound.tsx
│   │   └── Pricing.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Installation

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager
- Token server running (for voice agent functionality)

### Setup

1. Clone the repository:
```bash
git clone https://github.com/Development-United/ask_lena_webpage.git
cd Lena_webpage
```

2. Install dependencies:
```bash
npm install
```

3. **Environment Configuration (✅ Already Done)**:

   The environment files are already configured:
   - `.env.development` - Uses `http://localhost:3000/get-token`
   - `.env.production` - Template for your production URL
   - `.env.example` - Documentation

   **No action needed for development!** It will automatically use localhost:3000.

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:8080`

### Running with Voice Agent (Full Stack)

To test the complete voice agent functionality locally:

**Terminal 1 - Token Server:**
```bash
cd ../lena_webpage_agent
python token_server.py
```

**Terminal 2 - AI Agent:**
```bash
cd ../lena_webpage_agent
python src/lena/agent.py start
```

**Terminal 3 - Frontend:**
```bash
cd Lena_webpage
npm run dev
```

Now click "Talk to Lena" button and test the voice conversation!

## Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Build for development (with source maps)
npm run build:dev

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

### Development Server

The dev server runs on port 8080 and supports:
- Hot Module Replacement (HMR)
- Fast Refresh for React components
- TypeScript type checking
- Path aliases (@/ → src/)

## Build & Deployment

### Prerequisites for Production

Before deploying, ensure you have:
1. ✅ Deployed your token server (Backend)
2. ✅ Token server URL (e.g., `https://lena-token.railway.app`)

### Production Deployment Steps

#### Step 1: Configure Production Environment

Update `.env.production` with your deployed token server URL:

```env
VITE_TOKEN_SERVER_URL=https://your-token-server-url.com/get-token
```

**Example:**
```env
VITE_TOKEN_SERVER_URL=https://lena-token.railway.app/get-token
```

#### Step 2: Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory with:
- Minified and optimized JavaScript
- CSS extracted and minified
- Assets with content hash for cache busting
- Environment variables baked in

#### Step 3: Deploy to Hosting Platform

**Option A: Vercel (Recommended) ⭐**
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy to production
vercel --prod
```

Vercel automatically:
- Detects Vite configuration
- Uses `.env.production` for build
- Provides HTTPS and CDN
- Offers automatic deployments from Git

**Option B: Netlify**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy to production
netlify deploy --prod --dir=dist
```

Configuration for Netlify (`netlify.toml`):
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

**Option C: Firebase Hosting**
```bash
# Install Firebase tools
npm install -g firebase-tools

# Login and initialize
firebase login
firebase init hosting

# Deploy
firebase deploy
```

**Option D: GitHub Pages**
```bash
# Add to package.json
"homepage": "https://yourusername.github.io/lena-webpage"

# Install gh-pages
npm install --save-dev gh-pages

# Add deploy script to package.json
"deploy": "npm run build && gh-pages -d dist"

# Deploy
npm run deploy
```

**Option E: Traditional Web Server (Apache/Nginx)**

Upload the `dist/` folder to your web server and configure:

**Nginx Configuration:**
```nginx
server {
    listen 80;
    server_name yourdomain.com;

    root /var/www/lena-webpage/dist;
    index index.html;

    # SPA routing - serve index.html for all routes
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

**Apache Configuration (.htaccess):**
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### Testing the Full Stack Locally

Before deploying, test the complete setup:

**Terminal 1 - Token Server (Backend):**
```bash
cd lena_webpage_agent
python token_server.py
# Server starts on http://localhost:3000
```

**Terminal 2 - AI Agent (Backend):**
```bash
cd lena_webpage_agent
python src/lena/agent.py start
# Agent connects to LiveKit
```

**Terminal 3 - Frontend:**
```bash
cd Lena_webpage
npm run dev
# Frontend starts on http://localhost:8080
```

**Test the Integration:**
1. Open `http://localhost:8080` in your browser
2. Click **"Talk to Lena"** button
3. Allow microphone permissions
4. Verify connection to token server in logs
5. Test voice conversation with Lena

### Deployment Checklist

**Before Deploying:**
- [ ] Token server deployed and running
- [ ] `.env.production` updated with token server URL
- [ ] AI agent running and connected to LiveKit
- [ ] Tested locally with all three components
- [ ] Production build tested (`npm run build && npm run preview`)

**After Deploying:**
- [ ] Frontend accessible via HTTPS
- [ ] "Talk to Lena" button connects successfully
- [ ] Voice conversation works end-to-end
- [ ] Check browser console for errors
- [ ] Test on mobile devices
- [ ] Monitor token server logs for requests

### Environment-Specific Behavior

| Environment | Token Server URL | Build Command | Auto-Reload |
|------------|------------------|---------------|-------------|
| Development | `http://localhost:3000/get-token` | `npm run dev` | ✅ Yes |
| Production | Your deployed URL | `npm run build` | ❌ No |
| Preview | Production settings | `npm run preview` | ❌ No |

### Troubleshooting Deployment

**Issue: "Connection Error" when clicking "Talk to Lena"**
- ✅ Verify token server URL in `.env.production` is correct
- ✅ Check token server is running and accessible
- ✅ Ensure CORS is enabled on token server (it is by default)
- ✅ Check browser console for specific error messages

**Issue: Token server URL still shows localhost in production**
- ✅ Rebuild the app: `npm run build`
- ✅ Verify `.env.production` exists and has correct URL
- ✅ Environment variables are baked at build time, not runtime

**Issue: 404 errors on page refresh**
- ✅ Configure your hosting platform for SPA routing (see examples above)
- ✅ All routes should serve `index.html`

## Components

### Page Components

- **Index**: Homepage with all main sections
- **Pricing**: Pricing tiers and plans
- **Company**: About the company and mission
- **Agents**: Agent templates and demos
- **NotFound**: 404 error page

### Feature Components

#### Hero
Main landing section with:
- Value proposition
- Phone number input with country selector
- Call-to-action button
- Key statistics display

#### UseCases
Interactive carousel showcasing:
- Customer Support
- Lead Generation
- Loan Collection
- Last-mile Delivery
- Appointment Booking

Each use case includes:
- Description and metrics
- Live audio demo
- Client brand logos

#### ConversationDemo
Real-time conversation simulation between customer and Lena AI with:
- Animated message bubbles
- Play/pause controls
- Smooth transitions

#### LenaShowcase
Feature grid highlighting:
- Natural Speech
- Contextual Intelligence
- Global Reach
- Lightning Fast responses
- Enterprise Security
- Omnichannel capabilities

#### IntegrationsSection
Display of integration partners:
- Calendly, Google Calendar, Google Meet, Zoom
- Google Drive, Gmail
- HubSpot, Twilio, Shopify, Odoo
- Custom API support

#### StatsSection
Animated statistics:
- 40+ Languages Supported
- 800ms Average Response Time
- 99.9% Uptime Guarantee
- 10M+ Conversations Handled

#### FAQSection
Expandable FAQ accordion with common questions

#### Footer
- Brand information
- Navigation links
- Social media links
- Copyright information

### UI Components

Built with shadcn/ui, includes:
- Buttons, Cards, Dialogs
- Forms, Inputs, Selects
- Dropdowns, Menus, Popovers
- Tooltips, Toasts, Alerts
- Accordions, Carousels, Tabs
- And many more...

## Configuration

### Environment Variables

The application uses environment variables to configure the token server URL for different environments.

#### Files Created (✅ Production Ready)

1. **`.env.development`** - Automatically used in development
   ```env
   VITE_TOKEN_SERVER_URL=http://localhost:3000/get-token
   ```

2. **`.env.production`** - Used when building for production
   ```env
   VITE_TOKEN_SERVER_URL=https://your-domain.com/get-token
   ```

3. **`.env.example`** - Template for documentation
   ```env
   VITE_TOKEN_SERVER_URL=http://localhost:3000/get-token
   ```

#### How It Works

The frontend automatically connects to the correct token server based on the environment:

- **Development**: Uses `http://localhost:3000/get-token` (local token server)
- **Production**: Uses the URL specified in `.env.production` (your deployed token server)

**Code Implementation** (in `VoiceAgentModal.tsx`):
```typescript
tokenServerUrl: import.meta.env.VITE_TOKEN_SERVER_URL || "http://localhost:3000/get-token"
```

This automatically switches between development and production configurations without code changes.

#### Voice Agent Integration

The **"Talk to Lena"** button in the header connects to:
- **Token Server**: Requests LiveKit access tokens
- **LiveKit**: Establishes WebRTC connection
- **AI Agent**: Real-time voice conversation with Gemini 2.0

**Modified Files:**
- ✅ `src/components/VoiceAgentModal.tsx` - Now uses environment variable for token server URL
- ✅ `.env.development` - Local development configuration
- ✅ `.env.production` - Production deployment configuration

### Tailwind CSS

Custom theme configuration in `tailwind.config.ts`:
- Color system with CSS variables
- Custom font family (Inter)
- Responsive breakpoints
- Animation keyframes

### TypeScript

Path aliases configured in `tsconfig.json`:
- `@/*` → `./src/*`

Compiler options:
- Relaxed strict mode for faster development
- Skip library checking

### Vite

Configuration in `vite.config.ts`:
- Port: 8080
- Path alias: @ → ./src
- React SWC for faster builds
- Component tagger for development

### SEO

SEO utilities in `src/lib/seo.tsx`:
- Dynamic page titles
- Meta descriptions
- Canonical URLs
- Open Graph tags

## Customization

### Branding

To customize for your brand:

1. Update meta tags in `index.html`
2. Replace logo assets in `src/assets/`
3. Modify color scheme in `src/index.css` (CSS variables)
4. Update company information in components

### Content

Main content files to edit:
- `src/components/Hero.tsx` - Hero section text
- `src/components/UseCases.tsx` - Use case data
- `src/components/FAQSection.tsx` - FAQ content
- `src/components/IntegrationsSection.tsx` - Integration partners
- `src/pages/Pricing.tsx` - Pricing information

### Styling

The project uses Tailwind CSS with custom theme:
- Colors: Edit CSS variables in `src/index.css`
- Fonts: Configure in `tailwind.config.ts`
- Components: Override styles in component files

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

Optimizations included:
- Code splitting with React Router
- Lazy loading of images
- Optimized assets with Vite
- Minimal bundle size
- Fast Refresh for development

## Accessibility

- Semantic HTML
- ARIA labels
- Keyboard navigation support
- Focus management
- Screen reader friendly

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style

- Use TypeScript for type safety
- Follow ESLint configuration
- Use functional components with hooks
- Keep components small and focused
- Write self-documenting code

## Troubleshooting

### Common Issues

**Port already in use:**
```bash
# Change port in vite.config.ts or kill the process
npx kill-port 8080
```

**Module not found:**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Build errors:**
```bash
# Clear Vite cache
rm -rf node_modules/.vite
npm run build
```

## Support

For support and questions:
- Create an issue in the repository
- Contact: [Your contact information]
- Documentation: [Your docs URL]

## License

This project is licensed under [Your License] - see the LICENSE file for details.

---

Built with ❤️ by Development United
