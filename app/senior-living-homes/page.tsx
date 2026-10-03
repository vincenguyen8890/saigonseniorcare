import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Residential Senior Living Homes | Saigon Senior Care — Houston, TX",
  description:
    "Saigon Senior Living Homes are small residential assisted-living homes being developed in the Houston area — personal attention, Vietnamese culture, and the comfort of a real home. Join the priority list.",
};

const dayParts = [
  {
    title: "Morning",
    items: [
      "Vietnamese breakfast",
      "Personal-care assistance",
      "Medication reminders",
    ],
  },
  {
    title: "Afternoon",
    items: [
      "Lunch together",
      "Activities & light exercise",
      "Walks",
      "TV, mạt chược / cards",
      "Conversation",
    ],
  },
  {
    title: "Evening",
    items: [
      "Home-cooked dinner",
      "Family calls",
      "Relaxation",
      "Bedtime assistance",
    ],
  },
];

export default function SeniorLivingHomesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-ivory to-navy-pale py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-navy-pale text-navy text-sm font-semibold px-4 py-1.5 rounded-full mb-5 border border-navy/10">
              Saigon Senior Living Homes
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-navy leading-tight">
              A Smaller Assisted-Living Home for{" "}
              <span className="text-burgundy">Someone You Love.</span>
            </h1>
            <p className="mt-4 text-xl text-charcoal font-medium">
              Personal attention, Vietnamese culture, and the comfort of a
              residential home.
            </p>
            <p className="mt-4 text-lg text-muted leading-relaxed max-w-2xl">
              Instead of a large assisted-living campus, Saigon Senior Care is
              developing intimate residential senior living homes for a small
              number of residents — a real house, family-style living, and
              caregivers who know each resident personally.
            </p>
            <div className="mt-6 bg-warm-white border border-beige-dark rounded-2xl p-5 max-w-2xl">
              <p className="text-sm text-charcoal leading-relaxed">
                <span className="font-semibold text-burgundy">
                  Residential locations are currently being developed.
                </span>{" "}
                Join our priority list for availability updates — we&apos;ll
                reach out as soon as we can share more.
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-burgundy hover:bg-burgundy-dark text-white font-semibold px-8 py-4 rounded-full text-base transition-colors duration-150 shadow-lg"
              >
                Join the Priority List
              </Link>
              <a
                href="tel:+18322346888"
                className="inline-flex items-center justify-center gap-2 border-2 border-navy text-navy hover:bg-navy hover:text-white font-semibold px-8 py-4 rounded-full text-base transition-colors duration-150"
              >
                Call (832) 234-6888
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What Life Can Look Like */}
      <section className="py-16 md:py-24 bg-warm-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy">
              What Life Can Look Like
            </h2>
            <p className="mt-4 text-lg text-muted">
              Familiar rhythms, good food, and company — the way home should
              feel.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {dayParts.map((part) => (
              <div
                key={part.title}
                className="bg-ivory rounded-3xl p-7 border border-beige"
              >
                <h3 className="font-serif text-lg font-bold text-burgundy mb-4">
                  {part.title}
                </h3>
                <ul className="space-y-2.5">
                  {part.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-charcoal">
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms, Care, Culture */}
      <section className="py-16 md:py-24 bg-ivory">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-warm-white rounded-3xl p-8 border border-beige">
              <h3 className="font-serif text-xl font-bold text-navy mb-4">
                Room Options
              </h3>
              <ul className="space-y-2.5">
                {["Private room", "Semi-private room"].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-charcoal">
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-muted mt-5 leading-relaxed">
                Contact us for availability as locations are developed.
              </p>
            </div>
            <div className="bg-warm-white rounded-3xl p-8 border border-beige">
              <h3 className="font-serif text-xl font-bold text-navy mb-4">
                Everyday Care
              </h3>
              <ul className="space-y-2.5">
                {[
                  "24/7 support where applicable",
                  "Bathing & dressing assistance",
                  "Mobility support",
                  "Meals, housekeeping & laundry",
                  "Medication support according to licensing",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-charcoal">
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-warm-white rounded-3xl p-8 border border-beige">
              <h3 className="font-serif text-xl font-bold text-navy mb-4">
                Culture & Community
              </h3>
              <ul className="space-y-2.5">
                {[
                  "Vietnamese-speaking staff when available",
                  "Vietnamese food",
                  "Vietnamese television & music",
                  "Holiday celebrations — Lunar New Year / Tết",
                  "Family-centered atmosphere",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-charcoal">
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-center text-sm text-muted mt-10 max-w-2xl mx-auto">
            Not a large institution. A real home — intentionally small, so
            caregivers know each resident personally. All families are
            welcome.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-navy text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold mb-4">
            Be First to Know
          </h2>
          <p className="text-gray-300 mb-7 leading-relaxed">
            Join the priority list and we&apos;ll keep your family updated as
            residential locations become available. In the meantime, our home
            care team can support your parent today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-burgundy hover:bg-burgundy-dark text-white font-bold px-8 py-4 rounded-full transition-colors duration-150 shadow-lg text-base"
            >
              Join the Priority List
            </Link>
            <Link
              href="/home-care"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-navy font-bold px-8 py-4 rounded-full transition-colors duration-150 text-base"
            >
              Explore Home Care
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-burgundy shrink-0 mt-px" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}
