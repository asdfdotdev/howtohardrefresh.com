import { clsx } from 'clsx';
import type { Metadata } from 'next';
import { DM_Sans, Space_Grotesk, Space_Mono } from 'next/font/google';
import type { ReactNode } from 'react';
import { siteConfig } from '@/lib/config/site';
import '../styles/globals.css';
import { JsonLd } from '@/components/utility/JsonLd';

const headingFont = Space_Grotesk({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-heading',
  display: 'swap',
});

const bodyFont = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-body',
  display: 'swap',
});

const monoFont = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `More than F5 | ${siteConfig.name}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: `Welcome to ${siteConfig.name}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: '/social/how-to-hard-refresh.png',
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name}`,
    description: siteConfig.description,
    images: ['/social/how-to-hard-refresh.png'],
  },
  manifest: '/favicon/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: 'any' },
      { url: '/favicon/favicon-96x96.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon/favicon.ico',
    apple: '/favicon/apple-touch-icon.png',
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={clsx(headingFont.variable, bodyFont.variable, monoFont.variable, 'h-full text-text-main antialiased')}
    >
      <body className="flex min-h-full flex-col">
        {children}
        <JsonLd data={siteConfig.jsonld.default} />
      </body>
    </html>
  );
}
