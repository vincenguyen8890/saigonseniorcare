import Link from "next/link";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-cream via-warm-white to-amber-50 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 80%, #C8922A 0%, transparent 50%), radial-gradient(circle at 80% 20%, #2D6A4F 0%, transparent 50%)",
            }}
          />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-jade-pale text-jade text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-jade inline-block" />
              Serving Houston&apos;s Vietnamese Community
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal leading-tight tracking-tight">
              Your Parents Deserve More Than a Facility.{" "}
              <span className="text-gold">They Deserve a Home.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-2xl">
              At Saigon Senior Care, we combine compassionate, professional
              care with the warmth of Vietnamese culture — so your loved ones
              feel truly at home, every single day.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-white font-semibold px-8 py-4 rounded-full text-base transition-colors duration-150 shadow-lg hover:shadow-xl"
              >
                <CalendarIcon />
                Schedule a Free Tour
              </Link>
              <a
                href="tel:+18322346888"
                className="inline-flex items-center justify-center gap-2 border-2 border-jade text-jade hover:bg-jade hover:text-white font-semibold px-8 py-4 rounded-full text-base transition-colors duration-150"
              >
                <PhoneIcon />
                (832) 234-6888
              </a>
            </div>
            <p className="mt-4 text-sm text-muted">
              Tours available 7 days a week &bull; No obligation &bull; Bilingual staff
            </p>
          </div>
        </div>
      </section>

      {/* TRUST SIGNALS */}
      <section className="bg-jade text-white py-10 md:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: "15+", label: "Years Serving Families" },
              { number: "200+", label: "Families Cared For" },
              { number: "24/7", label: "On-Site Care Team" },
              { number: "4.9★", label: "Average Family Rating" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold text-gold">
                  {stat.number}
                </div>
                <div className="text-sm text-green-100 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 md:py-24 bg-warm-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal">
              Why Families Choose Saigon Senior Care
            </h2>
            <p className="mt-4 text-lg text-muted leading-relaxed">
              We built this community because we believe Vietnamese seniors
              deserve care that honors their culture, language, and dignity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <HeartIcon />,
                title: "Culturally Fluent Care",
                desc: "Bilingual Vietnamese-English staff who understand your family's traditions, food preferences, and values.",
              },
              {
                icon: <ShieldIcon />,
                title: "Safety You Can Trust",
                desc: "Licensed caregivers, medication management, and 24-hour monitoring in a secure, peaceful environment.",
              },
              {
                icon: <HomeIcon />,
                title: "Feels Like Home",
                desc: "Private and semi-private rooms, home-cooked Vietnamese meals, and a warm community atmosphere.",
              },
              {
                icon: <FamilyIcon />,
                title: "Family Partnership",
                desc: "We keep families closely connected with regular updates, open-door visitation, and family events.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-amber-50 hover:shadow-md transition-shadow duration-200"
              >
                <div className="w-12 h-12 bg-gold-light rounded-xl flex items-center justify-center text-gold mb-4">
                  {card.icon}
                </div>
                <h3 className="font-bold text-charcoal text-lg mb-2">
                  {card.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-gold-light text-gold-dark text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
                Our Services
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal leading-tight">
                Comprehensive Care, Designed Around Your Loved One
              </h2>
              <p className="mt-4 text-muted text-lg leading-relaxed">
                From daily assistance to memory care, we offer a full spectrum
                of services — all under one roof.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Assisted Daily Living (ADL) Support",
                  "Memory Care & Dementia Support",
                  "Medication Management",
                  "Physical & Occupational Therapy",
                  "Vietnamese Cuisine & Nutrition",
                  "Cultural Activities & Social Programs",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-charcoal">
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white font-semibold px-7 py-3.5 rounded-full transition-colors duration-150 shadow-md"
                >
                  View All Services
                  <ArrowIcon />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-jade-pale rounded-3xl p-8 md:p-10">
                <div className="bg-white rounded-2xl p-6 shadow-sm mb-4">
                  <div className="text-jade font-bold text-lg mb-1">
                    Assisted Living
                  </div>
                  <p className="text-muted text-sm">
                    24-hour support with daily activities, personal care, and
                    professional medical oversight.
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm mb-4">
                  <div className="text-jade font-bold text-lg mb-1">
                    Memory Care
                  </div>
                  <p className="text-muted text-sm">
                    Specialized, compassionate care for residents with
                    Alzheimer&apos;s and dementia.
                  </p>
                </div>
                <div className="bg-gold rounded-2xl p-6 text-white">
                  <div className="font-bold text-lg mb-1">Respite Care</div>
                  <p className="text-white/80 text-sm">
                    Short-term care options to give family caregivers the rest
                    they deserve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 md:py-24 bg-warm-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal">
              Families Trust Us With What Matters Most
            </h2>
            <p className="mt-4 text-lg text-muted">
              Hear from families who chose Saigon Senior Care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "Moving my mother here was the best decision our family made. The staff speak Vietnamese, the food is wonderful, and she has truly blossomed here.",
                name: "Linh Nguyen",
                relation: "Daughter of resident",
                stars: 5,
              },
              {
                quote:
                  "After visiting 6 facilities, Saigon Senior Care was the only one where my father smiled. The warmth here is genuine — not performed.",
                name: "Minh Tran",
                relation: "Son of resident",
                stars: 5,
              },
              {
                quote:
                  "The team keeps us informed about everything. We live in California, but we never feel far away because the communication is so consistent and caring.",
                name: "Kim Pham",
                relation: "Daughter of resident",
                stars: 5,
              },
            ].map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl p-6 shadow-sm border border-amber-50 flex flex-col"
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <span key={i} className="text-gold text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-charcoal text-sm leading-relaxed flex-1 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-5 pt-4 border-t border-amber-50">
                  <div className="font-semibold text-charcoal text-sm">
                    {t.name}
                  </div>
                  <div className="text-xs text-muted mt-0.5">{t.relation}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />

      {/* FINAL CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-jade to-jade-light text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Take the First Step Today
          </h2>
          <p className="mt-4 text-lg text-green-100 leading-relaxed max-w-2xl mx-auto">
            Schedule a free tour and see why Houston families trust Saigon
            Senior Care. Our bilingual team is ready to answer every question.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-white font-bold px-8 py-4 rounded-full text-base transition-colors duration-150 shadow-lg"
            >
              <CalendarIcon />
              Schedule a Free Tour
            </Link>
            <a
              href="tel:+18322346888"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-jade font-bold px-8 py-4 rounded-full text-base transition-colors duration-150"
            >
              <PhoneIcon />
              Call Us Now
            </a>
          </div>
          <p className="mt-5 text-green-200 text-sm">
            Open 7 days a week &bull; Bilingual staff &bull; No pressure, just answers
          </p>
        </div>
      </section>
    </>
  );
}

function CalendarIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
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

function HeartIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  );
}

function FamilyIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-jade shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}
