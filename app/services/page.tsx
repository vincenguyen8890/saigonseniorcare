import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Saigon Senior Care Houston",
  description:
    "Explore the full range of assisted living services at Saigon Senior Care in Houston — from daily living support to memory care and respite programs.",
};

const services = [
  {
    title: "Assisted Daily Living",
    icon: "🤝",
    desc: "Personalized support with bathing, dressing, grooming, mobility, and daily routines — all delivered with privacy and dignity.",
    features: [
      "Personal hygiene assistance",
      "Mobility and transfer support",
      "Dressing and grooming",
      "Toileting and incontinence care",
    ],
  },
  {
    title: "Memory Care",
    icon: "🧠",
    desc: "A secure, calm, and nurturing environment for residents with Alzheimer's or other forms of dementia.",
    features: [
      "Structured daily routine",
      "Wandering prevention",
      "Cognitive stimulation activities",
      "Trained dementia specialists",
    ],
  },
  {
    title: "Medication Management",
    icon: "💊",
    desc: "Licensed nurses ensure every resident receives the right medication at the right time — safely and consistently.",
    features: [
      "Prescription management",
      "Medication reminders",
      "Nurse oversight",
      "Physician coordination",
    ],
  },
  {
    title: "Physical & Occupational Therapy",
    icon: "🏃",
    desc: "On-site therapy programs to help residents regain strength, maintain independence, and recover from illness or surgery.",
    features: [
      "Physical therapy",
      "Occupational therapy",
      "Fall prevention",
      "Post-hospital recovery",
    ],
  },
  {
    title: "Vietnamese Cuisine & Nutrition",
    icon: "🍜",
    desc: "Our chef-prepared meals celebrate Vietnamese culinary heritage with fresh, nutritious, home-style cooking.",
    features: [
      "3 daily meals + snacks",
      "Traditional Vietnamese dishes",
      "Dietary accommodations",
      "Family-style dining",
    ],
  },
  {
    title: "Cultural & Social Activities",
    icon: "🎭",
    desc: "Meaningful activities that celebrate Vietnamese traditions, promote connection, and keep residents engaged.",
    features: [
      "Tết and cultural celebrations",
      "Vietnamese language classes",
      "Music and arts programs",
      "Community outings",
    ],
  },
  {
    title: "Respite Care",
    icon: "🌿",
    desc: "Short-term care for seniors when family caregivers need a break — available for days, weeks, or months.",
    features: [
      "Flexible stay durations",
      "Full access to all amenities",
      "Same standard of care",
      "Trial stays available",
    ],
  },
  {
    title: "24/7 Care Monitoring",
    icon: "🛡️",
    desc: "Around-the-clock on-site staff ensures residents are safe, comfortable, and supported at all hours.",
    features: [
      "Night-shift caregivers",
      "Emergency response systems",
      "Health monitoring",
      "Family notifications",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-cream to-amber-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-gold-light text-gold-dark text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
              What We Offer
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal leading-tight">
              Complete Care Under{" "}
              <span className="text-gold">One Roof</span>
            </h1>
            <p className="mt-5 text-lg text-muted leading-relaxed max-w-2xl">
              From daily assistance to specialized memory care, every service
              at Saigon Senior Care is delivered with warmth, cultural
              understanding, and professional excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-warm-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-2xl p-7 shadow-sm border border-amber-50 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{service.icon}</div>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-charcoal mb-2">
                      {service.title}
                    </h2>
                    <p className="text-muted text-sm leading-relaxed mb-4">
                      {service.desc}
                    </p>
                    <ul className="grid grid-cols-2 gap-y-1.5 gap-x-3">
                      {service.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-2 text-sm text-charcoal"
                        >
                          <svg
                            className="w-4 h-4 text-jade shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing note */}
      <section className="py-12 bg-jade-pale">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-jade mb-4">
            Transparent, Personalized Pricing
          </h2>
          <p className="text-charcoal text-base leading-relaxed max-w-xl mx-auto mb-7">
            Every resident has unique needs. We offer personalized care plans
            with clear, upfront pricing — no surprises. Most long-term care
            insurance plans accepted.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white font-bold px-8 py-4 rounded-full transition-colors duration-150 shadow-md text-base"
          >
            Request a Personalized Quote
          </Link>
        </div>
      </section>
    </>
  );
}
