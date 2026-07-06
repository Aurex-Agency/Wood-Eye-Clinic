import Link from "next/link";
import { clinic } from "@/lib/site";

/*
 * Image-forward hero: a floating glass content card on the left, a large
 * portrait visual on the right framed in glass with drifting glass accent
 * cards. Built to feel like premium "liquid glass" over a bright, airy scene.
 *
 * SWAP THE PHOTO: replace /public/hero.svg with the client's photograph
 * (e.g. drop in /public/hero.jpg) and update the `src` on the <img> below.
 * The container is a fixed 4:5 portrait with object-cover, so any well-lit
 * vertical photo of the clinic, doctors, or eyewear will drop straight in.
 */
export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-10 pt-10 sm:pt-14">
      {/* ambient glow orbs */}
      <div className="orb animate-drift left-[-6rem] top-[-4rem] h-72 w-72 bg-sky/60" aria-hidden="true" />
      <div
        className="orb animate-drift right-[-5rem] top-24 h-80 w-80 bg-brand/25"
        style={{ animationDelay: "-8s" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        {/* Content card */}
        <div className="glass-surface relative z-10 rounded-5xl p-8 sm:p-10 lg:p-12">
          <p className="glass-chip inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold text-brand-dark">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand" />
            </span>
            Welcoming new patients in Pontotoc, MS
          </p>

          <h1 className="mt-7 font-display text-5xl font-bold leading-[1.03] tracking-tight text-ink sm:text-6xl lg:text-[4.2rem]">
            Life is better
            <span className="block text-brand">in focus.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
            Since 1981, Wood Eye Clinic has helped generations of North
            Mississippi families protect one of their greatest gifts: their
            vision. Comprehensive eye care, designer eyewear, and a team that
            treats you like family.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-brand px-8 py-4 text-center font-bold text-white shadow-xl shadow-brand/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-dark"
            >
              Request an Appointment
            </Link>
            <a
              href={clinic.phoneHref}
              className="glass-btn rounded-full px-8 py-4 text-center font-bold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:text-brand"
            >
              Call {clinic.phone}
            </a>
          </div>

          {/* Rating / trust strip */}
          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-ink/10 pt-6">
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5 text-brand" aria-label="Five star rated">
                {Array.from({ length: 5 }).map((_, s) => (
                  <svg key={s} viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                    <path d="M12 2l2.9 6.6 7.1.7-5.4 4.8 1.6 7L12 17.5 5.8 21l1.6-7L2 9.3l7.1-.7L12 2Z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm font-semibold text-ink/70">Loved by local families</span>
            </div>
            <div className="text-sm text-ink/60">
              <span className="font-bold text-brand-dark">45+ years</span> caring for Pontotoc
            </div>
          </div>
        </div>

        {/* Visual */}
        <div className="relative z-0 lg:pl-2">
          <div className="animate-float-slow">
            <div className="glass-surface overflow-hidden rounded-5xl p-2.5">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/hero.svg"
                  alt="Clear vision through Wood Eye Clinic eyewear"
                  className="h-full w-full object-cover"
                />
                {/* glass sheen over the photo */}
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0) 42%)",
                  }}
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>

          {/* Floating glass accent — established since */}
          <div className="animate-float absolute -left-3 top-8 sm:-left-6">
            <div className="glass-surface glass-strong rounded-2xl px-5 py-4 text-center shadow-xl">
              <p className="font-display text-2xl font-bold text-brand-dark">1981</p>
              <p className="text-[0.7rem] font-semibold uppercase tracking-widest text-ink/55">
                Established
              </p>
            </div>
          </div>

          {/* Floating glass accent — onsite lab */}
          <div
            className="animate-float absolute -right-2 bottom-10 sm:-right-5"
            style={{ animationDelay: "-4.5s" }}
          >
            <div className="glass-surface glass-strong flex items-center gap-3 rounded-2xl px-5 py-4 shadow-xl">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky/70 text-brand-dark">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M9 3v6l-5 8a2 2 0 0 0 1.7 3h12.6a2 2 0 0 0 1.7-3l-5-8V3" />
                  <path d="M7 3h10" />
                </svg>
              </span>
              <div>
                <p className="text-sm font-bold text-ink">Onsite optical lab</p>
                <p className="text-xs text-ink/55">Faster eyewear, done right</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
