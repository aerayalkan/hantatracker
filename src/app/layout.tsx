import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0f172a',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://hantatracker.com'),
  title: {
    default: "HantaTracker - Live Global Hantavirus Outbreak Map & Statistics",
    template: "%s | HantaTracker"
  },
  description: "Real-time tracking of global hantavirus outbreaks. Live map, statistics, and updates from WHO, CDC, ECDC, and health authorities worldwide. Monitor Hantavirus Pulmonary Syndrome (HPS) and Hemorrhagic Fever with Renal Syndrome (HFRS) cases.",
  keywords: [
    "hantavirus",
    "hantavirus outbreak",
    "hantavirus map",
    "hantavirus tracker",
    "hantavirus cases",
    "HPS",
    "hantavirus pulmonary syndrome",
    "HFRS",
    "hemorrhagic fever renal syndrome",
    "rodent disease",
    "disease outbreak",
    "epidemic tracker",
    "WHO hantavirus",
    "CDC hantavirus",
    "Andes virus",
    "Sin Nombre virus",
    "Puumala virus",
    "Hantaan virus"
  ],
  authors: [{ name: "HantaTracker Team" }],
  creator: "HantaTracker",
  publisher: "HantaTracker",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hantatracker.com',
    siteName: 'HantaTracker',
    title: 'HantaTracker - Live Global Hantavirus Outbreak Map',
    description: 'Real-time tracking of global hantavirus outbreaks with interactive map and statistics from official health authorities.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'HantaTracker - Global Hantavirus Outbreak Monitor',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HantaTracker - Live Hantavirus Outbreak Tracker',
    description: 'Real-time global hantavirus outbreak monitoring with live map and statistics.',
    images: ['/og-image.png'],
    creator: '@hantatracker',
  },
  alternates: {
    canonical: 'https://hantatracker.com',
  },
  category: 'Health',
  classification: 'Disease Surveillance',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Google AdSense - Replace ca-pub-XXXXXXXXXXXXXXXX with your AdSense Publisher ID */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        
        {/* Google Analytics - Replace G-XXXXXXXXXX with your GA4 Measurement ID */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </head>
      <body className="min-h-full bg-[#050816] text-slate-100 antialiased relative">
        <div className="aurora-bg" aria-hidden="true" />
        <div className="grid-pattern" aria-hidden="true" />
        <div className="noise-overlay" aria-hidden="true" />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
