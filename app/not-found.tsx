import Link from "next/link";
import Glass from "@/components/Glass";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center px-6 py-20">
      <Glass strong className="max-w-lg p-10 text-center">
        <p className="font-display text-6xl font-bold text-brand">20/404</p>
        <h1 className="mt-4 font-display text-2xl font-bold text-ink">
          This page is out of focus
        </h1>
        <p className="mt-3 text-ink/70">
          We could not find the page you were looking for. Let us get you back
          to something clearer.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block rounded-full bg-brand px-8 py-3.5 font-bold text-white transition-all duration-300 hover:bg-brand-dark"
        >
          Back to Home
        </Link>
      </Glass>
    </section>
  );
}
