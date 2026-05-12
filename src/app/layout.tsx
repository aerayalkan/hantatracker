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
    default: "Hantavirus Tracker 2026 - Live Global Outbreak Map & Real-Time Cases",
    template: "%s | HantaTracker - Hantavirus Monitoring"
  },
  description: "Track hantavirus outbreaks worldwide in real-time. Live interactive map showing current cases, deaths, and active outbreaks. Official data from WHO, CDC, ECDC. Monitor Hantavirus Pulmonary Syndrome (HPS), HFRS, Andes virus, Sin Nombre virus cases globally. Updated every 5 minutes.",
  keywords: [
    "hantavirus",
    "hantavirus 2026",
    "hantavirus outbreak",
    "hantavirus outbreak 2026",
    "hantavirus map",
    "hantavirus tracker",
    "hantavirus cases",
    "hantavirus cases today",
    "hantavirus news",
    "hantavirus update",
    "current hantavirus outbreaks",
    "hantavirus live map",
    "HPS",
    "hantavirus pulmonary syndrome",
    "HFRS",
    "hemorrhagic fever renal syndrome",
    "rodent disease",
    "rodent borne disease",
    "mouse virus",
    "rat virus disease",
    "disease outbreak",
    "disease outbreak tracker",
    "epidemic tracker",
    "pandemic tracker",
    "WHO hantavirus",
    "CDC hantavirus",
    "ECDC hantavirus",
    "Andes virus",
    "Andes virus outbreak",
    "Sin Nombre virus",
    "Puumala virus",
    "Hantaan virus",
    "Seoul virus",
    "Dobrava virus",
    "hantavirus symptoms",
    "hantavirus prevention",
    "hantavirus treatment",
    "hantavirus transmission",
    "hantavirus death rate",
    "hantavirus mortality",
    "hantavirus statistics",
    "global health surveillance",
    "infectious disease tracking",
    "zoonotic disease",
    "viral hemorrhagic fever",
    "hantavirus Argentina",
    "hantavirus Chile",
    "hantavirus Europe",
    "hantavirus Asia",
    "hantavirus cruise ship",
    "MV Hondius hantavirus"
  ],
  authors: [{ name: "HantaTracker Team" }],
  creator: "HantaTracker",
  publisher: "HantaTracker",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
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
    title: 'Hantavirus Tracker 2026 - Live Global Outbreak Map',
    description: 'Real-time hantavirus outbreak tracking with interactive world map. Monitor current cases, deaths, and outbreaks from WHO, CDC, ECDC data. Updated every 5 minutes.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'HantaTracker - Global Hantavirus Outbreak Map 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hantavirus Tracker 2026 - Live Outbreak Map',
    description: 'Track hantavirus outbreaks worldwide in real-time. Live map, current cases, official WHO/CDC data.',
    images: ['/og-image.png'],
    creator: '@hantatracker',
    site: '@hantatracker',
  },
  alternates: {
    canonical: 'https://hantatracker.com',
    languages: {
      'en-US': 'https://hantatracker.com',
      'es': 'https://hantatracker.com',
      'de': 'https://hantatracker.com',
      'fr': 'https://hantatracker.com',
      'pt': 'https://hantatracker.com',
      'zh': 'https://hantatracker.com',
    },
  },
  category: 'Health',
  classification: 'Disease Surveillance',
  verification: {
    google: 'google1cc2b42ada015d38',
    yandex: 'your-yandex-verification-code',
  },
  other: {
    'msvalidate.01': 'your-bing-verification-code',
    'theme-color': '#0f172a',
    'color-scheme': 'dark',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'format-detection': 'telephone=no',
  },
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
        
        {/* JSON-LD Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://hantatracker.com/#website",
                  "url": "https://hantatracker.com",
                  "name": "HantaTracker",
                  "description": "Real-time global hantavirus outbreak tracking and monitoring",
                  "publisher": {
                    "@id": "https://hantatracker.com/#organization"
                  },
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": {
                      "@type": "EntryPoint",
                      "urlTemplate": "https://hantatracker.com/?search={search_term_string}"
                    },
                    "query-input": "required name=search_term_string"
                  },
                  "inLanguage": "en-US"
                },
                {
                  "@type": "Organization",
                  "@id": "https://hantatracker.com/#organization",
                  "name": "HantaTracker",
                  "url": "https://hantatracker.com",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://hantatracker.com/logo.png",
                    "width": 512,
                    "height": 512
                  },
                  "sameAs": [
                    "https://twitter.com/hantatracker"
                  ],
                  "description": "Global hantavirus outbreak surveillance and tracking platform providing real-time data from WHO, CDC, and ECDC"
                },
                {
                  "@type": "MedicalWebPage",
                  "@id": "https://hantatracker.com/#webpage",
                  "url": "https://hantatracker.com",
                  "name": "Hantavirus Tracker 2026 - Live Global Outbreak Map & Real-Time Cases",
                  "isPartOf": {
                    "@id": "https://hantatracker.com/#website"
                  },
                  "about": {
                    "@type": "MedicalCondition",
                    "name": "Hantavirus infection",
                    "alternateName": ["Hantavirus Pulmonary Syndrome", "HPS", "Hemorrhagic Fever with Renal Syndrome", "HFRS"],
                    "description": "Hantavirus is a viral infection spread by rodents that can cause severe respiratory illness (HPS) or kidney disease (HFRS)"
                  },
                  "description": "Track hantavirus outbreaks worldwide in real-time. Live interactive map showing current cases, deaths, and active outbreaks from WHO, CDC, ECDC.",
                  "primaryImageOfPage": {
                    "@type": "ImageObject",
                    "url": "https://hantatracker.com/og-image.png"
                  },
                  "datePublished": "2026-01-01",
                  "dateModified": new Date().toISOString(),
                  "inLanguage": "en-US",
                  "specialty": "Infectious Disease",
                  "medicalAudience": {
                    "@type": "MedicalAudience",
                    "audienceType": "Public"
                  }
                },
                {
                  "@type": "Dataset",
                  "name": "Global Hantavirus Outbreak Data",
                  "description": "Real-time dataset of global hantavirus outbreaks including cases, deaths, and geographic locations",
                  "url": "https://hantatracker.com",
                  "license": "https://creativecommons.org/licenses/by/4.0/",
                  "creator": {
                    "@id": "https://hantatracker.com/#organization"
                  },
                  "distribution": {
                    "@type": "DataDownload",
                    "encodingFormat": "application/json",
                    "contentUrl": "https://hantatracker.com/api/outbreaks"
                  },
                  "temporalCoverage": "2020/..",
                  "spatialCoverage": {
                    "@type": "Place",
                    "name": "Worldwide"
                  },
                  "variableMeasured": [
                    {
                      "@type": "PropertyValue",
                      "name": "Confirmed Cases",
                      "description": "Number of confirmed hantavirus cases"
                    },
                    {
                      "@type": "PropertyValue", 
                      "name": "Deaths",
                      "description": "Number of deaths from hantavirus"
                    }
                  ]
                },
                {
                  "@type": "FAQPage",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "What is hantavirus?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Hantavirus is a group of viruses spread mainly by rodents. It can cause Hantavirus Pulmonary Syndrome (HPS) with severe respiratory symptoms or Hemorrhagic Fever with Renal Syndrome (HFRS) affecting the kidneys."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How is hantavirus transmitted?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Hantavirus is primarily transmitted by inhaling air contaminated with rodent urine, droppings, or saliva. Direct contact with rodents or their nesting materials can also spread the virus. Person-to-person transmission is rare but has been documented with Andes virus."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What are the symptoms of hantavirus?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Early symptoms include fatigue, fever, and muscle aches. After 4-10 days, patients may develop coughing and shortness of breath as the lungs fill with fluid. HFRS symptoms include intense headaches, back pain, and kidney problems."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Where are hantavirus outbreaks most common?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Hantavirus outbreaks occur worldwide. HPS is most common in North and South America, while HFRS is prevalent in Europe and Asia. Argentina, Chile, and Patagonia region have seen notable Andes virus cases."
                      }
                    }
                  ]
                }
              ]
            })
          }}
        />
        
        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3356425558601409"
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
