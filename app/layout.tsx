import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Saigon Senior Care | Assisted Living in Houston, TX",
  description:
    "Saigon Senior Care offers warm, Vietnamese-focused assisted living in Houston, TX. We provide compassionate care, community, and comfort for your loved ones.",
  keywords:
    "assisted living Houston, Vietnamese senior care Houston, elder care Houston, Saigon Senior Care",
  openGraph: {
    title: "Saigon Senior Care | Assisted Living in Houston, TX",
    description:
      "Warm, Vietnamese-focused assisted living in Houston, TX. Schedule a tour today.",
    url: "https://www.saigonseniorcare.com",
    siteName: "Saigon Senior Care",
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
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatBot />
      </body>
    </html>
  );
}
