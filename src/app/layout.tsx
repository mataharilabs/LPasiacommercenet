import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  title: "AsiaCommerce – Southeast Asia Sourcing & Supply Chain Solution",
  description:
    "AsiaCommerce helps entrepreneurs and businesses source from China, procure, distribute, and promote products across Southeast Asia.",
  openGraph: {
    title: "AsiaCommerce – Southeast Asia Sourcing & Supply Chain",
    description:
      "End-to-end cross-border supply chain enabler for Southeast Asia.",
    url: "https://www.asiacommerce.net",
    siteName: "AsiaCommerce",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
