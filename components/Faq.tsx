import { faqs } from "@/lib/site";

export default function Faq() {
  return (
    <div className="space-y-3">
      {faqs.map((faq) => (
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
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
            </span>
          </summary>
          <p className="px-6 pb-6 leading-relaxed text-ink/70">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
