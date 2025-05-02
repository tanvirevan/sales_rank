import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";

{/* Fonts */}
import { Plus_Jakarta_Sans, Manrope, Questrial } from 'next/font/google';

export const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-plusjakarta',
  display: 'swap',
});

export const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-manrope',
  display: 'swap',
});

export const questrial = Questrial({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-questrial',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "SalesRank - Learn Sales Skills",
  description: "Master the art of sales with our comprehensive courses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.variable} ${manrope.variable} ${questrial.variable}`}>
        {/* Shade Image */}
        <Image
          src="/navbar/shade.png"
          alt="Shade"
          width={1500}
          height={1500}
          className="absolute top-0 left-0"
        />
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
