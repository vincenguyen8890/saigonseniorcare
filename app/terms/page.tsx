import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | Saigon Senior Care",
  description: "Terms of use for the Saigon Senior Care website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <section className="py-16 md:py-24 bg-warm-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl font-bold text-navy mb-8">Terms of Use</h1>
        <div className="space-y-6 text-charcoal leading-relaxed text-[15px]">
          <p>
            By using the Saigon Senior Care website, you agree to these
            terms.
          </p>
          <h2 className="font-serif text-2xl font-bold text-navy pt-2">Informational Purposes</h2>
          <p>
            The content on this website is provided for general information
            about our services. It is not medical, legal, or financial
            advice, and it does not establish a care relationship. All
            services are subject to an individual assessment, availability,
            and a separate service agreement.
          </p>
          <h2 className="font-serif text-2xl font-bold text-navy pt-2">Services in Development</h2>
          <p>
            Descriptions of our residential senior living homes reflect the
            model we are developing. Residential locations are not yet open;
            availability, features, and services will be confirmed as
            locations are completed and licensed.
          </p>
          <h2 className="font-serif text-2xl font-bold text-navy pt-2">Website Assistant</h2>
          <p>
            Our website chat assistant provides general information and may
            make mistakes. Please confirm important details directly with
            our care team at (832) 234-6888.
          </p>
          <h2 className="font-serif text-2xl font-bold text-navy pt-2">Contact</h2>
          <p>
            Questions about these terms? Email{" "}
            <a href="mailto:hello@saigonseniorcare.com" className="text-burgundy hover:underline">
              hello@saigonseniorcare.com
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
