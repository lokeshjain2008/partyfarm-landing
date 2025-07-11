import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PartyFarm - Book Private Farmhouses for Memorable Events",
  description:
    "PartyFarm lets you book beautiful, private farmhouses for unforgettable parties and events. Chat with us on WhatsApp to get started!",
  keywords: [
    "farmhouse booking",
    "party venues",
    "private events",
    "memorable parties",
    "PartyFarm",
    "event planning",
    "WhatsApp booking",
  ],
  openGraph: {
    title: "PartyFarm - Book Private Farmhouses for Memorable Events",
    description:
      "Book beautiful, private farmhouses for unforgettable parties and events. Chat with us on WhatsApp to get started!",
    url: "https://partyfarm.in",
    siteName: "PartyFarm",
    images: [
      {
        url: "https://partyfarm.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "PartyFarm Hero Image",
      },
    ],
    locale: "en_US",
    type: "website",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
