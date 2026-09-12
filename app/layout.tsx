import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

const display = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

const title = "Mahian Arab Nihal — Brand Designer & Clothing Video Ads Specialist";
const description =
  "Brand Designer (Pro) crafting bold brand identities, high-converting clothing video ads, and modern visual assets powered by creative strategy and AI tools.";

export const metadata: Metadata = {
  metadataBase: new URL("https://nihal-portfolio.vercel.app"),
  title,
  description,
  keywords: [
    "Brand Designer",
    "Graphics Designer",
    "Clothing Video Ads",
    "Visual Identity",
    "Mahian Arab Nihal"
  ],
  openGraph: {
    title,
    description,
    type: "website",
    siteName: "Nihal — Brand Designer"
  },
  twitter: {
    card: "summary_large_image",
    title,
    description
  },
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="bg-ink text-bone font-body antialiased">
        <SmoothScroll>
          <CustomCursor />
          <div className="noise-overlay" aria-hidden="true" />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
