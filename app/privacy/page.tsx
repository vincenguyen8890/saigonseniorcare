import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Saigon Senior Care",
  description: "How Saigon Senior Care collects, uses, and protects the information you share with us.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <section className="py-16 md:py-24 bg-warm-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl font-bold text-navy mb-8">Privacy Policy</h1>
        <div className="space-y-6 text-charcoal leading-relaxed text-[15px]">
          <p>
            Saigon Senior Care (&ldquo;we,&rdquo; &ldquo;us&rdquo;) respects
            your privacy. This policy describes how we handle information you
            share with us through this website.
          </p>
          <h2 className="font-serif text-2xl font-bold text-navy pt-2">Information We Collect</h2>
          <p>
            When you submit our contact form or chat with our website
            assistant, we collect the information you choose to provide —
            such as your name, phone number, email address, and details about
            the care you are considering.
          </p>
          <h2 className="font-serif text-2xl font-bold text-navy pt-2">How We Use It</h2>
          <p>
            We use this information only to respond to your inquiry, discuss
            care options with you, and keep you updated if you join our
            priority list. We do not sell or share your personal information
            with third parties for marketing purposes.
          </p>
          <h2 className="font-serif text-2xl font-bold text-navy pt-2">Service Providers</h2>
          <p>
            Form submissions are processed by our form provider, and website
            chat is powered by a third-party AI service. Please avoid
            including sensitive medical details in website messages — those
            conversations are better had directly with our care team by
            phone.
          </p>
          <h2 className="font-serif text-2xl font-bold text-navy pt-2">Your Choices</h2>
          <p>
            You may contact us at any time to ask what information we hold
            about you or to request its deletion:{" "}
            <a href="mailto:hello@saigonseniorcare.com" className="text-burgundy hover:underline">
              hello@saigonseniorcare.com
            </a>{" "}
            or (832) 234-6888.
          </p>
          <p className="text-muted text-sm pt-4">
            We may update this policy as our services grow. Material changes
            will be posted on this page.
          </p>
        </div>
      </div>
    </section>
  );
}
