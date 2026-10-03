import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
});

const lora = Lora({
  subsets: ["latin", "vietnamese"],
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: "Saigon Senior Care | In-Home Care & Senior Living Homes in Houston, TX",
  description:
    "Saigon Senior Care helps Houston families care for aging parents through compassionate in-home care and intimate residential senior living homes — with Vietnamese language, food, and culture at heart. All families welcome.",
  openGraph: {
    title: "Saigon Senior Care | Professional Care. Vietnamese Heart.",
    description:
      "In-home senior care and small residential senior living homes for Houston families. Request a free care consultation.",
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
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 pb-16 md:pb-0">{children}</main>
        <Footer />
        <ChatBot />
      </body>
    </html>
  );
}
