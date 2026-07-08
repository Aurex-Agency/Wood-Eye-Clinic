import Reveal from "@/components/Reveal";
import { clinic } from "@/lib/site";

const mapQuery = encodeURIComponent(
  `${clinic.name}, ${clinic.address.street}, ${clinic.address.city}, ${clinic.address.state} ${clinic.address.zip}`
);
const mapEmbed = `https://maps.google.com/maps?q=${mapQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

const todayHours = clinic.hours;

/*
 * Location band shown on every page just above the footer: a large embedded
 * Google map (no API key required via ?output=embed) with a floating glass
 * info card over it on desktop, stacked below it on mobile.
 */
export default function MapSection() {
  return (
    <section className="px-6 pb-20 pt-6">
      <div className="mx-auto max-w-6xl">
        <Reveal className="glass-surface mx-auto max-w-2xl rounded-[1.75rem] px-8 py-8 text-center sm:px-10 sm:py-9">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-brand">Visit Us</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Come see us in downtown Pontotoc
          </h2>
          <p className="mt-3 text-lg text-ink/70">
            On Main Street with easy parking, our optical boutique, and an onsite
            lab all under one roof.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-10">
          <div className="relative">
            {/* Map */}
            <div className="glass-surface overflow-hidden rounded-[2rem] p-1.5 shadow-2xl">
              <iframe
                title={`Map to ${clinic.name}`}
                src={mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block h-[24rem] w-full rounded-[1.65rem] border-0 lg:h-[32rem]"
                allowFullScreen
              />
            </div>

            {/* Floating info card (below the map on mobile, over it on desktop) */}
            <div className="mt-4 lg:absolute lg:inset-y-0 lg:left-6 lg:mt-0 lg:flex lg:w-[24rem] lg:items-center xl:left-10">
              <div className="glass-surface glass-strong rounded-3xl p-7 shadow-2xl sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand text-white shadow-lg">
                    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 21s-7-6.3-7-11a7 7 0 0 1 14 0c0 4.7-7 11-7 11Z" />
                      <circle cx="12" cy="10" r="2.5" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-display text-lg font-bold text-ink">{clinic.name}</p>
                    <p className="text-sm text-ink/60">Eye care since 1981</p>
                  </div>
                </div>

                <address className="mt-5 text-base font-semibold not-italic leading-relaxed text-ink">
                  {clinic.address.street}
                  <br />
                  {clinic.address.city}, {clinic.address.state} {clinic.address.zip}
                </address>

                <ul className="mt-5 space-y-1.5 border-t border-ink/10 pt-5 text-sm">
                  {todayHours.slice(0, 5).map((h) => (
                    <li key={h.day} className="flex items-center justify-between gap-4">
                      <span className="font-semibold text-ink/70">{h.day}</span>
                      <span className="text-brand-dark">{h.hours}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={clinic.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-dark"
                  >
                    Get Directions
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </a>
                  <a
                    href={clinic.phoneHref}
                    className="glass-btn rounded-full px-6 py-3 text-sm font-bold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:text-brand"
                  >
                    {clinic.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
