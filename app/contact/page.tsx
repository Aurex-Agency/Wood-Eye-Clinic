import type { Metadata } from "next";
import Glass from "@/components/Glass";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import Faq from "@/components/Faq";
import OrderContactsBand from "@/components/OrderContactsBand";
import { clinic } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us & FAQs",
  description:
    "Contact Wood Eye Clinic in Pontotoc, MS. Request an appointment, ask a question, or browse our frequently asked questions.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="We would love to hear from you"
        description="Request an appointment, ask about your insurance, or just say hello. Our team is here to help."
      />

      <section className="px-6 py-10">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <ContactForm />
          </Reveal>

          <div className="space-y-5">
            <Reveal delay={100}>
              <Glass tint className="p-8">
                <h2 className="font-display text-xl font-bold text-ink">Prefer to call?</h2>
                <p className="mt-2 text-ink/70">
                  The fastest way to schedule is a quick phone call during
                  office hours.
                </p>
                <a
                  href={clinic.phoneHref}
                  className="mt-4 inline-block rounded-full bg-brand px-6 py-3 font-bold text-white transition-all duration-300 hover:bg-brand-dark"
                >
                  {clinic.phone}
                </a>
              </Glass>
            </Reveal>

            <Reveal delay={200}>
              <Glass strong className="p-8">
                <h2 className="font-display text-xl font-bold text-ink">Find us</h2>
                <address className="mt-3 not-italic leading-relaxed text-ink/75">
                  {clinic.address.street}
                  <br />
                  {clinic.address.city}, {clinic.address.state} {clinic.address.zip}
                </address>
                <a
                  href={clinic.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm font-semibold text-brand underline underline-offset-4 transition-colors hover:text-brand-dark"
                >
                  Open in Google Maps
                </a>
                <h3 className="mt-6 text-sm font-bold uppercase tracking-widest text-brand">
                  Office Hours
                </h3>
                <ul className="mt-3 space-y-1.5 text-sm text-ink/75">
                  {clinic.hours.map((h) => (
                    <li key={h.day} className="flex justify-between gap-6">
                      <span className="font-medium">{h.day}</span>
                      <span className={h.hours === "Closed" ? "text-ink/40" : ""}>
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

      <section className="px-6 py-14">
        <div className="mx-auto max-w-4xl">
          <Reveal className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-brand">FAQs</p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-ink/70">
              Answers to the questions we hear most often. Do not see yours?
              Send us a message or give us a call.
            </p>
          </Reveal>
          <div className="mt-10">
            <Faq />
          </div>
        </div>
      </section>

      <OrderContactsBand />
    </>
  );
}
