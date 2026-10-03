import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Saigon Senior Care — Houston, TX",
  description:
    "Saigon Senior Care was built around family — professional senior support with the language, food, and traditions that make aging parents feel at home. Serving Greater Houston, Texas.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    title: "Family",
    desc: "We treat every senior the way we would want our own parents treated — and we keep families closely involved in care.",
  },
  {
    title: "Dignity",
    desc: "Every person deserves care that honors their independence, their history, and their individuality.",
  },
  {
    title: "Respect",
    desc: "Respect for elders is at the heart of Vietnamese culture — and at the heart of how we work.",
  },
  {
    title: "Safety",
    desc: "Thoughtful, attentive care focused on keeping seniors safe and comfortable, at home or in ours.",
  },
  {
    title: "Culture",
    desc: "Language, food, music, and traditions aren't extras — they're what make care feel like home.",
  },
  {
    title: "Communication",
    desc: "Families should never wonder how a loved one is doing. We communicate openly and often.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-ivory to-lotus-pale py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-burgundy-pale text-burgundy text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
              About Saigon Senior Care
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-navy leading-tight">
              Built Around <span className="text-burgundy">Family.</span>
            </h1>
            <p className="mt-5 text-lg text-muted leading-relaxed">
              Saigon Senior Care was created around a simple idea: aging
              parents deserve professional support without losing the
              language, food, traditions, and family environment that make
              them feel at home.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-24 bg-warm-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold text-navy mb-5">
                Our Mission
              </h2>
              <p className="text-xl text-charcoal leading-relaxed font-medium">
                To help seniors live safely, comfortably, and with dignity —
                while helping families feel confident that someone they love
                is genuinely cared for.
              </p>
              <div className="mt-6 space-y-4 text-muted leading-relaxed">
                <p>
                  For many Vietnamese families in Houston, finding senior care
                  that understands the culture — the language, the food, the
                  respect for elders — has been nearly impossible. Too often,
                  the choice has been between family members carrying the
                  entire weight of caregiving, or a large facility where Mom
                  or Dad feels like a stranger.
                </p>
                <p>
                  We&apos;re building a third option: compassionate in-home
                  care, and small residential senior living homes where a
                  handful of seniors live family-style with professional
                  support. Vietnamese at heart — and welcoming to every
                  family.
                </p>
              </div>
            </div>
            <div className="bg-navy rounded-3xl p-10 text-white">
              <div className="font-serif text-2xl font-bold mb-2">
                Professional Care. Vietnamese Heart.
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-8">
                Two ways we serve families in the Houston area:
              </p>
              <div className="space-y-4">
                <Link
                  href="/home-care"
                  className="block bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-5 transition-colors"
                >
                  <div className="font-semibold text-lotus mb-1">
                    Saigon Home Care
                  </div>
                  <p className="text-gray-300 text-sm">
                    Caregivers who support your parent in their own home.
                  </p>
                </Link>
                <Link
                  href="/senior-living-homes"
                  className="block bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-5 transition-colors"
                >
                  <div className="font-semibold text-lotus mb-1">
                    Saigon Senior Living Homes
                  </div>
                  <p className="text-gray-300 text-sm">
                    Small residential homes with family-style living and 24/7
                    care where applicable. Locations in development.
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-ivory">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy">
              What We Stand For
            </h2>
            <p className="mt-4 text-lg text-muted">
              Six values guide every decision we make.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-warm-white rounded-2xl p-7 border border-beige"
              >
                <h3 className="font-serif text-xl font-bold text-burgundy mb-3">
                  {v.title}
                </h3>
                <p className="text-charcoal text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-20 bg-navy text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold mb-4">
            We&apos;d Love to Meet Your Family
          </h2>
          <p className="text-gray-300 mb-7 leading-relaxed">
            Whether you&apos;re just beginning to research options or need
            support soon, start with a free, no-pressure conversation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-burgundy hover:bg-burgundy-dark text-white font-bold px-8 py-4 rounded-full transition-colors duration-150 shadow-lg text-base"
          >
            Request a Free Care Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
