import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProviderWrapper } from '@/components/providers/theme-provider-wrapper';
import { CookieBanner } from '@/components/cookie-banner';
import { Analytics } from '@/components/analytics';
import { StructuredData } from '@/components/structured-data';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Sudarsan Perumal V | Full Stack Developer Portfolio',
    template: '%s | Sudarsan Perumal V',
  },
  description:
    'Full Stack Developer with 2+ years of experience building modern, scalable web applications. Specialized in React, Next.js, TypeScript, and full-stack development.',
  keywords: [
    'Full Stack Developer',
    'React Developer',
    'Next.js Developer',
    'TypeScript',
    'Web Development',
    'Frontend Development',
    'Backend Development',
    'UI/UX',
  ],
  authors: [{ name: 'Sudarsan Perumal V' }],
  creator: 'Sudarsan Perumal V',
  publisher: 'Sudarsan Perumal V',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://yourportfolio.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourportfolio.com',
    title: 'Sudarsan Perumal V | Full Stack Developer Portfolio',
    description:
      'Full Stack Developer with 2+ years of experience building modern, scalable web applications. Specialized in React, Next.js, and TypeScript.',
    siteName: 'Sudarsan Perumal V Portfolio',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        {/* Google Analytics - Replace with your tracking ID */}
        {/* <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script> */}
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <StructuredData />
        <ThemeProviderWrapper>
          {children}
          <CookieBanner />
          <Analytics />
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}

