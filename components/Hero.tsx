import Link from "next/link";
import { clinic } from "@/lib/site";

/*
 * "Bring it into focus" hero. The team photograph fills the whole section as a
 * soft, out-of-focus backdrop (uncorrected vision). Floating over it sits a
 * clear glass card — crisp copy on the left, the same photo perfectly sharp on
 * the right (the in-focus reveal). A literal play on what the clinic does.
 *
 * SWAP THE PHOTO: replace /public/img/hero.webp. Both the blurred backdrop and
 * the sharp window read from the same file, so one swap updates both.
 */
export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden px-4 pb-16 pt-6 sm:px-6">
      {/* Out-of-focus backdrop of the same photograph */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/img/hero.webp')",
            filter: "blur(24px) brightness(0.72) saturate(1.1)",
            transform: "scale(1.15)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-deep/55 via-brand-deep/25 to-brand-deep/60" />
        {/* drifting glow orbs for depth */}
        <div className="orb animate-drift left-[8%] top-[12%] h-72 w-72 bg-sky/25" />
        <div
          className="orb animate-drift right-[6%] bottom-[10%] h-80 w-80 bg-brand/25"
          style={{ animationDelay: "-9s" }}
        />
      </div>

      {/* Clear, in-focus glass card */}
      <div className="mx-auto max-w-6xl">
        <div className="glass-surface overflow-hidden rounded-[1.75rem] p-2.5 shadow-2xl shadow-brand-deep/30 sm:rounded-[2.25rem] sm:p-3.5">
          <div className="grid items-stretch gap-2.5 sm:gap-3.5 lg:grid-cols-[1.04fr_0.96fr]">
            {/* Copy */}
            <div className="flex flex-col justify-center px-6 py-9 sm:px-9 sm:py-12 lg:px-11">
              <p className="glass-chip inline-flex w-fit items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold text-brand-dark">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand" />
                </span>
                Welcoming new patients in Pontotoc, MS
              </p>

              <h1 className="mt-6 font-display text-5xl font-bold leading-[1.02] tracking-tight text-ink sm:text-6xl">
                Life is better
                <span className="block text-brand">in focus.</span>
              </h1>

              <p className="mt-5 max-w-md text-lg leading-relaxed text-ink/70">
                A trusted family eye clinic caring for North Mississippi since
                1981 — comprehensive exams, designer eyewear, and doctors who
                know you by name.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-brand py-2.5 pl-2.5 pr-7 font-bold text-white shadow-xl shadow-brand/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-dark"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-brand transition-transform duration-300 group-hover:rotate-45">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                  Book Your Eye Exam
                </Link>
                <a
                  href={clinic.phoneHref}
                  className="glass-btn inline-flex items-center justify-center rounded-full px-7 py-4 font-bold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:text-brand"
                >
                  Call {clinic.phone}
                </a>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-ink/10 pt-6">
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5 text-brand" aria-label="Five star rated">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <svg key={s} viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                        <path d="M12 2l2.9 6.6 7.1.7-5.4 4.8 1.6 7L12 17.5 5.8 21l1.6-7L2 9.3l7.1-.7L12 2Z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-ink/65">Loved by local families</span>
                </div>
                <span className="text-sm text-ink/55">
                  <span className="font-bold text-brand-dark">45+ years</span> of care
                </span>
              </div>
            </div>

            {/* In-focus photo window */}
            <div className="relative min-h-[20rem] overflow-hidden rounded-[1.25rem] sm:min-h-[24rem] sm:rounded-[1.6rem] lg:min-h-[34rem]">
              <div
                className="absolute inset-0 bg-cover"
                style={{
                  backgroundImage: "url('/img/hero.webp')",
                  backgroundPosition: "center 22%",
                }}
                aria-hidden="true"
              />
              {/* glass sheen + subtle bottom fade */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 38%), linear-gradient(to top, rgba(0,24,36,0.28) 0%, rgba(0,24,36,0) 34%)",
                }}
                aria-hidden="true"
              />
              {/* floating glass badge */}
              <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5">
                <div className="glass-surface glass-strong flex items-center gap-2.5 rounded-2xl px-4 py-2.5 shadow-lg">
                  <span className="font-display text-xl font-bold text-brand-dark">1981</span>
                  <span className="text-xs font-semibold uppercase tracking-widest text-ink/55">
                    Serving
                    <br />
                    Pontotoc
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
