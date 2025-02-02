import type { Metadata } from "next";
import { Geist, Geist_Mono, Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clément MOURGUE - Porftolio",
  description: "Student at IUT de Bayonne et du Pays Basque",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full w-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${rubik.variable} font-sans h-full w-full antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
