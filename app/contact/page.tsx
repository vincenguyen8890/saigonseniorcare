import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Request a Free Care Consultation | Saigon Senior Care — Houston, TX",
  description:
    "Talk with the Saigon Senior Care team about in-home care or residential senior living for your parent. Free consultation, English and Vietnamese, serving Greater Houston, Texas.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-ivory to-lotus-pale py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-burgundy-pale text-burgundy text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
              Free Care Consultation
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-navy leading-tight">
              Let&apos;s Talk About{" "}
              <span className="text-burgundy">Your Family.</span>
            </h1>
            <p className="mt-5 text-lg text-muted leading-relaxed">
              Tell us about your parent and what you&apos;re looking for. A
              care advisor will reach out to listen, answer questions, and
              help you understand your options — in English or Vietnamese.
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
              <div className="bg-white rounded-2xl shadow-sm border border-beige p-7 md:p-9">
                <h2 className="font-serif text-2xl font-bold text-navy mb-2">
                  Request a Free Care Consultation
                </h2>
                <p className="text-muted text-sm mb-7">
                  Fill out the form below and we&apos;ll get back to you
                  within one business day.
                </p>
                <ContactForm />
              </div>
            </div>

            {/* Info Panel */}
            <div className="lg:col-span-2 space-y-5">
              <div className="bg-navy text-white rounded-2xl p-6">
                <div className="text-sm font-semibold text-lotus mb-1 uppercase tracking-wide">
                  Call Saigon Senior Care
                </div>
                <a
                  href="tel:+18322346888"
                  className="text-2xl font-bold hover:text-lotus transition-colors"
                >
                  (832) 234-6888
                </a>
                <p className="text-gray-300 text-sm mt-2">
                  English &amp; Tiếng Việt
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-beige shadow-sm p-6">
                <div className="text-sm font-semibold text-muted uppercase tracking-wide mb-3">
                  Email
                </div>
                <a
                  href="mailto:hello@saigonseniorcare.com"
                  className="text-burgundy hover:text-burgundy-dark font-medium transition-colors"
                >
                  hello@saigonseniorcare.com
                </a>
              </div>

              <div className="bg-white rounded-2xl border border-beige shadow-sm p-6">
                <div className="text-sm font-semibold text-muted uppercase tracking-wide mb-3">
                  Service Area
                </div>
                <p className="text-charcoal font-medium">
                  Serving Greater Houston, Texas
                </p>
                <p className="text-sm text-muted mt-2">
                  Home care comes to you. Residential senior living locations
                  are currently in development — ask about the priority list.
                </p>
              </div>

              <div className="bg-burgundy-pale rounded-2xl p-6">
                <div className="font-bold text-navy mb-2">
                  What happens next?
                </div>
                <p className="text-sm text-charcoal/80 leading-relaxed">
                  A care advisor reaches out within one business day. We
                  listen first, then help you compare options — home care, a
                  senior living home, or simply what to plan for. No pressure,
                  no obligation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
