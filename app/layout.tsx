import type { Metadata } from "next";
import { BUSINESS } from "@/lib/site-data";
import { BackgroundGlow } from "@/components/shared";
import { Footer, Header, MobileStickyCTA, ScheduleProvider, TopBar } from "@/components/site-shell";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.url),
  title: {
    default: BUSINESS.name,
    template: `%s | ${BUSINESS.name}`,
  },
  description: BUSINESS.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BUSINESS.url,
    siteName: BUSINESS.name,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: BUSINESS.name,
    description: BUSINESS.description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "name": BUSINESS.name,
  "description": BUSINESS.description,
  "url": BUSINESS.url,
  "telephone": BUSINESS.phoneDisplay,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "79-17 Cooper Ave",
    "addressLocality": "Middle Village",
    "addressRegion": "NY",
    "postalCode": "11385",
    "addressCountry": "US"
  },
  "openingHours": "Mo-Fr 09:00-17:00",
  "image": `${BUSINESS.url}/logo-main.jpg`
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <main className="min-h-screen bg-white text-slate-900 selection:bg-accent selection:text-white">
          <BackgroundGlow />
          <ScheduleProvider>
            <TopBar />
            <Header />
            {children}
            <Footer />
            <MobileStickyCTA />
          </ScheduleProvider>
        </main>
      </body>
    </html>
  );
}
