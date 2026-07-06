import Link from "next/link";
import Glass from "@/components/Glass";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import FocusDemo from "@/components/FocusDemo";
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
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-16 pt-14 sm:pt-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full bg-sky/60 px-4 py-1.5 text-sm font-semibold text-brand-dark">
              <span className="h-2 w-2 rounded-full bg-brand" aria-hidden="true" />
              Welcoming new patients in Pontotoc, MS
            </p>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Life is better
              <span className="block text-brand">in focus.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink/70">
              Since 1981, Wood Eye Clinic has helped generations of North
              Mississippi families protect one of their greatest gifts: their
              vision. Comprehensive eye care, designer eyewear, and a team
              that treats you like family.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-brand px-8 py-4 text-center font-bold text-white shadow-xl shadow-brand/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-dark"
              >
                Request an Appointment
              </Link>
              <a
                href={clinic.phoneHref}
                className="glass-surface rounded-full px-8 py-4 text-center font-bold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:text-brand"
              >
                Call {clinic.phone}
              </a>
            </div>
            <p className="mt-6 text-sm text-ink/60">
              {clinic.address.street}, {clinic.address.city}, {clinic.address.state}{" "}
              {clinic.address.zip}
            </p>
          </Reveal>

          <Reveal delay={200} className="lg:pl-4">
            <div className="animate-float">
              <FocusDemo />
            </div>
          </Reveal>
        </div>
      </section>

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

      {/* Services */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mx-auto max-w-2xl text-center">
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

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service, i) => (
              <Reveal key={service.slug} delay={i * 90}>
                <Glass
                  href={`/services/${service.slug}`}
                  className="group h-full p-7 hover:-translate-y-1.5 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky/60 text-brand-dark transition-colors duration-500 group-hover:bg-brand group-hover:text-white">
                    <Icon name={service.icon} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-ink">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">{service.summary}</p>
                  <p className="mt-4 text-sm font-semibold text-brand">
                    Learn more
                    <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </p>
                </Glass>
              </Reveal>
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

      {/* Doctors */}
      <section className="px-6 py-4">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mx-auto max-w-2xl text-center">
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
                  className="group h-full p-7 text-center hover:-translate-y-1.5 hover:shadow-xl"
                >
                  {/* Placeholder portrait: swap for doctor photography */}
                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-sky to-brand/30 font-display text-2xl font-bold text-brand-deep">
                    {doc.shortName.replace("Dr. ", "").charAt(0)}
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-ink">{doc.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-brand">{doc.role}</p>
                  <p className="mt-1 text-xs uppercase tracking-widest text-ink/50">
                    {doc.joined}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-ink/65">{doc.headline}</p>
                  <p className="mt-4 text-sm font-semibold text-brand">
                    Meet {doc.shortName}
                    <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </p>
                </Glass>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mx-auto max-w-2xl text-center">
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
