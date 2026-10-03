import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import { LotusFlower, PhotoPanel } from "@/components/Decor";

export default function Home() {
  return (
    <>
      {/* HERO — two-column */}
      <section className="relative bg-gradient-to-br from-ivory via-warm-white to-lotus-pale overflow-hidden">
        <LotusFlower className="absolute -top-10 right-0 w-72 text-lotus/15 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 bg-burgundy-pale text-burgundy text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-burgundy inline-block" />
                Now accepting inquiries
              </div>
              <h1 className="font-serif text-5xl sm:text-6xl font-bold text-navy leading-[1.08] tracking-tight">
                Professional Care.
                <br />
                <span className="text-burgundy">Vietnamese Heart.</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-xl">
                Compassionate senior care for Houston families — at home or in
                a warm residential setting.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-burgundy hover:bg-burgundy-dark text-white font-semibold px-8 py-4 rounded-full text-base transition-colors duration-150 shadow-lg hover:shadow-xl"
                >
                  Request a Free Care Consultation
                </Link>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 border-2 border-navy text-navy hover:bg-navy hover:text-white font-semibold px-8 py-4 rounded-full text-base transition-colors duration-150"
                >
                  Explore Our Services
                </a>
              </div>

              {/* Trust items */}
              <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-4 max-w-md">
                {[
                  { icon: <LanguageIcon />, label: "Vietnamese & English" },
                  { icon: <LotusSmallIcon />, label: "Cultural Understanding" },
                  { icon: <FamilyIcon />, label: "Family-Focused Care" },
                  { icon: <MapIcon />, label: "Serving Greater Houston" },
                ].map((t) => (
                  <li key={t.label} className="flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-full bg-green-pale text-green flex items-center justify-center shrink-0">
                      {t.icon}
                    </span>
                    <span className="text-sm font-medium text-charcoal">{t.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — photo slot */}
            <PhotoPanel
              script="Caring Today. Growing Tomorrow."
              className="min-h-80 lg:min-h-105 shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* TWO PRIMARY SERVICE CARDS */}
      <section id="services" className="py-16 md:py-24 bg-warm-white scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Card 1: Home Care — primary launch service */}
            <div className="bg-ivory rounded-3xl border border-beige overflow-hidden flex flex-col shadow-sm">
              <PhotoPanel label="Care at home, together" className="h-44 rounded-none" />
              <div className="p-8 md:p-9 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h2 className="font-serif text-2xl font-bold text-navy">
                    Saigon Home Care
                  </h2>
                  <span className="text-[11px] font-bold uppercase tracking-wide bg-green-pale text-green px-2.5 py-1 rounded-full">
                    Launching first
                  </span>
                </div>
                <p className="text-muted leading-relaxed mb-6">
                  Care where your loved one feels most comfortable — at home.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 mb-8">
                  {[
                    "Companionship",
                    "Bathing & dressing assistance",
                    "Meal preparation",
                    "Light housekeeping",
                    "Transportation & errands",
                    "Medication reminders",
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
                  className="mt-auto inline-flex items-center justify-center gap-2 bg-burgundy hover:bg-burgundy-dark text-white font-semibold px-7 py-3.5 rounded-full transition-colors duration-150 shadow-md"
                >
                  Explore Home Care
                  <ArrowIcon />
                </Link>
              </div>
            </div>

            {/* Card 2: Senior Living Homes */}
            <div className="bg-ivory rounded-3xl border border-beige overflow-hidden flex flex-col shadow-sm">
              <PhotoPanel variant="navy" label="A real home, not a facility" className="h-44 rounded-none" />
              <div className="p-8 md:p-9 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h2 className="font-serif text-2xl font-bold text-navy">
                    Saigon Senior Living Homes
                  </h2>
                  <span className="text-[11px] font-bold uppercase tracking-wide bg-gold-pale text-gold px-2.5 py-1 rounded-full">
                    In development
                  </span>
                </div>
                <p className="text-muted leading-relaxed mb-6">
                  A smaller, more personal alternative to a large
                  assisted-living facility.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 mb-8">
                  {[
                    "Intimate residential setting",
                    "Approximately 6–10 residents",
                    "Private & semi-private room options",
                    "Vietnamese meals",
                    "Personal care assistance",
                    "Medication assistance where permitted",
                    "Social & cultural activities",
                    "Family communication",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-charcoal">
                      <CheckIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/senior-living-homes"
                  className="mt-auto inline-flex items-center justify-center gap-2 bg-navy hover:bg-navy-deep text-white font-semibold px-7 py-3.5 rounded-full transition-colors duration-150 shadow-md"
                >
                  Explore Senior Living Homes
                  <ArrowIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CULTURAL DIFFERENTIATOR */}
      <section className="relative py-16 md:py-24 bg-ivory overflow-hidden">
        <LotusFlower className="absolute -left-16 bottom-0 w-80 text-lotus/25 pointer-events-none" />
        <LotusFlower className="absolute -right-20 top-8 w-64 text-lotus/15 rotate-6 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy">
            Care That Understands Our Culture.
          </h2>
          <p className="mt-6 text-lg text-muted leading-relaxed max-w-3xl mx-auto">
            For many Vietnamese families, caring for aging parents is deeply
            personal. Language, food, respect for elders, traditions and
            family involvement all matter. Saigon Senior Care was created to
            provide professional senior support without asking Mom or Dad to
            leave their culture behind.
          </p>
          <p className="mt-4 text-lg font-semibold text-burgundy">
            All families are welcome.
          </p>
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <BowlIcon />, title: "Vietnamese Meals" },
              { icon: <LanguageIcon />, title: "Language Support" },
              { icon: <FamilyIcon />, title: "Family Values" },
              { icon: <LanternIcon />, title: "Cultural Celebrations" },
            ].map((f) => (
              <div
                key={f.title}
                className="bg-warm-white rounded-2xl border border-beige p-7 flex flex-col items-center gap-3"
              >
                <span className="w-12 h-12 rounded-full bg-burgundy-pale text-burgundy flex items-center justify-center">
                  {f.icon}
                </span>
                <span className="font-semibold text-navy text-sm">{f.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CARE OPTION COMPARISON */}
      <section className="py-16 md:py-24 bg-navy text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold">
              Which Care Option Is Right for Your Family?
            </h2>
            <p className="mt-4 text-gray-300">
              A simple starting point — our care team can help you decide
              during a free consultation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-warm-white text-charcoal rounded-3xl p-8 flex flex-col">
              <h3 className="font-serif text-xl font-bold text-navy mb-1">Home Care</h3>
              <p className="text-sm text-muted mb-5">
                May be right if your loved one:
              </p>
              <ul className="space-y-2.5 mb-8">
                {[
                  "Wants to remain at home",
                  "Needs several hours of assistance",
                  "Still has family nearby",
                  "Needs help with daily activities",
                  "Wants to keep familiar surroundings",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <GreenCheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/home-care"
                className="mt-auto inline-flex items-center justify-center gap-2 bg-burgundy hover:bg-burgundy-dark text-white font-semibold px-6 py-3 rounded-full transition-colors duration-150"
              >
                Explore Home Care
                <ArrowIcon />
              </Link>
            </div>
            <div className="bg-warm-white text-charcoal rounded-3xl p-8 flex flex-col">
              <h3 className="font-serif text-xl font-bold text-navy mb-1">
                Senior Living Home
              </h3>
              <p className="text-sm text-muted mb-5">
                May be right if your loved one:
              </p>
              <ul className="space-y-2.5 mb-8">
                {[
                  "Should not live alone",
                  "Needs help throughout the day or night",
                  "Family cannot provide enough supervision",
                  "Wants companionship",
                  "Prefers a smaller residential environment",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <GreenCheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/senior-living-homes"
                className="mt-auto inline-flex items-center justify-center gap-2 bg-navy hover:bg-navy-deep text-white font-semibold px-6 py-3 rounded-full transition-colors duration-150"
              >
                Explore Senior Living Homes
                <ArrowIcon />
              </Link>
            </div>
          </div>
          <p className="font-script text-3xl text-lotus text-center mt-12">
            A new chapter. The same family values.
          </p>
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
            understand your options — free, with no obligation.
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
              Call (832) 234-6888
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

function GreenCheckIcon() {
  return (
    <svg className="w-5 h-5 text-green shrink-0 mt-px" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function LanguageIcon() {
  return (
    <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
    </svg>
  );
}

function LotusSmallIcon() {
  return (
    <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 200 110">
      <path d="M100 6 C84 32 79 58 100 86 C121 58 116 32 100 6 Z" />
      <path d="M52 30 C48 58 64 80 98 89 C94 62 78 43 52 30 Z" opacity="0.7" />
      <path d="M148 30 C152 58 136 80 102 89 C106 62 122 43 148 30 Z" opacity="0.7" />
    </svg>
  );
}

function FamilyIcon() {
  return (
    <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );
}

function MapIcon() {
  return (
    <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function BowlIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 11h16a8 8 0 01-16 0zM7 11V7m5 4V5m5 6V8" />
    </svg>
  );
}

function LanternIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v3m0 0c-3.314 0-6 3.134-6 7s2.686 7 6 7 6-3.134 6-7-2.686-7-6-7zm0 14v3M9 5.5v12m6-12v12" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
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
