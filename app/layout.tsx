import type { Metadata } from "next";
import { Inter, Playfair_Display, Great_Vibes } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  variable: "--font-playfair",
});

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin", "vietnamese"],
  variable: "--font-script-accent",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://saigonseniorcare.com"),
  title: "Saigon Senior Care | Vietnamese Senior Care in Houston, TX",
  description:
    "Vietnamese senior care for Greater Houston families — compassionate home care and small residential assisted living homes built around language, food, culture, and family. All families welcome.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Saigon Senior Care | Professional Care. Vietnamese Heart.",
    description:
      "Vietnamese home care and small residential senior living homes for Greater Houston families. Request a free care consultation.",
    url: "https://saigonseniorcare.com",
    siteName: "Saigon Senior Care",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Saigon Senior Care | Professional Care. Vietnamese Heart.",
    description:
      "Vietnamese home care and small residential senior living homes for Greater Houston families.",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Saigon Senior Care",
  url: "https://saigonseniorcare.com",
  slogan: "Professional Care. Vietnamese Heart.",
  telephone: "+1-832-234-6888",
  email: "hello@saigonseniorcare.com",
  areaServed: "Greater Houston, Texas",
  knowsLanguage: ["en", "vi"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${greatVibes.variable}`}>
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Navigation />
        <main className="flex-1 pb-16 md:pb-0">{children}</main>
        <Footer />
        <ChatBot />
      </body>
    </html>
  );
}
