# Personal Portfolio Website

A modern, enterprise-level personal portfolio website built with Next.js, React, TypeScript, and Tailwind CSS. Designed to showcase professional work with a clean, premium UI similar to top-tier SaaS companies.

## 🚀 Features

- **Modern Design**: Clean, enterprise SaaS-style design inspired by companies like Stripe, Vercel, and Linear
- **Dark/Light Mode**: Full theme support with smooth transitions
- **Fully Responsive**: Optimized for all device sizes
- **Performance Optimized**: Lighthouse score 90+ with code splitting and image optimization
- **SEO Optimized**: Complete meta tags, OpenGraph, structured data, and sitemap
- **Accessibility**: WCAG compliant with ARIA labels, keyboard navigation, and screen reader support
- **Type Safe**: Full TypeScript implementation
- **Animations**: Smooth micro-interactions with Framer Motion
- **Form Validation**: Secure contact form with input sanitization
- **GDPR Compliant**: Cookie consent banner and privacy policy

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Theme**: next-themes
- **Icons**: Lucide React
- **Testing**: Jest + React Testing Library + Cypress

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd "Sudarsan Personal Portfolio"
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
.
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   ├── privacy/           # Privacy policy page
│   ├── globals.css        # Global styles
│   └── sitemap.ts         # Sitemap generation
├── components/            # React components
│   ├── sections/          # Page sections
│   ├── ui/                # Reusable UI components
│   ├── navigation.tsx     # Navigation component
│   ├── footer.tsx         # Footer component
│   └── ...
├── lib/                   # Utility functions
├── public/                # Static assets
├── __tests__/             # Unit tests
└── cypress/               # E2E tests
```

## 🎨 Customization

### Update Personal Information

1. **Name and Bio**: Update in `app/layout.tsx` (metadata) and `components/sections/hero.tsx`
2. **Social Links**: Update in `components/navigation.tsx`, `components/footer.tsx`, and `components/sections/hero.tsx`
3. **Projects**: Update in `components/sections/projects.tsx`
4. **Skills**: Update in `components/sections/about.tsx` and `components/sections/tech-stack.tsx`
5. **Case Studies**: Update in `components/sections/case-studies.tsx`
6. **Testimonials**: Update in `components/sections/testimonials.tsx`

### Update Colors and Theme

Edit `app/globals.css` to customize the color scheme:

```css
:root {
  --primary: 221.2 83.2% 53.3%;
  /* ... other colors */
}
```

### Update SEO

1. Update `app/layout.tsx` with your actual metadata
2. Update `app/sitemap.ts` with your domain
3. Update `components/structured-data.tsx` with your information
4. Update `public/robots.txt` with your domain

## 🧪 Testing

### Unit Tests
```bash
npm test
```

### E2E Tests
```bash
npm run test:e2e
# or
npm run test:e2e:open
```

## 📊 Performance

- **Lighthouse Score**: 90+
- **Code Splitting**: Automatic with Next.js
- **Image Optimization**: WebP format with lazy loading
- **Bundle Size**: Optimized with tree-shaking

## 🔒 Security

- Input sanitization to prevent XSS attacks
- Secure headers configured in `next.config.js`
- Form validation with Zod
- HTTPS best practices

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation support
- Screen reader optimized
- Focus indicators
- Proper ARIA labels
- Semantic HTML

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

For questions or inquiries, please use the contact form on the website or reach out via email.

---

Built with ❤️ using Next.js and TypeScript

