import { Metadata } from 'next';

// import { Html, Head, Main, NextScript } from 'next/document'
import '../styles/globals.css'
// import type { AppProps } from 'next/app'
// import Layout from '../components/layout'

import React, { PropsWithChildren } from "react";

import Stickynavbar from '../components/stickynavbar'
// import Metadata from '../components/metadata'
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






// export default function Layout({ children } : PropsWithChildren) {
//   return (
//     <>
//       <Stickynavbar />
//       <Metadata />
//       <main className='px-4 my-10 prose mx-auto'>{children}</main>
//       <Footer />
//     </>
//   )
// }



// export default function App({ Component, pageProps }: AppProps) {
//   return (
//     <Layout>
//       <Component {...pageProps} />
//     </Layout>
//   )
// }




// export default function Document() {
//   return (
//     <Html lang="en">
//       <Head />
//       <body>
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   )
// }
