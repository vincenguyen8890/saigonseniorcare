import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "In-Home Senior Care | Saigon Home Care — Houston, TX",
  description:
    "Saigon Home Care provides compassionate in-home senior care in the Houston area — personal care, companionship, Vietnamese meal preparation, transportation, and family respite. Request a free care consultation.",
};

const serviceSections = [
  {
    title: "Personal Care",
    desc: "Respectful, hands-on assistance with the daily personal routines that keep your parent safe and comfortable.",
    items: ["Bathing", "Grooming", "Dressing", "Toileting", "Mobility"],
  },
  {
    title: "Companion Care",
    desc: "Genuine companionship that eases loneliness — especially meaningful for parents who feel isolated by language.",
    items: ["Conversation", "Activities", "Walks", "Emotional companionship"],
  },
  {
    title: "Meal & Household Support",
    desc: "Familiar, nourishing meals and a tidy home, so your parent can keep living comfortably in their own space.",
    items: [
      "Vietnamese meal preparation",
      "Grocery assistance",
      "Light housekeeping",
      "Laundry",
    ],
  },
  {
    title: "Transportation & Errands",
    desc: "Safe, reliable rides and a helping hand for the appointments and errands that keep life running.",
    items: [
      "Doctor appointments",
      "Pharmacy",
      "Grocery store",
      "Community activities",
    ],
  },
  {
    title: "Family Respite",
    desc: "Caring for a parent is a labor of love — and it's exhausting. Respite care gives family caregivers time to work, rest, travel, or handle personal responsibilities, knowing someone they trust is there.",
    items: [
      "Flexible scheduling",
      "Short-term or recurring visits",
      "Peace of mind for the whole family",
    ],
  },
];

const steps = [
  {
    step: "1",
    title: "Talk With Our Care Team",
    desc: "Call or send us a message. We'll listen to your family's situation and answer your questions.",
  },
  {
    step: "2",
    title: "Free Care Consultation",
    desc: "We meet with you and your parent to understand needs, routines, preferences, and language.",
  },
  {
    step: "3",
    title: "Create a Personalized Care Plan",
    desc: "Together we build a plan around your parent's needs and your family's schedule and budget.",
  },
  {
    step: "4",
    title: "Match With the Right Caregiver",
    desc: "We thoughtfully match your parent with a caregiver — Vietnamese-speaking when available.",
  },
  {
    step: "5",
    title: "Begin Care",
    desc: "Care begins, and we stay in close communication with your family every step of the way.",
  },
];

export default function HomeCarePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-ivory to-lotus-pale py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-burgundy-pale text-burgundy text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
              Saigon Home Care
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-navy leading-tight">
              Helping Mom and Dad{" "}
              <span className="text-burgundy">Stay Safely at Home.</span>
            </h1>
            <p className="mt-5 text-lg text-muted leading-relaxed max-w-2xl">
              Many families aren&apos;t ready for assisted living — and many
              parents simply want to stay in the home they know. Saigon Home
              Care brings compassionate, culturally familiar support to your
              parent&apos;s own home, from a few hours a week to daily care.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-burgundy hover:bg-burgundy-dark text-white font-semibold px-8 py-4 rounded-full text-base transition-colors duration-150 shadow-lg"
              >
                Request a Free Care Consultation
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

      {/* Services */}
      <section className="py-16 md:py-24 bg-warm-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy">
              How We Help at Home
            </h2>
            <p className="mt-4 text-lg text-muted">
              Every care plan is personalized — choose the support your family
              needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {serviceSections.map((s) => (
              <div
                key={s.title}
                className="bg-ivory rounded-3xl p-8 border border-beige"
              >
                <h3 className="font-serif text-xl font-bold text-navy mb-2">
                  {s.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-5">{s.desc}</p>
                <ul className="flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="bg-warm-white border border-beige-dark text-charcoal text-sm px-3.5 py-1.5 rounded-full"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-navy text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold">
              How Home Care Works
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              A simple, pressure-free process built around your family.
            </p>
          </div>
          <ol className="space-y-6">
            {steps.map((s) => (
              <li
                key={s.step}
                className="flex items-start gap-5 bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <div className="w-11 h-11 rounded-full bg-burgundy flex items-center justify-center font-serif font-bold text-lg shrink-0">
                  {s.step}
                </div>
                <div>
                  <h3 className="font-semibold text-white text-lg">{s.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mt-1">
                    {s.desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-20 bg-ivory text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-navy mb-4">
            Start With a Free Conversation
          </h2>
          <p className="text-muted mb-7 leading-relaxed">
            Tell us about your parent. We&apos;ll help you understand whether
            home care fits — and build a plan around your family. Services
            subject to assessment.
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
