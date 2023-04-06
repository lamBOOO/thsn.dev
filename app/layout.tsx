import '../styles/globals.css'

import Stickynavbar from '../components/Stickynavbar'
import Footer from '../components/Footer'

export const metadata = {
  title: "Lambert Theisen – Scientist, computational engineer, developer.",
  description: "The personal website of Lambert Theisen containing his research, contact infos and a blog.",
  keywords: ["research", "science", "portfolio", "personal webpage"],
  icons: {
    icon: "/favicon.ico",
    // shortcut: '/shortcut-icon.png',
    // apple: '/apple-icon.png',
    // other: {
    //   rel: 'apple-touch-icon-precomposed',
    //   url: '/apple-touch-icon-precomposed.png',
    // },
  },
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
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
