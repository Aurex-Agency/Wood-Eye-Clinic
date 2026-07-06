import Link from "next/link";
import { clinic } from "@/lib/site";

/*
 * "See clearly" hero. The scene fills the section softly out of focus, the way
 * the world looks without the right prescription. A pair of eyeglass lenses
 * sits over it, and everything seen through the lenses snaps into sharp focus.
 * A literal, on-brand play on what the clinic does.
 *
 * SWAP THE PHOTO: replace /public/img/hero.webp. Both the blurred backdrop and
 * the sharp lenses read from the same file, so one swap updates both.
 */
export default function Hero() {
  return (
    <section className="relative isolate -mt-[92px] flex min-h-[38rem] items-center overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:min-h-[44rem]">
      {/* Out-of-focus backdrop */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/img/hero.webp')",
            filter: "blur(22px) brightness(0.62) saturate(1.1)",
            transform: "scale(1.15)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(0,24,36,0.82) 0%, rgba(0,24,36,0.5) 45%, rgba(0,24,36,0.28) 100%)",
          }}
        />
        <div className="orb animate-drift right-[8%] top-[16%] h-72 w-72 bg-sky/20" />
        <div
          className="orb animate-drift left-[10%] bottom-[12%] h-72 w-72 bg-brand/25"
          style={{ animationDelay: "-9s" }}
        />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-6">
        {/* Copy */}
        <div className="max-w-xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky opacity-70" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-sky" />
            </span>
            Welcoming new patients in Pontotoc, MS
          </p>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.02] tracking-tight text-white drop-shadow-[0_2px_18px_rgba(0,18,30,0.5)] sm:text-6xl lg:text-7xl">
            Life is better
            <span className="block text-sky">in focus.</span>
          </h1>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-white/85 drop-shadow-[0_1px_10px_rgba(0,18,30,0.5)]">
            A trusted family eye clinic caring for North Mississippi since 1981,
            with comprehensive exams, designer eyewear, and doctors who know you
            by name.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-white py-2.5 pl-2.5 pr-7 font-bold text-ink shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white transition-transform duration-300 group-hover:rotate-45">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
              Book Your Eye Exam
            </Link>
            <a
              href={clinic.phoneHref}
              className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20"
            >
              Call {clinic.phone}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2">
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5 text-sky" aria-label="Five star rated">
                {Array.from({ length: 5 }).map((_, s) => (
                  <svg key={s} viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                    <path d="M12 2l2.9 6.6 7.1.7-5.4 4.8 1.6 7L12 17.5 5.8 21l1.6-7L2 9.3l7.1-.7L12 2Z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm font-semibold text-white/85">Loved by local families</span>
            </div>
            <span className="text-sm text-white/70">
              <span className="font-bold text-white">45+ years</span> of care
            </span>
          </div>
        </div>

        {/* Eyeglass lenses that bring the scene into focus */}
        <div className="relative">
          <svg
            viewBox="0 0 660 400"
            className="h-auto w-full drop-shadow-[0_20px_40px_rgba(0,20,32,0.45)]"
            role="img"
            aria-label="The Wood Eye Clinic team seen clearly through a pair of glasses"
          >
            <defs>
              <clipPath id="hero-lenses">
                <circle cx="180" cy="195" r="140" />
                <circle cx="480" cy="195" r="140" />
              </clipPath>
              <linearGradient id="hero-frame" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#083b52" />
                <stop offset="1" stopColor="#0075a1" />
              </linearGradient>
              <radialGradient id="hero-glint" cx="0.35" cy="0.3" r="0.5">
                <stop offset="0" stopColor="#ffffff" stopOpacity="0.5" />
                <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Sharp, in-focus scene revealed only inside the lenses */}
            <image
              href="/img/hero.webp"
              x="15"
              y="-35"
              width="630"
              height="470"
              preserveAspectRatio="xMidYMid slice"
              clipPath="url(#hero-lenses)"
            />

            {/* Lens glints */}
            <ellipse cx="135" cy="140" rx="66" ry="44" fill="url(#hero-glint)" clipPath="url(#hero-lenses)" />
            <ellipse cx="435" cy="140" rx="66" ry="44" fill="url(#hero-glint)" clipPath="url(#hero-lenses)" />

            {/* Frame */}
            <g fill="none" stroke="url(#hero-frame)" strokeWidth="15" strokeLinecap="round">
              <circle cx="180" cy="195" r="140" />
              <circle cx="480" cy="195" r="140" />
              {/* bridge */}
              <path d="M318 183 q12 -16 24 0" />
              {/* temple arms */}
              <path d="M44 158 L10 98" />
              <path d="M616 158 L650 98" />
            </g>
            {/* Inner lens rim highlight */}
            <g fill="none" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="2.5">
              <circle cx="180" cy="195" r="131" />
              <circle cx="480" cy="195" r="131" />
            </g>
          </svg>

          <span className="glass-chip absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full px-5 py-2 text-sm font-bold text-brand-dark shadow-lg">
            See clearly again
          </span>
        </div>
      </div>
    </section>
  );
}
