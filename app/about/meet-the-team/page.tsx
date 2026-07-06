import type { Metadata } from "next";
import Glass from "@/components/Glass";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { doctors, staff } from "@/lib/site";

const team = [...doctors, ...staff];

export const metadata: Metadata = {
  title: "Meet the Team",
  description:
    "Meet the doctors, opticians, technicians, and patient care coordinators of Wood Eye Clinic in Pontotoc, MS.",
};

export default function MeetTheTeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Meet the Team"
        title="The people behind your care"
        description="From your first phone call to your final frame fitting, every member of our team is dedicated to creating an exceptional experience."
      />

      <section className="px-6 py-10">
        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, i) => (
            <Reveal key={member.slug} delay={(i % 3) * 100}>
              <Glass
                href={`/team/${member.slug}`}
                className="group h-full overflow-hidden hover:-translate-y-1.5 hover:shadow-xl"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={member.photo}
                    alt={member.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  />
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(0,24,36,0.4) 0%, rgba(0,24,36,0) 42%)",
                    }}
                    aria-hidden="true"
                  />
                  <div className="absolute bottom-3 left-3">
                    <span className="glass-chip rounded-full px-3 py-1 text-xs font-bold text-brand-dark">
                      {member.role}
                    </span>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h2 className="font-display text-lg font-bold text-ink">{member.name}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">{member.headline}</p>
                  <p className="mt-4 text-sm font-semibold text-brand">
                    View profile
                    <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </p>
                </div>
              </Glass>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
