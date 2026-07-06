import Link from "next/link";
import { clinic } from "@/lib/site";

/*
 * Full-bleed image hero (inspired by the client's approved reference): a large
 * photograph filling a rounded, floating card with centered white copy and a
 * pill call-to-action. The glass site header floats above it.
 *
 * SWAP THE PHOTO: drop the real team photograph in at /public/hero-team.jpg.
 * It loads automatically over the placeholder via the layered background-image
 * below (the .jpg is painted on top of /hero-team.svg, so no code change is
 * needed once the file exists). Use a wide, landscape image for best framing.
 */
export default function Hero() {
  return (
    <section className="px-3 pt-3 sm:px-5 sm:pt-5">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] shadow-2xl shadow-brand-deep/20 ring-1 ring-white/50 sm:rounded-[2.5rem]">
          {/* Background photograph (real .jpg painted over the placeholder .svg) */}
          <div
            className="absolute inset-0 bg-cover"
            style={{
              backgroundImage: "url('/hero-team.jpg'), url('/hero-team.svg')",
              backgroundPosition: "center 22%",
            }}
            aria-hidden="true"
          />

          {/* Legibility scrim — a soft focus glow behind the centered copy,
              plus gentle top/bottom darkening, so text stays crisp while the
              team's faces stay bright toward the edges. */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(115% 80% at 50% 40%, rgba(0,20,32,0.62) 0%, rgba(0,20,32,0.34) 38%, rgba(0,20,32,0.12) 60%, rgba(0,20,32,0) 78%), linear-gradient(to bottom, rgba(0,24,36,0.55) 0%, rgba(0,24,36,0.05) 26%, rgba(0,24,36,0.08) 70%, rgba(0,24,36,0.42) 100%)",
            }}
            aria-hidden="true"
          />

          {/* Content */}
          <div className="relative flex min-h-[34rem] flex-col items-center px-6 pb-20 pt-24 text-center sm:min-h-[40rem] sm:pt-28 lg:min-h-[44rem] lg:pt-32">
            <p className="glass-chip inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold text-white/95">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-sky" />
              </span>
              Welcoming new patients in Pontotoc, MS
            </p>

            <h1 className="mt-7 max-w-4xl font-display text-5xl font-bold leading-[1.02] tracking-tight text-white drop-shadow-[0_2px_20px_rgba(0,20,32,0.35)] sm:text-6xl lg:text-7xl">
              Life is better
              <span className="block">in focus.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85 drop-shadow-[0_1px_10px_rgba(0,20,32,0.45)]">
              A trusted family eye clinic caring for North Mississippi since 1981
              — comprehensive exams, designer eyewear, and doctors who know you
              by name.
            </p>

            <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-white py-2.5 pl-2.5 pr-7 font-bold text-ink shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand text-white transition-transform duration-300 group-hover:rotate-45">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
                Book Your Eye Exam
              </Link>
              <a
                href={clinic.phoneHref}
                className="glass-btn rounded-full px-7 py-4 font-bold text-white transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: "rgba(255,255,255,0.16)", borderColor: "rgba(255,255,255,0.5)" }}
              >
                Call {clinic.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
