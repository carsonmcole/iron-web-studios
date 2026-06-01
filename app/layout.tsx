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
  metadataBase: new URL("https://ironwebstudios.com"),
  title: "Iron Web Studios | Professional Websites for Local Businesses",
  description:
    "Iron Web Studios builds fast, modern, and affordable websites for small businesses — barbers, plumbers, landscapers, HVAC, and more. Based in Birmingham, AL, serving businesses nationwide. From simple one-page sites to full AI-powered experiences.",
  keywords:
    "web design, small business website, local business website, Birmingham AL web design, web designer Birmingham Alabama, barber website, plumber website, landscaper website, HVAC website, affordable web design",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Iron Web Studios | Professional Websites for Local Businesses",
    description:
      "Fast, modern, affordable websites built for small businesses that need to stand out online. Based in Birmingham, AL — serving businesses everywhere.",
    type: "website",
    url: "https://ironwebstudios.com",
    siteName: "Iron Web Studios",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Iron Web Studios",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Iron Web Studios | Professional Websites for Local Businesses",
    description:
      "Fast, modern, affordable websites built for small businesses that need to stand out online.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://ironwebstudios.com/#business",
  name: "Iron Web Studios",
  description:
    "Web design and development studio building fast, modern, affordable websites for small and local businesses.",
  url: "https://ironwebstudios.com",
  email: "ccole@ironwebstudios.com",
  telephone: "+1-706-802-2534",
  image: "https://ironwebstudios.com/og-image.png",
  priceRange: "$499 - $2,499+",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Birmingham",
    addressRegion: "AL",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  knowsAbout: [
    "Web Design",
    "Web Development",
    "Search Engine Optimization",
    "Small Business Websites",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Website Packages",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Starter — One-Page Website" },
        price: "499",
        priceCurrency: "USD",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Professional — Multi-Page Website",
        },
        price: "999",
        priceCurrency: "USD",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Premium — AI-Powered Website",
        },
        price: "2499",
        priceCurrency: "USD",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
