import type { NextConfig } from "next";

/*
 * 301/308 redirects from the OLD website's URLs (the .html pages Google has
 * indexed) to the matching pages on this new site, so old search results and
 * bookmarks land on the right place and their SEO value carries over.
 *
 * Add a line here for any additional legacy URL found in Google Search
 * Console. The catch-all at the end sends any other stray .html page to the
 * home page so nothing 404s.
 */
const legacyRedirects = [
  { source: "/home.html", destination: "/" },
  { source: "/index.html", destination: "/" },

  // About / team
  { source: "/about.html", destination: "/about" },
  { source: "/about-us.html", destination: "/about" },
  { source: "/meet-the-optometrist.html", destination: "/about/meet-the-doctors" },
  { source: "/meet-the-optometrists.html", destination: "/about/meet-the-doctors" },
  { source: "/meet-the-doctors.html", destination: "/about/meet-the-doctors" },
  { source: "/meet-the-staff.html", destination: "/about/meet-the-team" },
  { source: "/meet-the-team.html", destination: "/about/meet-the-team" },

  // Services hub + individual services
  { source: "/services.html", destination: "/services" },
  { source: "/eyecare-services.html", destination: "/services" },
  { source: "/eye-care-services.html", destination: "/services" },
  { source: "/eyecare-services/eye-exams.html", destination: "/services/comprehensive-eye-exams" },
  { source: "/eye-exams.html", destination: "/services/comprehensive-eye-exams" },
  { source: "/comprehensive-eye-exams.html", destination: "/services/comprehensive-eye-exams" },
  { source: "/childrens-eye-exams.html", destination: "/services/childrens-eye-exams" },
  { source: "/contact-lens-exams.html", destination: "/services/contact-lenses" },
  { source: "/contact-lenses.html", destination: "/services/contact-lenses" },
  { source: "/eyecare-services/contact-lenses.html", destination: "/services/contact-lenses" },
  { source: "/eyecare-services/glasses.html", destination: "/services/eyewear-and-glasses" },
  { source: "/glasses.html", destination: "/services/eyewear-and-glasses" },
  { source: "/eyewear.html", destination: "/services/eyewear-and-glasses" },
  { source: "/eyecare-services/sunglasses.html", destination: "/services/sunglasses" },
  { source: "/sunglasses.html", destination: "/services/sunglasses" },
  { source: "/vision-therapy.html", destination: "/services/vision-therapy" },
  { source: "/diabetic-eye-care.html", destination: "/services/diabetic-eye-care" },
  { source: "/eye-disease-management.html", destination: "/services/eye-disease-management" },
  { source: "/computer-vision.html", destination: "/services/computer-vision" },
  { source: "/lasik.html", destination: "/services/lasik-co-management" },
  { source: "/lasik-co-management.html", destination: "/services/lasik-co-management" },
  { source: "/optical-lab.html", destination: "/services/onsite-optical-lab" },

  // Other pages
  { source: "/contact.html", destination: "/contact" },
  { source: "/contact-us.html", destination: "/contact" },
  { source: "/appointment", destination: "/contact" },
  { source: "/appointment.html", destination: "/contact" },
  { source: "/appointments.html", destination: "/contact" },
  { source: "/insurance.html", destination: "/insurance" },
  { source: "/insurance-and-payment.html", destination: "/insurance" },
];

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Canonical host: force www.woodeyeclinic.com -> woodeyeclinic.com so the
      // site only ever serves the non-www version.
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.woodeyeclinic.com" }],
        destination: "https://woodeyeclinic.com/:path*",
        permanent: true,
      },
      ...legacyRedirects.map((r) => ({ ...r, permanent: true })),
      // Fallback: any other leftover legacy .html page -> home.
      { source: "/:path*.html", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
