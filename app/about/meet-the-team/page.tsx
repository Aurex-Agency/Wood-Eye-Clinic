import type { Metadata } from "next";
import Glass from "@/components/Glass";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { team } from "@/lib/site";

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
                className="group h-full p-7 text-center hover:-translate-y-1.5 hover:shadow-xl"
              >
                {/* Placeholder portrait: swap for team photography */}
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-sky to-brand/30 font-display text-2xl font-bold text-brand-deep">
                  {member.shortName.replace("Dr. ", "").charAt(0)}
                </div>
                <h2 className="mt-5 font-display text-lg font-bold text-ink">{member.name}</h2>
                <p className="mt-1 text-sm font-semibold text-brand">{member.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink/65">{member.headline}</p>
                <p className="mt-4 text-sm font-semibold text-brand">
                  View profile
                  <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </p>
              </Glass>
            </Reveal>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-ink/50">
          Individual staff profiles are coming soon. Check back to meet every
          member of the Wood Eye Clinic family.
        </p>
      </section>

      <CtaBand />
    </>
  );
}
