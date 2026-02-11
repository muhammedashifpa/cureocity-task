import type { Metadata } from "next";
import { Geist, Geist_Mono, Manrope } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cureocity | Built-in with the Science of you",
  description: "The world’s most comprehensive and convenient healthcare system, all-in-one platform for achieving your personal health.",
  keywords: ["healthcare", "wellness", "physical fitness", "mental health", "diet", "nutrition"],
  authors: [{ name: "Cureocity" }],
  openGraph: {
    title: "Cureocity | Built-in with the Science of you",
    description: "The world’s most comprehensive and convenient healthcare system, all-in-one platform for achieving your personal health.",
    url: "https://cureocity.com",
    siteName: "Cureocity",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cureocity | Built-in with the Science of you",
    description: "The world’s most comprehensive and convenient healthcare system, all-in-one platform for achieving your personal health.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
