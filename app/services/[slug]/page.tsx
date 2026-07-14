import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Glass from "@/components/Glass";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import OrderContactsBand from "@/components/OrderContactsBand";
import { services } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.summary,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <section className="px-6 pb-6 pt-16 sm:pt-20">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <Link
              href="/services"
              className="text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
            >
              &larr; All Eyecare Services
            </Link>
            <div className="mt-8 flex items-start gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-sky/60 text-brand-dark">
                <Icon name={service.icon} className="h-7 w-7" />
              </div>
              <div>
                <h1 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                  {service.name}
                </h1>
                <p className="mt-4 text-lg leading-relaxed text-ink/70">{service.summary}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-8">
        <div className="mx-auto max-w-4xl space-y-8">
          {service.sections.map((section, i) => (
            <Reveal key={section.heading} delay={Math.min(i * 60, 180)}>
              <Glass strong={i % 2 === 0} tint={i % 2 !== 0} className="p-8 sm:p-10">
                <h2 className="font-display text-2xl font-bold text-ink">{section.heading}</h2>
                {section.body?.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 40)}
                    className="mt-4 leading-relaxed text-ink/75"
                  >
                    {paragraph}
                  </p>
                ))}
                {section.list && (
                  <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                    {section.list.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-ink/80">
                        <svg
                          viewBox="0 0 24 24"
                          className="mt-1 h-4 w-4 shrink-0 text-brand"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {section.note && (
                  <p className="mt-5 rounded-2xl bg-sky/30 px-5 py-4 text-sm leading-relaxed text-brand-deep">
                    {section.note}
                  </p>
                )}
              </Glass>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-6 py-10">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-display text-2xl font-bold text-ink">
            Explore more services
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {related.map((r) => (
              <Glass
                key={r.slug}
                href={`/services/${r.slug}`}
                className="group h-full p-6 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky/60 text-brand-dark">
                  <Icon name={r.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-ink">{r.name}</h3>
                <p className="mt-2 text-sm font-semibold text-brand">
                  Learn more
                  <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </p>
              </Glass>
            ))}
          </div>
        </div>
      </section>

      <OrderContactsBand
        title={
          service.slug === "contact-lenses"
            ? "Already wear contacts? Reorder online"
            : "Need more contacts?"
        }
      />

      <CtaBand />
    </>
  );
}
