import Link from "next/link";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-ivory via-warm-white to-lotus-pale overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 15% 85%, #8C4351 0%, transparent 50%), radial-gradient(circle at 85% 15%, #1F2E4D 0%, transparent 50%)",
            }}
          />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-burgundy-pale text-burgundy text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-burgundy inline-block" />
              Now accepting inquiries — serving families in the Houston area
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-tight tracking-tight">
              Vietnamese Senior Care That{" "}
              <span className="text-burgundy">Feels Like Family.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-2xl">
              Saigon Senior Care helps Houston families care for aging parents
              through compassionate in-home support and intimate residential
              senior living homes designed around comfort, dignity, culture,
              and family.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-burgundy hover:bg-burgundy-dark text-white font-semibold px-8 py-4 rounded-full text-base transition-colors duration-150 shadow-lg hover:shadow-xl"
              >
                Find Care for My Parent
              </Link>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 border-2 border-navy text-navy hover:bg-navy hover:text-white font-semibold px-8 py-4 rounded-full text-base transition-colors duration-150"
              >
                Explore Our Services
              </a>
            </div>

            {/* Two-path choice */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl">
              <Link
                href="/home-care"
                className="group flex items-center justify-between bg-warm-white border border-beige-dark rounded-2xl px-5 py-4 hover:border-burgundy hover:shadow-md transition-all duration-150"
              >
                <span className="font-semibold text-navy text-sm">
                  I Need Care at Home
                </span>
                <ArrowIcon />
              </Link>
              <Link
                href="/senior-living-homes"
                className="group flex items-center justify-between bg-warm-white border border-beige-dark rounded-2xl px-5 py-4 hover:border-burgundy hover:shadow-md transition-all duration-150"
              >
                <span className="font-semibold text-navy text-sm">
                  I Need a Senior Living Home
                </span>
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TWO SERVICE CARDS */}
      <section id="services" className="py-16 md:py-24 bg-warm-white scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy">
              Two Ways We Care for Your Family
            </h2>
            <p className="mt-4 text-lg text-muted leading-relaxed">
              Whether your parent wants to stay at home or needs more support
              throughout the day, there is a path that fits your family.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Card 1: Home Care */}
            <div className="bg-ivory rounded-3xl p-8 md:p-10 border border-beige flex flex-col">
              <div className="text-xs font-bold tracking-widest text-burgundy uppercase mb-3">
                Saigon Home Care
              </div>
              <h3 className="font-serif text-2xl font-bold text-navy mb-3">
                Care where Mom or Dad already feels most comfortable — at home.
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-6">
                One-on-one, non-medical support delivered in your parent&apos;s
                own home, from a few hours a week to daily assistance.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 mb-8">
                {[
                  "Companionship",
                  "Bathing & grooming assistance",
                  "Dressing assistance",
                  "Meal preparation",
                  "Light housekeeping",
                  "Mobility assistance",
                  "Medication reminders",
                  "Transportation & errands",
                  "Family respite",
                  "Vietnamese-speaking caregivers when available",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-charcoal">
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/home-care"
                className="mt-auto inline-flex items-center justify-center gap-2 bg-navy hover:bg-navy-deep text-white font-semibold px-7 py-3.5 rounded-full transition-colors duration-150 shadow-md"
              >
                Explore Home Care
                <ArrowIcon />
              </Link>
            </div>

            {/* Card 2: Senior Living Homes */}
            <div className="bg-navy rounded-3xl p-8 md:p-10 text-white flex flex-col">
              <div className="text-xs font-bold tracking-widest text-lotus uppercase mb-3">
                Saigon Senior Living Homes
              </div>
              <h3 className="font-serif text-2xl font-bold mb-3">
                A smaller, more personal alternative to a large assisted-living
                facility.
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Intimate residential homes for a small number of seniors —
                family-style living with professional care. Residential
                locations are currently in development.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 mb-8">
                {[
                  "Residential home environment",
                  "Small number of residents",
                  "Private & semi-private room options",
                  "24/7 caregiver presence where applicable",
                  "Vietnamese meals",
                  "Personal care assistance",
                  "Medication assistance consistent with licensing",
                  "Social & cultural activities",
                  "Family communication",
                  "Vietnamese-speaking staff when available",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-100">
                    <CheckIconLight />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/senior-living-homes"
                className="mt-auto inline-flex items-center justify-center gap-2 bg-burgundy hover:bg-burgundy-dark text-white font-semibold px-7 py-3.5 rounded-full transition-colors duration-150 shadow-md"
              >
                Explore Senior Living Homes
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* RESIDENTIAL MODEL COMPARISON */}
      <section className="py-16 md:py-24 bg-ivory">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy">
              Not a Large Institution. A Real Home.
            </h2>
            <p className="mt-4 text-lg text-muted leading-relaxed">
              Our residential senior living homes are intentionally small,
              creating a warm environment where caregivers know each resident
              personally.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-warm-white rounded-3xl p-8 border border-beige">
              <h3 className="font-semibold text-muted text-sm uppercase tracking-wider mb-5">
                Traditional Large Facility
              </h3>
              <ul className="space-y-3">
                {[
                  "Large resident population",
                  "Institutional environment",
                  "Long hallways",
                  "Larger staff rotations",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-charcoal text-sm">
                    <DotIcon className="text-beige-dark" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-burgundy-pale rounded-3xl p-8 border border-lotus">
              <h3 className="font-semibold text-burgundy text-sm uppercase tracking-wider mb-5">
                Saigon Senior Living Home
              </h3>
              <ul className="space-y-3">
                {[
                  "Small residential environment",
                  "More personal attention",
                  "Familiar routines",
                  "Vietnamese food and culture",
                  "Family-style atmosphere",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-charcoal text-sm">
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-center text-sm text-muted mt-8 max-w-2xl mx-auto">
            Many families are wonderfully served by larger communities. We
            simply offer a different model — a large, comfortable residential
            house shared by a small group of seniors, with family-style living
            and professional care.
          </p>
        </div>
      </section>

      {/* CULTURAL DIFFERENTIATION */}
      <section className="py-16 md:py-24 bg-navy text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 text-lotus text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
                Our Difference
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight">
                Care That Understands Our Culture.
              </h2>
              <div className="mt-5 space-y-4 text-gray-300 leading-relaxed">
                <p>
                  For many Vietnamese families, caring for aging parents is
                  deeply personal. Language, food, respect for elders,
                  traditions, and family involvement all matter.
                </p>
                <p>
                  Saigon Senior Care was created to provide professional senior
                  support without asking Mom or Dad to leave their culture
                  behind.
                </p>
                <p className="text-lotus font-semibold">
                  And all families are welcome — Vietnamese heart means warmth
                  for everyone.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Vietnamese & English", desc: "Comfortable communication in the language your parent prefers." },
                { title: "Vietnamese Meals", desc: "Familiar, home-style dishes that taste like family cooking." },
                { title: "Respect for Elders", desc: "Care rooted in traditional family values and dignity." },
                { title: "Tết & Celebrations", desc: "Lunar New Year and cultural holidays celebrated together." },
                { title: "Vietnamese Entertainment", desc: "Music, television, and pastimes that feel like home." },
                { title: "Family Involvement", desc: "Families stay closely connected and involved in care." },
              ].map((f) => (
                <div key={f.title} className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <div className="font-semibold text-white text-sm mb-1.5">{f.title}</div>
                  <p className="text-gray-400 text-xs leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="py-16 md:py-24 bg-warm-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy">
              Is Saigon Senior Care Right for Your Family?
            </h2>
            <p className="mt-4 text-lg text-muted">
              Families usually reach out to us when they recognize moments like
              these:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {[
              "Your parent lives alone and needs increasing assistance.",
              "You are worried about falls or safety.",
              "Family members are becoming overwhelmed providing care.",
              "Your parent speaks primarily Vietnamese and feels isolated.",
              "Your parent needs help with bathing, dressing, meals, or medications.",
              "You want an alternative to a large institutional facility.",
            ].map((item) => (
              <div
                key={item}
                className="bg-ivory rounded-2xl p-6 border border-beige flex items-start gap-3"
              >
                <HeartIcon />
                <p className="text-charcoal text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-burgundy hover:bg-burgundy-dark text-white font-semibold px-8 py-4 rounded-full transition-colors duration-150 shadow-md"
            >
              Talk With a Care Advisor
            </Link>
          </div>
        </div>
      </section>

      {/* DECISION TOOL */}
      <section className="py-16 md:py-24 bg-ivory">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy">
              Which Care Option Is Right?
            </h2>
            <p className="mt-4 text-lg text-muted">
              A simple starting point — our care team can help you decide
              during a free consultation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-warm-white rounded-3xl p-8 border border-beige flex flex-col">
              <h3 className="font-serif text-xl font-bold text-navy mb-1">Home Care</h3>
              <p className="text-sm text-muted mb-5">Best if…</p>
              <ul className="space-y-3 mb-8">
                {[
                  "Your parent wants to remain at home",
                  "They need several hours of assistance",
                  "Family is still nearby",
                  "A residential environment isn't needed yet",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-charcoal text-sm">
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/home-care"
                className="mt-auto inline-flex items-center justify-center gap-2 bg-navy hover:bg-navy-deep text-white font-semibold px-6 py-3 rounded-full transition-colors duration-150"
              >
                Explore Home Care
              </Link>
            </div>
            <div className="bg-warm-white rounded-3xl p-8 border border-beige flex flex-col">
              <h3 className="font-serif text-xl font-bold text-navy mb-1">
                Senior Living Home
              </h3>
              <p className="text-sm text-muted mb-5">Best if…</p>
              <ul className="space-y-3 mb-8">
                {[
                  "Your parent should not live alone",
                  "They need help throughout the day and night",
                  "Family cannot provide enough supervision",
                  "They would enjoy companionship and residential support",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-charcoal text-sm">
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/senior-living-homes"
                className="mt-auto inline-flex items-center justify-center gap-2 bg-burgundy hover:bg-burgundy-dark text-white font-semibold px-6 py-3 rounded-full transition-colors duration-150"
              >
                Explore Senior Living
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />

      {/* FINAL CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-navy to-navy-deep text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight">
            Let&apos;s Talk About Your Family
          </h2>
          <p className="mt-4 text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Tell us about your parent and what you&apos;re looking for. Our
            bilingual care team will listen, answer questions, and help you
            understand your options — free, and with no obligation.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-burgundy hover:bg-burgundy-dark text-white font-bold px-8 py-4 rounded-full text-base transition-colors duration-150 shadow-lg"
            >
              Request a Free Care Consultation
            </Link>
            <a
              href="tel:+18322346888"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-navy font-bold px-8 py-4 rounded-full text-base transition-colors duration-150"
            >
              <PhoneIcon />
              Call Saigon Senior Care
            </a>
          </div>
          <p className="mt-5 text-gray-400 text-sm">
            Services subject to assessment &bull; English &amp; Tiếng Việt
          </p>
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

function CheckIconLight() {
  return (
    <svg className="w-5 h-5 text-lotus shrink-0 mt-px" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function DotIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={`w-5 h-5 shrink-0 mt-px ${className}`} fill="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg className="w-5 h-5 text-burgundy shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}
