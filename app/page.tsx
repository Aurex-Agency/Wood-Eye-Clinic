import Link from "next/link";
import Glass from "@/components/Glass";
import ServiceCard from "@/components/ServiceCard";
import Reveal from "@/components/Reveal";
import Hero from "@/components/Hero";
import Photo from "@/components/Photo";
import BrandMarquee from "@/components/BrandMarquee";
import CtaBand from "@/components/CtaBand";
import { clinic, doctors, services, testimonials } from "@/lib/site";

const featuredServices = services.slice(0, 6);

const trustPoints = [
  { stat: "1981", label: "Caring for Pontotoc since" },
  { stat: "3", label: "Experienced optometrists" },
  { stat: "45+", label: "Years of combined legacy" },
  { stat: "Onsite", label: "Optical lab for faster eyewear" },
];

export default function HomePage() {
  return (
    <>
      {/* Image-forward glass hero */}
      <Hero />

      {/* Trust bar */}
      <section className="px-6">
        <div className="mx-auto max-w-6xl">
          <Glass tint className="rounded-4xl">
            <div className="grid grid-cols-2 gap-6 p-8 sm:p-10 lg:grid-cols-4">
              {trustPoints.map((point) => (
                <div key={point.label} className="text-center">
                  <p className="font-display text-3xl font-bold text-brand-dark sm:text-4xl">
                    {point.stat}
                  </p>
                  <p className="mt-1 text-sm font-medium text-ink/60">{point.label}</p>
                </div>
              ))}
            </div>
          </Glass>
        </div>
      </section>

      {/* See clearly again */}
      <section className="px-6 py-20">
        <Reveal className="glass-surface mx-auto max-w-3xl rounded-[1.75rem] px-8 py-8 text-center sm:px-10 sm:py-9">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-brand">
            See Clearly Again
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            You do not have to live with blurry vision
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink/70">
            Many people do not realize how much they are missing until they see
            clearly for the first time. Our doctors take the time to find the
            right prescription, and the right care, for your eyes and your life.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-brand px-8 py-4 font-bold text-white shadow-xl shadow-brand/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-dark"
          >
            Schedule Your Eye Exam
          </Link>
        </Reveal>
      </section>

      {/* Services */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal className="glass-surface mx-auto max-w-2xl rounded-[1.75rem] px-8 py-8 text-center sm:px-10 sm:py-9">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-brand">
              Eyecare Services
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Everything your eyes need, all in one place
            </h2>
            <p className="mt-4 text-lg text-ink/70">
              From your child's first exam to advanced disease management, our
              doctors provide complete care for every stage of life.
            </p>
          </Reveal>

          {/* Stacked cards: each pins under the header and the next scrolls up
              over it, leaving a peek of the ones behind. */}
          <div className="mx-auto mt-12 max-w-3xl">
            {featuredServices.map((service, i) => (
              <div
                key={service.slug}
                className="sticky pb-5"
                style={{ top: `${116 + i * 22}px` }}
              >
                <ServiceCard service={service} index={i} />
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-block rounded-full border-2 border-brand px-8 py-3.5 font-bold text-brand transition-all duration-300 hover:bg-brand hover:text-white"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Inside the clinic photo gallery */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal className="glass-surface mx-auto max-w-2xl rounded-[1.75rem] px-8 py-8 text-center sm:px-10 sm:py-9">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-brand">
              Inside Wood Eye Clinic
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              A place that feels like home
            </h2>
            <p className="mt-4 text-lg text-ink/70">
              From advanced diagnostic technology to a boutique full of designer
              frames, everything under our roof is designed around you.
            </p>
          </Reveal>

          <div className="mt-12 space-y-5">
            {/* Featured wide shot of the optical lounge */}
            <Reveal>
              <Photo
                src="/img/office/lounge.webp"
                alt="The warm, light-filled optical lounge at Wood Eye Clinic"
                className="aspect-[16/9]"
                rounded="rounded-[2rem]"
              />
            </Reveal>

            {/* Three-up of the boutique, an exam room, and the storefront */}
            <div className="grid gap-5 md:grid-cols-3">
              <Reveal>
                <Photo
                  src="/img/office/eyewear-wall.webp"
                  alt="A wall of designer frames in the Wood Eye Clinic optical boutique"
                  className="aspect-[3/4]"
                />
                <p className="mt-3 text-center text-sm font-semibold text-ink/70 text-readable">
                  A boutique full of designer frames
                </p>
              </Reveal>
              <Reveal delay={120}>
                <Photo
                  src="/img/office/exam-room.webp"
                  alt="A Wood Eye Clinic exam room with advanced diagnostic equipment"
                  className="aspect-[3/4]"
                />
                <p className="mt-3 text-center text-sm font-semibold text-ink/70 text-readable">
                  Advanced diagnostic technology
                </p>
              </Reveal>
              <Reveal delay={240}>
                <Photo
                  src="/img/office/storefront.webp"
                  alt="The historic Wood Eye Clinic building on Main Street in downtown Pontotoc"
                  className="aspect-[3/4]"
                />
                <p className="mt-3 text-center text-sm font-semibold text-ink/70 text-readable">
                  On Main Street in downtown Pontotoc
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Eyewear brand marquee */}
      <BrandMarquee />

      {/* Doctors */}
      <section className="px-6 py-4">
        <div className="mx-auto max-w-6xl">
          <Reveal className="glass-surface mx-auto max-w-2xl rounded-[1.75rem] px-8 py-8 text-center sm:px-10 sm:py-9">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-brand">
              Meet the Optometrists
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Doctors who know you by name
            </h2>
            <p className="mt-4 text-lg text-ink/70">
              Three optometrists, one shared belief: every patient deserves to
              feel heard, valued, and confident in their care.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {doctors.map((doc, i) => (
              <Reveal key={doc.slug} delay={i * 120}>
                <Glass
                  href={`/team/${doc.slug}`}
                  className="group h-full overflow-hidden hover:-translate-y-1.5 hover:shadow-xl"
                >
                  <div className="relative aspect-[4/5] w-full overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={doc.photo}
                      alt={doc.name}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                    />
                    <div
                      className="pointer-events-none absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(0,24,36,0.35) 0%, rgba(0,24,36,0) 40%)",
                      }}
                      aria-hidden="true"
                    />
                    <div className="absolute bottom-3 left-3">
                      <span className="glass-chip rounded-full px-3 py-1 text-xs font-bold text-brand-dark">
                        {doc.joined}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="font-display text-lg font-bold text-ink">{doc.name}</h3>
                    <p className="mt-1 text-sm font-semibold text-brand">{doc.role}</p>
                    <p className="mt-3 text-sm leading-relaxed text-ink/65">{doc.headline}</p>
                    <p className="mt-4 text-sm font-semibold text-brand">
                      Meet {doc.shortName}
                      <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">
                        &rarr;
                      </span>
                    </p>
                  </div>
                </Glass>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal className="glass-surface mx-auto max-w-2xl rounded-[1.75rem] px-8 py-8 text-center sm:px-10 sm:py-9">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-brand">
              Patient Stories
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              What our patients are saying
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {testimonials.map((t, i) => (
              <Reveal key={t.quote} delay={i * 100}>
                <Glass strong className="h-full p-7">
                  <div className="flex gap-1 text-brand" aria-label="Five star review">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <svg
                        key={s}
                        viewBox="0 0 24 24"
                        className="h-5 w-5 fill-current"
                        aria-hidden="true"
                      >
                        <path d="M12 2l2.9 6.6 7.1.7-5.4 4.8 1.6 7L12 17.5 5.8 21l1.6-7L2 9.3l7.1-.7L12 2Z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="mt-4 text-lg leading-relaxed text-ink/80">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <p className="mt-4 text-sm font-semibold text-ink/50">
                    Wood Eye Clinic patient
                  </p>
                </Glass>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Visit */}
      <section className="px-6 pb-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-5 lg:grid-cols-2">
            <Reveal>
              <Glass tint className="h-full p-8 sm:p-10">
                <h2 className="font-display text-2xl font-bold text-ink">Visit us downtown</h2>
                <p className="mt-3 leading-relaxed text-ink/70">
                  You will find us on Main Street in the heart of Pontotoc,
                  with convenient parking and our optical boutique and onsite
                  lab under one roof.
                </p>
                <address className="mt-6 text-lg font-semibold not-italic text-ink">
                  {clinic.address.street}
                  <br />
                  {clinic.address.city}, {clinic.address.state} {clinic.address.zip}
                </address>
                <div className="mt-6 flex flex-wrap gap-4">
                  <a
                    href={clinic.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-brand px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-brand-dark"
                  >
                    Get Directions
                  </a>
                  <a
                    href={clinic.phoneHref}
                    className="rounded-full border-2 border-brand px-6 py-3 text-sm font-bold text-brand transition-all duration-300 hover:bg-brand hover:text-white"
                  >
                    {clinic.phone}
                  </a>
                </div>
              </Glass>
            </Reveal>

            <Reveal delay={150}>
              <Glass strong className="h-full p-8 sm:p-10">
                <h2 className="font-display text-2xl font-bold text-ink">Office hours</h2>
                <ul className="mt-6 space-y-3">
                  {clinic.hours.map((h) => (
                    <li
                      key={h.day}
                      className="flex items-center justify-between border-b border-ink/5 pb-3 text-ink/80 last:border-0"
                    >
                      <span className="font-semibold">{h.day}</span>
                      <span className={h.hours === "Closed" ? "text-ink/40" : "text-brand-dark"}>
                        {h.hours}
                      </span>
                    </li>
                  ))}
                </ul>
              </Glass>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
