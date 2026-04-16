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
  title: "Iron Web Studios | Professional Websites for Local Businesses",
  description:
    "Iron Web Studios builds fast, modern, and affordable websites for small businesses — barbers, plumbers, landscapers, HVAC, and more. From simple one-page sites to full AI-powered experiences.",
  keywords:
    "web design, small business website, local business website, barber website, plumber website, landscaper website, HVAC website, affordable web design",
  openGraph: {
    title: "Iron Web Studios | Professional Websites for Local Businesses",
    description:
      "Fast, modern, affordable websites built for small businesses that need to stand out online.",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Iron Web Studios",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0b0f1a] text-[#e8eaf0]">
        {children}
      </body>
    </html>
  );
}
