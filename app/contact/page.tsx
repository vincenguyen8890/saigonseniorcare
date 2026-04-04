import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact & Schedule a Tour | Saigon Senior Care Houston",
  description:
    "Schedule a free tour at Saigon Senior Care in Houston, TX. Bilingual staff available. Call us or fill out the form — we respond within one business day.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-cream to-amber-50 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-jade-pale text-jade text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
              Get in Touch
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal leading-tight">
              We&apos;re Ready to Answer{" "}
              <span className="text-gold">Every Question</span>
            </h1>
            <p className="mt-5 text-lg text-muted leading-relaxed">
              Schedule a free tour, ask about availability, or simply get to
              know us. Our bilingual team responds within one business day.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24 bg-warm-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-sm border border-amber-50 p-7 md:p-9">
                <h2 className="text-2xl font-bold text-charcoal mb-2">
                  Schedule a Tour or Ask a Question
                </h2>
                <p className="text-muted text-sm mb-7">
                  Fill out the form below and we&apos;ll get back to you within
                  one business day.
                </p>
                <ContactForm />
              </div>
            </div>

            {/* Info Panel */}
            <div className="lg:col-span-2 space-y-5">
              {/* Quick contact cards */}
              <div className="bg-jade text-white rounded-2xl p-6">
                <div className="text-sm font-semibold text-green-200 mb-1 uppercase tracking-wide">
                  Call Us
                </div>
                <a
                  href="tel:+17135550100"
                  className="text-2xl font-bold hover:text-gold transition-colors"
                >
                  (713) 555-0100
                </a>
                <p className="text-green-200 text-sm mt-2">
                  Available 7 days a week, 8am – 8pm
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-amber-50 shadow-sm p-6">
                <div className="text-sm font-semibold text-muted uppercase tracking-wide mb-3">
                  Location
                </div>
                <p className="text-charcoal font-medium">
                  1234 Bellaire Blvd
                </p>
                <p className="text-charcoal">Houston, TX 77036</p>
                <p className="text-sm text-muted mt-2">
                  Located in the heart of Houston&apos;s Vietnamese community.
                  Ample free parking available.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-amber-50 shadow-sm p-6">
                <div className="text-sm font-semibold text-muted uppercase tracking-wide mb-3">
                  Email
                </div>
                <a
                  href="mailto:hello@saigonseniorcare.com"
                  className="text-jade hover:text-jade-light font-medium transition-colors"
                >
                  hello@saigonseniorcare.com
                </a>
              </div>

              <div className="bg-gold-light rounded-2xl p-6">
                <div className="font-bold text-charcoal mb-2">
                  Tours Available 7 Days a Week
                </div>
                <p className="text-sm text-charcoal/80 leading-relaxed">
                  We welcome walk-ins, but scheduled tours give us time to
                  prepare a personalized experience for your family.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
