import { Metadata } from 'next';

import '../styles/globals.css'

import React from "react";

import Stickynavbar from '../components/stickynavbar'
import Footer from '../components/footer'

export const metadata: Metadata = {
  title: 'TODO',
  description: 'TODO',
};

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
