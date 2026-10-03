"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What does Saigon Senior Care do?",
    a: "We provide two kinds of culturally familiar senior care for Houston-area families: Saigon Home Care, where caregivers support your parent in their own home, and Saigon Senior Living Homes — small residential assisted-living homes currently in development, where a small group of seniors live family-style with professional care.",
  },
  {
    q: "Do you have Vietnamese-speaking caregivers?",
    a: "Supporting Vietnamese language and culture is central to who we are. We match families with Vietnamese-speaking caregivers and staff whenever available, and our care advisors can speak with your family in English or Vietnamese.",
  },
  {
    q: "Are your senior living homes open yet?",
    a: "Residential locations are currently being developed. Join our priority list and we'll keep your family updated on availability. In the meantime, our home care services can support your parent today.",
  },
  {
    q: "Do you only serve Vietnamese families?",
    a: "No — all families are welcome. Our care is rooted in Vietnamese culture and language, but the warmth, respect, and family-style approach are for everyone.",
  },
  {
    q: "How much does care cost?",
    a: "Costs depend on the type of care and the level of support your parent needs, which we determine together during a free care consultation and assessment. Contact us and we'll walk you through pricing clearly — no surprises.",
  },
  {
    q: "How do we get started?",
    a: "Start with a free care consultation. Call (832) 234-6888 or send us a message — we'll listen to your family's situation, answer questions, and help you decide whether home care or a senior living home is the right fit.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 bg-lotus-pale">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted">
            Have more questions?{" "}
            <a href="/contact" className="text-burgundy hover:underline font-medium">
              We&apos;re happy to help.
            </a>
          </p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-beige overflow-hidden shadow-sm"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left group"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-navy group-hover:text-burgundy transition-colors pr-4">
                  {faq.q}
                </span>
                <span
                  className={`text-burgundy shrink-0 transition-transform duration-200 ${
                    open === i ? "rotate-45" : ""
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-muted text-sm leading-relaxed border-t border-beige pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
