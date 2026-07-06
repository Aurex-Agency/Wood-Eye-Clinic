import Reveal from "@/components/Reveal";
import { clinic } from "@/lib/site";

const mapQuery = encodeURIComponent(
  `${clinic.name}, ${clinic.address.street}, ${clinic.address.city}, ${clinic.address.state} ${clinic.address.zip}`
);
const mapEmbed = `https://maps.google.com/maps?q=${mapQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

/*
 * Location band shown on every page just above the footer. A glass info panel
 * beside an embedded Google map (no API key required via the ?output=embed
 * endpoint).
 */
export default function MapSection() {
  return (
    <section className="px-6 pb-20 pt-4">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="glass-surface glass-tint flex h-full flex-col justify-center rounded-4xl p-8 sm:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-brand">Visit Us</p>
              <h2 className="mt-3 font-display text-2xl font-bold text-ink sm:text-3xl">
                Find us in downtown Pontotoc
              </h2>
              <p className="mt-3 leading-relaxed text-ink/70">
                You will find us on Main Street with convenient parking, our
                optical boutique, and an onsite lab all under one roof.
              </p>
              <address className="mt-6 text-lg font-semibold not-italic text-ink">
                {clinic.address.street}
                <br />
                {clinic.address.city}, {clinic.address.state} {clinic.address.zip}
              </address>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={clinic.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-brand px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-dark"
                >
                  Get Directions
                </a>
                <a
                  href={clinic.phoneHref}
                  className="glass-btn rounded-full px-6 py-3 text-sm font-bold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:text-brand"
                >
                  {clinic.phone}
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="glass-surface h-full overflow-hidden rounded-4xl p-1.5 shadow-xl">
              <iframe
                title={`Map to ${clinic.name}`}
                src={mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[22rem] w-full rounded-[1.6rem] border-0"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
