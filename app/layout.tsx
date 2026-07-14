import type { Metadata, Viewport } from "next";
import { Figtree, Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MapSection from "@/components/MapSection";
import GlassFilter from "@/components/GlassFilter";
import { clinic, doctors, siteUrl } from "@/lib/site";
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
  metadataBase: new URL(siteUrl),
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
  alternates: { canonical: "./" },
  openGraph: {
    type: "website",
    siteName: "Wood Eye Clinic",
    locale: "en_US",
    url: siteUrl,
    title: "Wood Eye Clinic | Eye Doctors in Pontotoc, MS",
    description:
      "Comprehensive, compassionate eye care for the families of Pontotoc and North Mississippi since 1981.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "The Wood Eye Clinic team in their optical boutique in Pontotoc, MS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wood Eye Clinic | Eye Doctors in Pontotoc, MS",
    description:
      "Comprehensive, compassionate eye care for the families of Pontotoc and North Mississippi since 1981.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0075a1",
};

/*
 * LocalBusiness structured data for the clinic — helps Google show the
 * practice in the local pack and knowledge panel with hours, phone, and
 * doctors. Rendered once, site-wide.
 */
const clinicSchema = {
  "@context": "https://schema.org",
  "@type": ["MedicalClinic", "Optician"],
  "@id": `${siteUrl}/#clinic`,
  name: clinic.name,
  description:
    "Family eye clinic in downtown Pontotoc, Mississippi, providing comprehensive eye exams, contact lenses, vision therapy, eye disease management, and designer eyewear since 1981.",
  url: siteUrl,
  telephone: clinic.phone,
  image: `${siteUrl}/og.jpg`,
  logo: `${siteUrl}/logo.webp`,
  foundingDate: "1981-11",
  medicalSpecialty: "Optometric",
  address: {
    "@type": "PostalAddress",
    streetAddress: clinic.address.street,
    addressLocality: clinic.address.city,
    addressRegion: clinic.address.state,
    postalCode: clinic.address.zip,
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: clinic.geo.latitude,
    longitude: clinic.geo.longitude,
  },
  hasMap: clinic.mapsUrl,
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Wednesday", "Friday"], opens: "09:00", closes: "17:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Tuesday", opens: "09:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "09:00", closes: "12:00" },
  ],
  areaServed: [
    "Pontotoc MS",
    "Oxford MS",
    "New Albany MS",
    "Tupelo MS",
    "Ripley MS",
    "Saltillo MS",
    "North Mississippi",
  ].map((name) => ({ "@type": "City", name })),
  employee: doctors.map((doc) => ({
    "@type": "Person",
    name: doc.name,
    jobTitle: doc.role,
    url: `${siteUrl}/team/${doc.slug}`,
  })),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${body.variable} ${display.variable} min-h-screen font-sans`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }}
        />
        <div className="site-bg" aria-hidden="true" />
        <GlassFilter />
        <Header />
        <main>{children}</main>
        <MapSection />
        <Footer />
      </body>
    </html>
  );
}
