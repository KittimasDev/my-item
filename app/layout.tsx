import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import StyledComponentsRegistry from '@/styles/styled-components/registry'

import { Inter } from "next/font/google";
import Head from 'next/head'
const Header = dynamic(() => import('@/components/Header'), { ssr: false })

// import 'swiper/css';
// import 'swiper/css/bundle';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import './globals.css'
const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
        />

        <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
      </Head>
      <StyledComponentsRegistry>
        <body className={inter.className}>
          <Header />
          {children}
        </body>
      </StyledComponentsRegistry>
    </html>
  )
}
