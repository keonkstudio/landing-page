import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const space = Space_Grotesk({
  variable: "--font-space-grostesk",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Keonk Studio",
  description: "Keonk Studio adalah Komunitas Roblog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${space.variable} font-space antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
