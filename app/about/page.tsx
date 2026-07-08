import type { Metadata } from "next";
import Link from "next/link";
import Glass from "@/components/Glass";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Photo from "@/components/Photo";
import CtaBand from "@/components/CtaBand";
import { doctors } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Since 1981, Wood Eye Clinic has provided personalized, compassionate eye care to the families of Pontotoc and North Mississippi.",
};

const values = [
  {
    title: "Family first",
    text: "Many of the families we care for have trusted us with their vision for multiple generations, and we consider it an honor to be part of their lives.",
  },
  {
    title: "Time to listen",
    text: "We take the time to listen, answer questions, and ensure every patient feels informed, respected, and confident in their care.",
  },
  {
    title: "Advanced technology",
    text: "By combining the latest technology with individualized care, we provide the highest quality treatment in a comfortable, welcoming environment.",
  },
  {
    title: "Proudly local",
    text: "As a locally owned practice, we are proud to serve the community we call home, and we have been since 1981.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Wood Eye Clinic"
        title="Four decades of caring for the eyes of North Mississippi"
        description="Since opening our doors in 1981, our mission has remained the same: deliver personalized, compassionate care using the latest technology while treating every patient like family."
      />

      <section className="px-6 pb-4 pt-4">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <Photo
              src="/img/team-boutique.webp"
              alt="The Wood Eye Clinic team in the optical boutique"
              className="aspect-[16/9]"
              rounded="rounded-[2rem]"
            />
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-10">
        <div className="glass-surface mx-auto max-w-4xl space-y-6 rounded-4xl p-8 text-lg leading-relaxed text-ink/75 sm:p-10">
          <Reveal>
            <p>
              At Wood Eye Clinic, we believe healthy vision is essential to
              living life to the fullest. Whether you are visiting for a
              routine eye exam, managing a chronic eye condition, exploring
              treatment options, or searching for the perfect pair of glasses,
              our experienced team is here to guide you every step of the way.
            </p>
          </Reveal>
          <Reveal>
            <p>
              Our doctors provide comprehensive eye care for patients of all
              ages, offering services that include comprehensive eye exams,
              diabetic eye care, glaucoma management, dry eye treatment,
              pediatric eye care, specialty contact lenses, vision therapy,
              laser procedures, and the diagnosis and management of a wide
              range of eye diseases.
            </p>
          </Reveal>
          <Reveal>
            <p>
              What truly sets Wood Eye Clinic apart is the relationships we
              build with our patients. Every member of our team is dedicated
              to creating an exceptional experience from the moment you walk
              through our doors. We look forward to helping you and your
              family enjoy a lifetime of healthy vision.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-10">
        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 100}>
              <Glass tint className="h-full p-8">
                <h2 className="font-display text-xl font-bold text-brand-dark">{v.title}</h2>
                <p className="mt-3 leading-relaxed text-ink/70">{v.text}</p>
              </Glass>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-6 py-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-5 md:grid-cols-2">
            <Reveal>
              <Glass
                href="/about/meet-the-doctors"
                className="group h-full p-10 hover:-translate-y-1.5 hover:shadow-xl"
              >
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-brand">
                  Our Doctors
                </p>
                <h2 className="mt-3 font-display text-2xl font-bold text-ink">
                  Meet the Optometrists
                </h2>
                <p className="mt-3 leading-relaxed text-ink/70">
                  {doctors.map((d) => d.shortName).join(", ")} share one
                  belief: exceptional eye care is built on trust, compassion,
                  and treating every patient like family.
                </p>
                <p className="mt-5 font-semibold text-brand">
                  Get to know our doctors
                  <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </p>
              </Glass>
            </Reveal>
            <Reveal delay={150}>
              <Glass
                href="/about/meet-the-team"
                className="group h-full p-10 hover:-translate-y-1.5 hover:shadow-xl"
              >
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-brand">
                  Our People
                </p>
                <h2 className="mt-3 font-display text-2xl font-bold text-ink">Meet the Team</h2>
                <p className="mt-3 leading-relaxed text-ink/70">
                  From our front office to our optical boutique and onsite
                  lab, every member of our team is dedicated to making your
                  visit exceptional.
                </p>
                <p className="mt-5 font-semibold text-brand">
                  Meet the whole team
                  <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </p>
              </Glass>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand
        title="Become part of the Wood Eye Clinic family"
        text="Generations of Pontotoc families trust us with their vision. We would love to care for yours too."
      />
    </>
  );
}
