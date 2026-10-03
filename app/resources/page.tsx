import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Family Resources | Saigon Senior Care — Houston, TX",
  description:
    "Guides for Houston families navigating senior care decisions — home care vs. assisted living, costs, and how to talk with aging parents about care.",
};

const articles = [
  {
    title: "How Much Does Home Care Cost in Houston?",
    desc: "What affects the hourly cost of in-home care, and how families typically plan for it.",
  },
  {
    title: "Home Care vs. Assisted Living: What's the Difference?",
    desc: "A clear comparison to help you understand which model fits your parent's needs.",
  },
  {
    title: "When Is It Time for Assisted Living?",
    desc: "Signs that a parent may need more support than family can provide at home.",
  },
  {
    title: "How to Talk to Vietnamese Parents About Senior Care",
    desc: "Approaching a sensitive conversation with respect for culture and family roles.",
  },
  {
    title: "What Is a Residential Assisted Living Home?",
    desc: "How small, home-based senior living differs from large assisted-living campuses.",
  },
  {
    title: "How to Choose Senior Care for Vietnamese Parents",
    desc: "What to look for when language, food, and culture matter to your family.",
  },
  {
    title: "Signs an Aging Parent Shouldn't Live Alone",
    desc: "Safety, nutrition, isolation, and memory — what to watch for and what to do next.",
  },
  {
    title: "Medicaid and Senior Care in Texas: What Families Should Know",
    desc: "An overview of how Texas families navigate paying for long-term care.",
  },
];

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-ivory to-navy-pale py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-navy-pale text-navy text-sm font-semibold px-4 py-1.5 rounded-full mb-5 border border-navy/10">
              Family Resources
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-navy leading-tight">
              Helping You Make a{" "}
              <span className="text-burgundy">Confident Decision.</span>
            </h1>
            <p className="mt-5 text-lg text-muted leading-relaxed">
              Choosing care for a parent is one of the hardest decisions a
              family makes. We&apos;re building a library of practical,
              honest guides for Houston families — no jargon, no pressure.
            </p>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16 md:py-24 bg-warm-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((a) => (
              <div
                key={a.title}
                className="bg-ivory rounded-2xl p-7 border border-beige flex flex-col"
              >
                <h2 className="font-serif text-lg font-bold text-navy mb-2">
                  {a.title}
                </h2>
                <p className="text-muted text-sm leading-relaxed flex-1">{a.desc}</p>
                <div className="mt-4">
                  <span className="inline-block text-xs font-semibold text-burgundy bg-burgundy-pale px-3 py-1 rounded-full">
                    Coming soon
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-navy rounded-3xl p-8 md:p-10 text-white text-center">
            <h2 className="font-serif text-2xl font-bold mb-3">
              Have a Question Right Now?
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xl mx-auto mb-6">
              You don&apos;t have to wait for an article. Our care team is
              happy to answer questions about care options, costs, and how to
              get started — in English or Vietnamese.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-burgundy hover:bg-burgundy-dark text-white font-semibold px-7 py-3.5 rounded-full transition-colors duration-150"
            >
              Talk With a Care Advisor
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
