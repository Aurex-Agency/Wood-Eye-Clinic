import type { Metadata } from "next";
import Glass from "@/components/Glass";
import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import OrderContactsBand from "@/components/OrderContactsBand";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Eyecare Services",
  description:
    "Comprehensive eye exams, children's exams, diabetic eye care, contact lenses, vision therapy, eyewear, sunglasses, computer vision care, LASIK co-management, and an onsite optical lab in Pontotoc, MS.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Eyecare Services"
        title="Complete care for every pair of eyes"
        description="As a full-service eye and vision care provider, we offer everything from routine exams and designer eyewear to advanced disease management, all under one roof in downtown Pontotoc."
      />

      <section className="px-6 py-10">
        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) * 90}>
              <Glass
                href={`/services/${service.slug}`}
                className="group h-full p-7 hover:-translate-y-1.5 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky/60 text-brand-dark transition-colors duration-500 group-hover:bg-brand group-hover:text-white">
                  <Icon name={service.icon} />
                </div>
                <h2 className="mt-5 font-display text-lg font-bold text-ink">{service.name}</h2>
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
      </section>

      <OrderContactsBand />

      <CtaBand
        title="Not sure which service you need?"
        text="Start with a comprehensive eye exam. Our doctors will evaluate your vision and eye health and guide you from there."
      />
    </>
  );
}
