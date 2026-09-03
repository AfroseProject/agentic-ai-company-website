import type { Metadata } from "next";
import Script from "next/script";
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

const siteTitle = "Enterprise Agentic AI | Build Your AI Workforce";
const siteDescription = "From AI strategy to production-grade agentic automation. We design, build, secure and operate AI agents that turn complex business processes into intelligent operations.";

export const metadata: Metadata = {
  metadataBase: new URL("https://kaniniai.com"),
  title: {
    default: siteTitle,
    template: "%s | Enterprise Agentic AI",
  },
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "https://kaniniai.com",
    siteName: "Enterprise Agentic AI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://kaniniai.com/#organization",
      "name": "Enterprise Agentic AI",
      "url": "https://kaniniai.com",
    },
    {
      "@type": "WebSite",
      "@id": "https://kaniniai.com/#website",
      "url": "https://kaniniai.com",
      "name": "Enterprise Agentic AI",
      "description": siteDescription,
      "publisher": {
        "@id": "https://kaniniai.com/#organization"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <Script
          src="https://spatial-movie-purchase-facial.trycloudflare.com/sdk.js"
          data-visitoriq-key="viq_site_j_WeRd0R6TaMxz8I7QzWFClx"
          data-visitoriq-endpoint="https://firm-exposure-extend-constitutes.trycloudflare.com/api/ingest"
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  );
}
