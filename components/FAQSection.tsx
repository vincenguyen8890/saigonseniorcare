"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Do you have Vietnamese-speaking staff?",
    a: "Yes. Our care team is fully bilingual in Vietnamese and English. Your loved one can communicate comfortably in their preferred language every day.",
  },
  {
    q: "What meals do you serve?",
    a: "We offer home-cooked Vietnamese cuisine alongside American options. Our kitchen prepares fresh, balanced meals daily — including phở, bún bò, and traditional family favorites.",
  },
  {
    q: "How do I know if assisted living is the right choice?",
    a: "If your parent needs help with daily activities like bathing, dressing, or medication — but doesn't require full nursing home care — assisted living is often the ideal solution. Our team offers free consultations to help you decide.",
  },
  {
    q: "Can family visit anytime?",
    a: "Absolutely. We have an open-door visitation policy. Families are always welcome, and we encourage involvement in care planning and community activities.",
  },
  {
    q: "What is the cost of care?",
    a: "Pricing depends on the level of care and room type. We offer transparent pricing with no hidden fees. Contact us for a personalized quote.",
  },
  {
    q: "Do you accept long-term care insurance?",
    a: "Yes, we work with most long-term care insurance plans. Our team can help you navigate the paperwork and maximize your benefits.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted">
            Have more questions?{" "}
            <a href="/contact" className="text-gold hover:underline font-medium">
              We&apos;re happy to help.
            </a>
          </p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-amber-50 overflow-hidden shadow-sm"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left group"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-charcoal group-hover:text-gold transition-colors pr-4">
                  {faq.q}
                </span>
                <span
                  className={`text-gold shrink-0 transition-transform duration-200 ${
                    open === i ? "rotate-45" : ""
                  }`}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-muted text-sm leading-relaxed border-t border-amber-50 pt-4">
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
