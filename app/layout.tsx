import type { Metadata } from "next";
import { Figtree, Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MapSection from "@/components/MapSection";
import GlassFilter from "@/components/GlassFilter";
import "./globals.css";

const body = Figtree({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Wood Eye Clinic | Eye Doctors in Pontotoc, MS",
    template: "%s | Wood Eye Clinic",
  },
  description:
    "Wood Eye Clinic has provided comprehensive, compassionate eye care to the families of Pontotoc and North Mississippi since 1981. Eye exams, contact lenses, vision therapy, eyewear, and more.",
  keywords: [
    "eye doctor Pontotoc MS",
    "optometrist Pontotoc",
    "eye exam North Mississippi",
    "Wood Eye Clinic",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${body.variable} ${display.variable} ambient min-h-screen font-sans`}>
        <GlassFilter />
        <Header />
        <main>{children}</main>
        <MapSection />
        <Footer />
      </body>
    </html>
  );
}
