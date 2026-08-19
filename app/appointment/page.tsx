import Glass from "@/components/Glass";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Photo from "@/components/Photo";
import AppointmentForm from "@/components/AppointmentForm";
import { clinic } from "@/lib/site";

/* Metadata is applied in the sitewide metadata pass. */

export default function AppointmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Schedule an Eye Exam"
        title="Request your appointment"
        description="Tell us when works for you and our team will call to confirm your time. Prefer to talk it through? Give us a call and we will get you scheduled."
      />

      <section className="px-6 pb-4 pt-4">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <Photo
              src="/img/office/reception.webp"
              alt="The reception desk at Wood Eye Clinic in downtown Pontotoc"
              className="aspect-[16/6]"
              rounded="rounded-[2rem]"
            />
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-10">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <AppointmentForm />
          </Reveal>

          <div className="space-y-5" data-track-location="appointment_page">
            <Reveal delay={100}>
              <Glass tint className="p-8">
                <h2 className="font-display text-xl font-bold text-ink">
                  Rather book by phone?
                </h2>
                <p className="mt-2 text-ink/70">
                  A quick call during office hours is still the fastest way to
                  get on the schedule.
                </p>
                <a
                  href={clinic.phoneHref}
                  className="mt-4 inline-block rounded-full bg-brand px-6 py-3 font-bold text-white transition-all duration-300 hover:bg-brand-dark"
                >
                  {clinic.phone}
                </a>
              </Glass>
            </Reveal>

            <Reveal delay={150}>
              <Glass strong className="p-8">
                <h2 className="font-display text-xl font-bold text-ink">
                  Already a patient?
                </h2>
                <p className="mt-2 text-ink/70">
                  Pick your own time in our online scheduler, any hour of the
                  day.
                </p>
                <a
                  href={clinic.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block rounded-full border-2 border-brand px-6 py-3 font-bold text-brand transition-all duration-300 hover:bg-brand hover:text-white"
                >
                  Book Online
                </a>
              </Glass>
            </Reveal>

            <Reveal delay={200}>
              <Glass tint className="p-8">
                <h3 className="text-sm font-bold uppercase tracking-widest text-brand">
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
                <address className="mt-5 border-t border-ink/10 pt-5 text-sm not-italic leading-relaxed text-ink/75">
                  {clinic.address.street}
                  <br />
                  {clinic.address.city}, {clinic.address.state} {clinic.address.zip}
                </address>
              </Glass>
            </Reveal>

            <Reveal delay={250}>
              <Glass strong className="p-8">
                <h3 className="font-display text-lg font-bold text-ink">
                  What to bring
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-ink/75">
                  <li>Your current glasses or contact lenses</li>
                  <li>Your vision and medical insurance cards</li>
                  <li>A list of any medications you take</li>
                  <li>Any questions you have about your vision</li>
                </ul>
                <p className="mt-4 text-sm text-ink/60">
                  New patients: arriving a few minutes early helps us get your
                  paperwork started.
                </p>
              </Glass>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
