import type { Metadata } from "next";
import Link from "next/link";
import { PhotoPanel } from "@/components/Decor";

export const metadata: Metadata = {
  title: "Small Residential Assisted Living in Houston | Saigon Senior Living Homes",
  description:
    "Saigon Senior Living Homes are small residential assisted living homes in development for Greater Houston — about 6–10 residents, Vietnamese meals and culture, and family-style care. Join the priority list.",
  alternates: { canonical: "/senior-living-homes" },
};

const features = [
  { icon: <ResidentsIcon />, title: "6–10 Residents", desc: "An intimate setting where caregivers know everyone personally." },
  { icon: <DoorIcon />, title: "Private & Semi-Private Rooms", desc: "Room options to fit comfort and budget." },
  { icon: <BowlIcon />, title: "Vietnamese Meals", desc: "Familiar, home-style dishes every day." },
  { icon: <HandHeartIcon />, title: "Personal Care Assistance", desc: "Bathing, dressing, mobility and daily support." },
  { icon: <ClockIcon />, title: "24/7 Caregiver Presence Where Applicable", desc: "Attentive support around the clock." },
  { icon: <HomeIcon />, title: "Family-Style Environment", desc: "A real home — shared meals, routines and company." },
];

const dayParts = [
  {
    title: "Morning",
    items: ["Vietnamese breakfast", "Personal-care assistance", "Medication reminders"],
  },
  {
    title: "Afternoon",
    items: ["Lunch", "Activities & exercise", "TV, mạt chược / cards", "Walks", "Social time"],
  },
  {
    title: "Evening",
    items: ["Home-cooked dinner", "Family calls", "Relaxation", "Bedtime assistance"],
  },
];

export default function SeniorLivingHomesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-ivory to-navy-pale py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-navy-pale text-navy text-sm font-semibold px-4 py-1.5 rounded-full mb-5 border border-navy/10">
                Senior Living Homes
              </div>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-navy leading-tight">
                A Smaller Assisted-Living Home for{" "}
                <span className="text-burgundy">Someone You Love.</span>
              </h1>
              <p className="mt-4 text-xl text-charcoal font-medium">
                Personal attention, Vietnamese culture and the comfort of a
                residential home.
              </p>
              <p className="mt-4 text-muted leading-relaxed">
                Saigon Senior Care is currently developing its first
                residential senior living homes in the Houston area.
              </p>
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
                  Call Saigon Senior Care
                </a>
              </div>
            </div>
            <PhotoPanel
              variant="navy"
              script="A real home, with room to belong."
              className="min-h-72 shadow-xl hidden lg:flex"
            />
          </div>
        </div>
      </section>

      {/* Residential model explanation */}
      <section className="py-16 md:py-24 bg-warm-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy">
              Not a Large Campus. A Real Home.
            </h2>
            <p className="mt-4 text-lg text-muted leading-relaxed">
              Instead of a large assisted-living campus, Saigon Senior Care is
              developing intimate residential senior living homes designed for
              a small number of residents.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-ivory rounded-2xl border border-beige p-6 flex items-start gap-4"
              >
                <span className="w-11 h-11 rounded-full bg-burgundy-pale text-burgundy flex items-center justify-center shrink-0">
                  {f.icon}
                </span>
                <div>
                  <h3 className="font-semibold text-navy text-sm mb-1">{f.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Life Can Look Like */}
      <section className="py-16 md:py-24 bg-ivory">
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
              <div key={part.title} className="bg-warm-white rounded-3xl p-7 border border-beige">
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

      {/* Development notice banner */}
      <section className="py-14 md:py-16 bg-warm-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-burgundy-pale border border-lotus rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6">
            <span className="w-14 h-14 rounded-full bg-burgundy text-white flex items-center justify-center shrink-0">
              <HomeIcon />
            </span>
            <div className="flex-1">
              <h2 className="font-serif text-2xl font-bold text-navy mb-2">
                Residential Locations Are in Development
              </h2>
              <p className="text-charcoal/80 leading-relaxed">
                We are currently developing our first residential senior
                living home in the Houston area. Join our priority list to
                receive updates about availability, location and next steps.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-burgundy hover:bg-burgundy-dark text-white font-semibold px-7 py-3.5 rounded-full transition-colors duration-150 shadow-md shrink-0"
            >
              Join the Priority List
            </Link>
          </div>
          <p className="text-center text-sm text-muted mt-8">
            In the meantime, our{" "}
            <Link href="/home-care" className="text-burgundy font-medium hover:underline">
              home care team
            </Link>{" "}
            can support your parent today. All families are welcome.
          </p>
        </div>
      </section>
    </>
  );
}

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-green shrink-0 mt-px" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function ResidentsIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );
}

function DoorIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 21V5a2 2 0 012-2h8a2 2 0 012 2v16M4 21h16M14 12h.01" />
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

function HandHeartIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  );
}
