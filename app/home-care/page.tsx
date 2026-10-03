import type { Metadata } from "next";
import Link from "next/link";
import { PhotoPanel } from "@/components/Decor";

export const metadata: Metadata = {
  title: "Vietnamese Home Care in Houston | Saigon Home Care",
  description:
    "In-home senior care for Greater Houston families — personal care, companionship, Vietnamese meal preparation, transportation, and family respite, with Vietnamese-speaking caregivers when available.",
  alternates: { canonical: "/home-care" },
};

const services = [
  {
    icon: <HandHeartIcon />,
    title: "Personal Care",
    desc: "Bathing, grooming, dressing, toileting and mobility.",
  },
  {
    icon: <ChatHeartIcon />,
    title: "Companion Care",
    desc: "Conversation, activities, walks and emotional support.",
  },
  {
    icon: <BowlIcon />,
    title: "Meal & Household Support",
    desc: "Vietnamese meals, groceries, light housekeeping and laundry.",
  },
  {
    icon: <CarIcon />,
    title: "Transportation",
    desc: "Doctor appointments, pharmacy, errands and community activities.",
  },
  {
    icon: <LeafIcon />,
    title: "Family Respite",
    desc: "Support that gives family caregivers time to work, rest or manage other responsibilities.",
  },
];

const steps = [
  { step: "1", title: "Talk With Our Care Team" },
  { step: "2", title: "Free Care Consultation" },
  { step: "3", title: "Create a Personalized Care Plan" },
  { step: "4", title: "Match With the Right Caregiver" },
  { step: "5", title: "Begin Care" },
];

export default function HomeCarePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-ivory to-lotus-pale py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-burgundy-pale text-burgundy text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
                Home Care
              </div>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-navy leading-tight">
                Helping Mom and Dad{" "}
                <span className="text-burgundy">Stay Safely at Home.</span>
              </h1>
              <p className="mt-5 text-lg text-muted leading-relaxed">
                Our in-home care services are designed to help seniors live
                comfortably and independently in the place they know and love.
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
            <PhotoPanel
              script="Comfort begins at home."
              className="min-h-72 shadow-xl hidden lg:flex"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-warm-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy">
              Our Home Care Services
            </h2>
            <p className="mt-4 text-lg text-muted">
              Every care plan is personalized — choose the support your family
              needs.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-ivory rounded-2xl border border-beige p-6 flex flex-col items-center text-center gap-3"
              >
                <span className="w-12 h-12 rounded-full bg-green-pale text-green flex items-center justify-center">
                  {s.icon}
                </span>
                <h3 className="font-serif font-bold text-navy">{s.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Home Care Works — stepper */}
      <section className="py-16 md:py-24 bg-ivory">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy">
              How Home Care Works
            </h2>
            <p className="mt-4 text-lg text-muted">
              A simple, pressure-free process built around your family.
            </p>
          </div>
          {/* Horizontal on desktop, vertical on mobile */}
          <ol className="flex flex-col md:flex-row md:items-start gap-6 md:gap-0">
            {steps.map((s, i) => (
              <li key={s.step} className="flex md:flex-col md:flex-1 items-center md:text-center gap-4 md:gap-3 relative">
                {i < steps.length - 1 && (
                  <span className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-beige-dark" aria-hidden="true" />
                )}
                <span className="relative z-10 w-12 h-12 rounded-full bg-burgundy text-white font-serif font-bold text-lg flex items-center justify-center shrink-0 ring-4 ring-ivory">
                  {s.step}
                </span>
                <span className="font-semibold text-navy text-sm md:px-3">{s.title}</span>
              </li>
            ))}
          </ol>
          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-burgundy hover:bg-burgundy-dark text-white font-bold px-8 py-4 rounded-full transition-colors duration-150 shadow-lg"
            >
              Request a Free Care Consultation
            </Link>
            <p className="mt-4 text-sm text-muted">
              Services subject to assessment &bull; Serving Greater Houston,
              Texas
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function HandHeartIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  );
}

function ChatHeartIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
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

function CarIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h8l2 5v5a1 1 0 01-1 1h-1a1 1 0 01-1-1v-1H9v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-5l2-5zM6 12h12M8.5 15h.01m7 0h.01" />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 19c6 0 14-4 14-14-8 0-14 4-14 10 0 1.5.3 2.8 1 4zm0 0c2-4 5-7 9-9" />
    </svg>
  );
}
