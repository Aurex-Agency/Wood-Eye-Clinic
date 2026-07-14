import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Glass from "@/components/Glass";
import Icon from "@/components/Icon";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import OrderContactsBand from "@/components/OrderContactsBand";
import { clinic, services, siteUrl } from "@/lib/site";
import { directionsUrl, locations } from "@/lib/locations";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = locations.find((l) => l.slug === slug);
  if (!location) return {};
  const title = location.isHome
    ? `Eye Doctor in ${location.city}, ${location.state}`
    : `Eye Doctor Near ${location.city}, ${location.state}`;
  return {
    title,
    description: location.metaDescription,
    // openGraph does not deep-merge with the root layout, so restate the
    // shared fields alongside the page-specific title and description.
    openGraph: {
      type: "website",
      siteName: "Wood Eye Clinic",
      locale: "en_US",
      url: `${siteUrl}/locations/${location.slug}`,
      title: `${title} | Wood Eye Clinic`,
      description: location.metaDescription,
      images: [
        {
          url: "/og.jpg",
          width: 1200,
          height: 630,
          alt: "The Wood Eye Clinic team in their optical boutique in Pontotoc, MS",
        },
      ],
    },
  };
}

const featuredServices = services.slice(0, 6);

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const location = locations.find((l) => l.slug === slug);
  if (!location) notFound();

  const others = locations.filter((l) => l.slug !== slug);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: location.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Areas We Serve", item: `${siteUrl}/locations` },
      {
        "@type": "ListItem",
        position: 3,
        name: `${location.city}, ${location.state}`,
        item: `${siteUrl}/locations/${location.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-6 pt-14 sm:pt-20">
        <div
          className="orb animate-drift left-1/2 top-[-6rem] h-72 w-96 -translate-x-1/2 bg-sky/50"
          aria-hidden="true"
        />
        <div className="glass-surface relative mx-auto max-w-4xl rounded-4xl px-6 py-8 text-center sm:px-10 sm:py-9">
          <Reveal>
            <p className="glass-chip mx-auto inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.28em] text-brand-dark sm:text-sm">
              Serving {location.city}, Mississippi
            </p>
            <h1 className="mt-5 font-display text-3xl font-bold tracking-tight text-ink sm:text-5xl">
              {location.headline}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-ink/70">
              {location.intro}
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={clinic.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-full bg-brand px-8 py-3.5 font-bold text-white shadow-xl shadow-brand/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-dark sm:w-auto"
              >
                Book an Appointment
              </a>
              <a
                href={clinic.phoneHref}
                className="glass-btn w-full rounded-full px-8 py-3.5 font-bold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:text-brand sm:w-auto"
              >
                Call {clinic.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Local story + getting here */}
      <section className="px-6 py-10">
        <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <Glass strong className="h-full p-7 sm:p-10">
              <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
                {location.isHome
                  ? "Pontotoc's eye clinic since 1981"
                  : `Why ${location.city} families choose Wood Eye Clinic`}
              </h2>
              {location.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="mt-4 leading-relaxed text-ink/75">
                  {paragraph}
                </p>
              ))}
            </Glass>
          </Reveal>

          <Reveal delay={120}>
            <Glass tint className="h-full p-7 sm:p-10">
              <h2 className="font-display text-2xl font-bold text-ink">
                {location.isHome ? "Visiting us downtown" : `Getting here from ${location.city}`}
              </h2>
              {!location.isHome && (
                <dl className="mt-5 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-white/50 px-4 py-3 text-center">
                    <dt className="text-xs font-bold uppercase tracking-widest text-ink/50">
                      Drive time
                    </dt>
                    <dd className="mt-1 font-display text-lg font-bold text-brand-dark">
                      {location.driveTime}
                    </dd>
                  </div>
                  <div className="rounded-2xl bg-white/50 px-4 py-3 text-center">
                    <dt className="text-xs font-bold uppercase tracking-widest text-ink/50">
                      Distance
                    </dt>
                    <dd className="mt-1 font-display text-lg font-bold text-brand-dark">
                      {location.distance}
                    </dd>
                  </div>
                </dl>
              )}
              <p className="mt-5 leading-relaxed text-ink/75">{location.route}</p>
              <address className="mt-5 border-t border-ink/10 pt-5 text-base font-semibold not-italic leading-relaxed text-ink">
                {clinic.name}
                <br />
                {clinic.address.street}
                <br />
                {clinic.address.city}, {clinic.address.state} {clinic.address.zip}
              </address>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={directionsUrl(location)}
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
        </div>
      </section>

      {/* Storefront photo */}
      <section className="px-6 py-4">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <Photo
              src="/img/office/storefront.webp"
              alt={`The Wood Eye Clinic storefront on Main Street in Pontotoc, serving ${location.city}, ${location.state}`}
              className="aspect-[4/3] sm:aspect-[16/6]"
              rounded="rounded-[2rem]"
            />
          </Reveal>
        </div>
      </section>

      {/* Services for this community */}
      <section className="px-6 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal className="glass-surface mx-auto max-w-2xl rounded-[1.75rem] px-6 py-7 text-center sm:px-10 sm:py-9">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-brand">
              Eyecare Services
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Complete eye care for {location.city} families
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 3) * 90}>
                <Glass
                  href={`/services/${service.slug}`}
                  className="group h-full p-6 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky/60 text-brand-dark">
                    <Icon name={service.icon} className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-base font-bold text-ink">{service.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">{service.summary}</p>
                </Glass>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/services"
              className="inline-block rounded-full border-2 border-brand px-8 py-3.5 font-bold text-brand transition-all duration-300 hover:bg-brand hover:text-white"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="px-6 pb-14">
        <div className="mx-auto max-w-3xl">
          <Reveal className="glass-surface mx-auto max-w-2xl rounded-[1.75rem] px-6 py-7 text-center sm:px-10 sm:py-9">
            <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Questions from {location.city} patients
            </h2>
          </Reveal>
          <div className="mt-8 space-y-3">
            {location.faqs.map((faq) => (
              <details
                key={faq.question}
                className="glass-surface group rounded-2xl transition-all duration-300 open:glass-strong"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-ink [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky/60 text-brand-dark transition-transform duration-300 group-open:rotate-45">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      aria-hidden="true"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="px-6 pb-6 leading-relaxed text-ink/70">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Other communities */}
      <section className="px-6 pb-10">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="font-display text-xl font-bold text-ink text-readable">
            Also serving nearby communities
          </h2>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            {others.map((l) => (
              <Link
                key={l.slug}
                href={`/locations/${l.slug}`}
                className="glass-chip rounded-full px-5 py-2.5 text-sm font-bold text-brand-dark transition-all duration-300 hover:-translate-y-0.5 hover:text-brand"
              >
                {l.city}, {l.state}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <OrderContactsBand />
      <CtaBand />
    </>
  );
}
