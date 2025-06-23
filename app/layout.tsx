import type { Metadata } from "next";
import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/navbar"; // Corrected path if it was wrong
import GoogleTranslateWidget from "@/app/components/google-translate-widget";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Megaman Nova",
  description: "A non-profit project by The Red Soda Team.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.JSX.Element {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-gray-100`}>
        {/* Sticky Background Video */}
        <div className="fixed inset-0 z-[-1] overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/background.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <Navbar /> {/* Navbar remains sticky at the top */}
        <main className="relative z-10 min-h-screen">{children}</main>{" "}
        {/* Main content directly follows Navbar */}
        <GoogleTranslateWidget />
      </body>
    </html>
  );
}
