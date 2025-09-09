import { Metadata } from 'next';

import '../styles/globals.css'

import React from "react";

import Stickynavbar from '../components/stickynavbar'
import Footer from '../components/footer'

export const metadata: Metadata = {
  title: {
    default: 'Dr. Lambert Theisen - Scientist, computational engineer, developer.',
    template: '%s - Lambert Theisen',
  },
  description: 'Scientist, computational engineer, developer.',
  keywords: ["research", "science", "portfolio", "personal webpage"],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
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
}

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Resource hints for better LCP */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      </head>
      <body className='dark:bg-neutral-800'>
        <Stickynavbar />
        {/* <Metadata /> */}
        <main className='px-4 my-10 prose dark:prose-invert mx-auto'>{children}</main>
        <Footer />
      </body>
    </html>

  );
}
