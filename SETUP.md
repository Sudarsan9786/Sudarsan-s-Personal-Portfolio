# Setup Guide

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Customization Checklist

Before deploying, make sure to update:

### 1. Personal Information
- [ ] Update name in `app/layout.tsx` (metadata)
- [ ] Update name in `components/sections/hero.tsx`
- [ ] Update bio in `components/sections/about.tsx`
- [ ] Update social links (GitHub, LinkedIn, Email) in:
  - `components/navigation.tsx`
  - `components/footer.tsx`
  - `components/sections/hero.tsx`

### 2. Projects
- [ ] Update projects in `components/sections/projects.tsx`
- [ ] Add project images to `public/` folder
- [ ] Update project URLs (live demo and GitHub)

### 3. Case Studies
- [ ] Update case studies in `components/sections/case-studies.tsx`
- [ ] Add real project data and results

### 4. Testimonials
- [ ] Update testimonials in `components/sections/testimonials.tsx`
- [ ] Add client avatars to `public/` folder

### 5. SEO & Analytics
- [ ] Update domain in `app/layout.tsx` (metadataBase)
- [ ] Update domain in `app/sitemap.ts`
- [ ] Update domain in `public/robots.txt`
- [ ] Update structured data in `components/structured-data.tsx`
- [ ] Add Google Analytics ID (uncomment in `app/layout.tsx`)

### 6. Contact Form
- [ ] Set up API endpoint for contact form
- [ ] Update form submission logic in `components/sections/contact.tsx`

### 7. Images & Assets
- [ ] Add favicon to `public/favicon.ico`
- [ ] Add apple-touch-icon to `public/apple-touch-icon.png`
- [ ] Add PWA icons (192x192, 512x512) to `public/`
- [ ] Add project images
- [ ] Add testimonial avatars

### 8. Theme Customization
- [ ] Update colors in `app/globals.css`
- [ ] Adjust brand colors to match your preference

## Building for Production

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Start production server:**
   ```bash
   npm start
   ```

## Testing

- **Unit tests:** `npm test`
- **E2E tests:** `npm run test:e2e`
- **Watch mode:** `npm run test:watch`

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms
- Follow Next.js deployment guides
- Ensure environment variables are set
- Configure custom domain if needed

## Performance Optimization

- Images are automatically optimized with Next.js Image component
- Code splitting is handled automatically
- Consider adding a CDN for static assets
- Enable compression on your hosting platform

## Security Checklist

- [ ] Update all placeholder URLs
- [ ] Set up proper CORS headers if using API
- [ ] Implement rate limiting for contact form
- [ ] Add reCAPTCHA to contact form (optional)
- [ ] Review and update security headers in `next.config.js`

## Accessibility

The site is built with accessibility in mind:
- ARIA labels on interactive elements
- Keyboard navigation support
- Screen reader optimized
- Focus indicators
- Semantic HTML

Test with:
- Screen readers (NVDA, JAWS, VoiceOver)
- Keyboard-only navigation
- Lighthouse accessibility audit

