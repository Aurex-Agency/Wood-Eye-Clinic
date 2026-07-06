import Link from "next/link";
import Logo from "@/components/Logo";
import { clinic, services } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-24 bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo light />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
            {clinic.tagline}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-sky">Visit Us</h3>
          <address className="mt-4 text-sm not-italic leading-relaxed text-white/80">
            {clinic.address.street}
            <br />
            {clinic.address.city}, {clinic.address.state} {clinic.address.zip}
          </address>
          <a
            href={clinic.phoneHref}
            className="mt-3 inline-block text-sm font-semibold text-sky transition-colors hover:text-white"
          >
            {clinic.phone}
          </a>
          <br />
          <a
            href={clinic.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-sm text-white/70 underline underline-offset-4 transition-colors hover:text-white"
          >
            Get directions
          </a>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-sky">Office Hours</h3>
          <ul className="mt-4 space-y-1.5 text-sm text-white/80">
            {clinic.hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-6">
                <span>{h.day}</span>
                <span className={h.hours === "Closed" ? "text-white/50" : ""}>{h.hours}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-sky">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>
              <Link href="/about" className="transition-colors hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/about/meet-the-doctors" className="transition-colors hover:text-white">
                Meet the Optometrists
              </Link>
            </li>
            <li>
              <Link href="/about/meet-the-team" className="transition-colors hover:text-white">
                Meet the Team
              </Link>
            </li>
            <li>
              <Link href="/services" className="transition-colors hover:text-white">
                Eyecare Services
              </Link>
            </li>
            <li>
              <Link href="/insurance" className="transition-colors hover:text-white">
                Insurance & Payment
              </Link>
            </li>
            <li>
              <Link href="/contact" className="transition-colors hover:text-white">
                Contact & FAQs
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-white/50 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Wood Eye Clinic. All rights reserved.
          </p>
          <p className="flex flex-wrap justify-center gap-x-3 gap-y-1">
            {services.slice(0, 4).map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="transition-colors hover:text-white"
              >
                {s.short}
              </Link>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
}
