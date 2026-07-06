import type { Metadata } from "next";
import Glass from "@/components/Glass";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { medicalInsurance, visionInsurance } from "@/lib/site";

export const metadata: Metadata = {
  title: "Insurance & Payment Information",
  description:
    "Wood Eye Clinic accepts a wide variety of medical and vision insurance plans, including VSP, EyeMed, Blue Cross Blue Shield, Medicare, and Mississippi Medicaid.",
};

export default function InsurancePage() {
  return (
    <>
      <PageHero
        eyebrow="Insurance & Payment"
        title="Quality eye care, easy to navigate"
        description="We proudly accept a wide variety of medical and vision insurance plans and are happy to help you understand your benefits before your visit."
      />

      <section className="px-6 py-10">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="grid gap-5 lg:grid-cols-2">
            <Reveal>
              <Glass tint className="h-full p-8 sm:p-10">
                <h2 className="font-display text-2xl font-bold text-ink">
                  Vision insurance plans we accept
                </h2>
                <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  {visionInsurance.map((plan) => (
                    <li key={plan} className="flex items-center gap-2.5 text-ink/80">
                      <span className="h-2 w-2 shrink-0 rounded-full bg-brand" aria-hidden="true" />
                      {plan}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-sm font-semibold text-brand-dark">and many more</p>
              </Glass>
            </Reveal>

            <Reveal delay={120}>
              <Glass strong className="h-full p-8 sm:p-10">
                <h2 className="font-display text-2xl font-bold text-ink">
                  Medical insurance plans we accept
                </h2>
                <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  {medicalInsurance.map((plan) => (
                    <li key={plan} className="flex items-center gap-2.5 text-ink/80">
                      <span className="h-2 w-2 shrink-0 rounded-full bg-brand" aria-hidden="true" />
                      {plan}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-sm font-semibold text-brand-dark">and many more</p>
              </Glass>
            </Reveal>
          </div>

          <Reveal>
            <Glass strong className="p-8 sm:p-10">
              <h2 className="font-display text-2xl font-bold text-ink">
                Understanding your coverage
              </h2>
              <p className="mt-4 leading-relaxed text-ink/75">
                Vision insurance and medical insurance work differently
                depending on the reason for your visit.
              </p>
              <ul className="mt-5 space-y-3 text-ink/80">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand" aria-hidden="true" />
                  Routine eye exams, glasses, and contact lens services
                  typically use vision insurance.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand" aria-hidden="true" />
                  Eye health concerns such as glaucoma, cataracts, infections,
                  diabetes-related eye care, and injuries typically use
                  medical insurance.
                </li>
              </ul>
              <p className="mt-5 leading-relaxed text-ink/75">
                Our team is happy to help determine how your visit will be
                processed before your appointment whenever possible.
              </p>
            </Glass>
          </Reveal>

          <Reveal>
            <Glass tint className="p-8 sm:p-10">
              <h2 className="font-display text-2xl font-bold text-ink">
                Vision therapy information
              </h2>
              <p className="mt-4 leading-relaxed text-ink/75">
                Vision therapy is a specialized treatment program and is not
                covered by medical or vision insurance plans. Before beginning
                therapy, we will review all costs, discuss payment options,
                and answer any questions so you know exactly what to expect.
              </p>
            </Glass>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Questions about your coverage?"
        text="Insurance can be confusing, but you do not have to figure it out alone. Give us a call and we will verify your benefits before your visit."
      />
    </>
  );
}
