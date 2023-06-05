import { Metadata } from 'next';

import '../styles/globals.css'

import React from "react";

import Stickynavbar from '../components/stickynavbar'
import Footer from '../components/footer'

export const metadata: Metadata = {
  title: {
    default: 'Lambert Theisen | Scientist, computational engineer, developer.',
    template: '%s | Lambert Theisen',
  },
  description: 'Scientist, computational engineer, developer.',
  keywords: ["research", "science", "portfolio", "personal webpage"],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: 'Lambert Theisen',
    description: 'Developer, writer, and creator.',
    url: 'https://thsn.dev',
    siteName: 'Lambert Theisen',
    images: [
      {
        url: '/favicon.ico',
        width: 650,
        height: 650,
      },
    ],
    locale: 'en-US',
    type: 'website',
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
      <body>
        <Stickynavbar />
        {/* <Metadata /> */}
        <main className='px-4 my-10 prose mx-auto'>{children}</main>
        <Footer />
      </body>
    </html>

  );
}
