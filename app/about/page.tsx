import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Saigon Senior Care Houston",
  description:
    "Learn about Saigon Senior Care — our story, our mission, and why we built Houston's premier Vietnamese-focused assisted living community.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-cream to-amber-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-jade-pale text-jade text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
              Our Story
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal leading-tight">
              Built by a Family, <span className="text-gold">For Families</span>
            </h1>
            <p className="mt-5 text-lg text-muted leading-relaxed">
              Saigon Senior Care was founded with a simple belief: Vietnamese
              seniors deserve care that truly understands them — their
              language, their food, their values, and their spirit.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24 bg-warm-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-jade-pale rounded-3xl p-10 flex items-center justify-center min-h-64">
              <div className="text-center text-jade">
                <div className="text-6xl mb-4">🏡</div>
                <div className="font-semibold text-lg">Our Community</div>
                <div className="text-sm text-jade-light mt-1">Houston, TX</div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-charcoal mb-5">
                Why We Started
              </h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  When our founder&apos;s grandmother needed assisted living care,
                  the family searched throughout Houston. Facility after
                  facility felt cold, unfamiliar, and disconnected from her
                  world. She couldn&apos;t communicate with staff. The food was
                  foreign to her. She felt alone.
                </p>
                <p>
                  That experience became the seed for Saigon Senior Care. We
                  set out to create the community we wished had existed — one
                  where Vietnamese elders are not just housed, but truly
                  celebrated.
                </p>
                <p>
                  Today, our community is home to residents from across
                  Houston&apos;s Vietnamese diaspora. Families tell us their loved
                  ones are happier, more engaged, and more vibrant than they
                  have been in years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal">
              Our Mission & Values
            </h2>
            <p className="mt-4 text-lg text-muted">
              Everything we do is guided by these core principles.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Dignity First",
                desc: "Every resident is treated with the deepest respect — for their history, their independence, and their individuality.",
                color: "bg-gold-light",
                textColor: "text-gold-dark",
              },
              {
                title: "Cultural Pride",
                desc: "We actively celebrate Vietnamese culture through language, food, festivals, and traditions — not as a marketing point, but as a genuine expression of who we are.",
                color: "bg-jade-pale",
                textColor: "text-jade",
              },
              {
                title: "Family Partnership",
                desc: "We view family as an essential part of care. Regular communication, transparency, and involvement are not optional — they are how we operate.",
                color: "bg-amber-50",
                textColor: "text-gold-dark",
              },
            ].map((v) => (
              <div
                key={v.title}
                className={`${v.color} rounded-2xl p-7`}
              >
                <h3 className={`text-xl font-bold mb-3 ${v.textColor}`}>
                  {v.title}
                </h3>
                <p className="text-charcoal text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24 bg-warm-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal">
              Meet Our Team
            </h2>
            <p className="mt-4 text-lg text-muted">
              Our licensed, bilingual care team is the heart of everything we do.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                name: "Dr. Hoa Nguyen",
                role: "Medical Director",
                bio: "Board-certified geriatrician with 20 years of experience caring for Vietnamese-American seniors.",
              },
              {
                name: "Lan Thi Pham",
                role: "Director of Care",
                bio: "Registered nurse and native Vietnamese speaker dedicated to compassionate, person-centered care.",
              },
              {
                name: "Thomas Le",
                role: "Community Director",
                bio: "Family liaison and activities coordinator who ensures every resident feels engaged and celebrated.",
              },
            ].map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl p-6 shadow-sm border border-amber-50 text-center"
              >
                <div className="w-16 h-16 bg-jade-pale rounded-full flex items-center justify-center text-jade text-2xl font-bold mx-auto mb-4">
                  {member.name.charAt(0)}
                </div>
                <h3 className="font-bold text-charcoal text-lg">{member.name}</h3>
                <div className="text-gold text-sm font-medium mt-0.5 mb-3">
                  {member.role}
                </div>
                <p className="text-muted text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-jade text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            Come See Our Community in Person
          </h2>
          <p className="text-green-100 mb-7 leading-relaxed">
            The best way to understand what makes Saigon Senior Care different
            is to experience it. Schedule your free tour today.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white font-bold px-8 py-4 rounded-full transition-colors duration-150 shadow-lg text-base"
          >
            Schedule a Free Tour
          </Link>
        </div>
      </section>
    </>
  );
}
