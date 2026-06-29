import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Lora } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const lora = Lora({
  variable: "--font-tagline",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["italic"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const nav = Inter({
  variable: "--font-nav",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Solregn Therapy",
  description:
    "A steady space to think, feel, and make sense of things. Online therapy for emotional regulation, clarity, and resilience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${lora.variable} ${inter.variable} ${nav.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}