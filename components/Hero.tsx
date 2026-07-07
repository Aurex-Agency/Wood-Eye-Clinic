import Link from "next/link";
import { clinic } from "@/lib/site";

/*
 * "See clearly" hero. The scene fills the section softly out of focus, the way
 * the world looks without the right prescription. A large pair of eyeglass
 * lenses sits over it, and everything seen through the lenses snaps into sharp
 * focus. A literal, on-brand play on what the clinic does.
 *
 * SWAP THE PHOTO: replace /public/img/hero.webp. Both the blurred backdrop and
 * the sharp lenses read from the same file, so one swap updates both.
 */
export default function Hero() {
  return (
    <section className="relative -mt-[92px] flex min-h-[42rem] items-center overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:min-h-[48rem]">
      {/* Out-of-focus backdrop */}
      <div className="absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/img/hero.webp')",
            filter: "blur(24px) brightness(0.6) saturate(1.1)",
            transform: "scale(1.15)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(150,205,235,0.2) 0%, rgba(0,24,36,0) 15%), linear-gradient(to right, rgba(0,24,36,0.82) 0%, rgba(0,24,36,0.5) 46%, rgba(0,24,36,0.25) 100%)",
          }}
        />
        <div className="orb animate-drift right-[6%] top-[14%] h-80 w-80 bg-sky/20" />
        <div
          className="orb animate-drift left-[8%] bottom-[10%] h-72 w-72 bg-brand/25"
          style={{ animationDelay: "-9s" }}
        />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-8 lg:grid-cols-[0.82fr_1.18fr]">
        {/* Copy */}
        <div className="max-w-xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky opacity-70" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-sky" />
            </span>
            Welcoming new patients in Pontotoc, MS
          </p>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.02] tracking-tight text-white drop-shadow-[0_2px_18px_rgba(0,18,30,0.55)] sm:text-6xl lg:text-7xl">
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

        {/* Big eyeglass lenses that bring the scene into focus */}
        <div className="relative flex justify-center lg:justify-end">
          {/* No CSS filter/drop-shadow here: a filter would lift this SVG into
              its own compositing layer, excluding it from the sticky header's
              backdrop blur, so the glasses would scroll behind the menu sharp. */}
          <svg
            viewBox="0 0 720 440"
            className="h-auto w-full max-w-[44rem]"
            role="img"
            aria-label="The Wood Eye Clinic team seen clearly through a pair of glasses"
          >
            <defs>
              <clipPath id="hero-lenses">
                <circle cx="197" cy="212" r="152" />
                <circle cx="523" cy="212" r="152" />
              </clipPath>
              <linearGradient id="hero-frame" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#06344a" />
                <stop offset="0.55" stopColor="#0075a1" />
                <stop offset="1" stopColor="#063246" />
              </linearGradient>
              <radialGradient id="hero-lensvig" cx="0.5" cy="0.42" r="0.62">
                <stop offset="0.55" stopColor="#001a26" stopOpacity="0" />
                <stop offset="1" stopColor="#001a26" stopOpacity="0.42" />
              </radialGradient>
            </defs>

            {/* Sharp, in-focus scene revealed only inside the lenses */}
            <g clipPath="url(#hero-lenses)">
              <image
                href="/img/hero.webp"
                x="30"
                y="-40"
                width="660"
                height="510"
                preserveAspectRatio="xMidYMid slice"
              />
              {/* faint cool tint */}
              <rect x="0" y="0" width="720" height="440" fill="#0075a1" opacity="0.06" />
              {/* diagonal glass reflections */}
              <g transform="rotate(-26 360 212)">
                <rect x="-60" y="120" width="900" height="70" fill="#ffffff" opacity="0.16" />
                <rect x="-60" y="205" width="900" height="30" fill="#ffffff" opacity="0.1" />
              </g>
              {/* inner lens vignette for depth */}
              <circle cx="197" cy="212" r="152" fill="url(#hero-lensvig)" />
              <circle cx="523" cy="212" r="152" fill="url(#hero-lensvig)" />
            </g>

            {/* Frame */}
            <g fill="none" stroke="url(#hero-frame)" strokeWidth="21" strokeLinecap="round">
              <circle cx="197" cy="212" r="152" />
              <circle cx="523" cy="212" r="152" />
              {/* bridge */}
              <path d="M348 196 q12 -20 24 0" />
              {/* temple arms */}
              <path d="M52 168 L14 100" />
              <path d="M668 168 L706 100" />
            </g>
            {/* Glossy frame highlight */}
            <g fill="none" stroke="#bfeaff" strokeOpacity="0.5" strokeWidth="4">
              <path d="M96 120 a152 152 0 0 1 150 -58" />
              <path d="M422 120 a152 152 0 0 1 150 -58" />
            </g>
            {/* Inner rim highlight */}
            <g fill="none" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="2.5">
              <circle cx="197" cy="212" r="142" />
              <circle cx="523" cy="212" r="142" />
            </g>
          </svg>

          <span className="glass-chip absolute -bottom-1 left-1/2 -translate-x-1/2 rounded-full px-5 py-2 text-sm font-bold text-brand-dark shadow-lg">
            See clearly again
          </span>
        </div>
      </div>
    </section>
  );
}
