import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Services | Saigon Senior Care — Houston, TX",
  description:
    "Saigon Senior Care offers two service lines for Houston families: in-home senior care and small residential senior living homes. Explore which fits your family.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <section className="py-16 md:py-24 bg-warm-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-burgundy-pale text-burgundy text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
            Our Services
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-navy leading-tight">
            Two Ways We Care for Your Family
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Saigon Senior Care provides culturally familiar senior care
            through in-home support and small residential senior living
            homes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Link
            href="/home-care"
            className="group bg-ivory hover:bg-lotus-pale rounded-3xl p-8 border border-beige hover:border-lotus transition-colors"
          >
            <div className="text-xs font-bold tracking-widest text-burgundy uppercase mb-3">
              Saigon Home Care
            </div>
            <h2 className="font-serif text-2xl font-bold text-navy mb-3">
              Care at Home
            </h2>
            <p className="text-muted text-sm leading-relaxed mb-5">
              Companionship, personal care, Vietnamese meal preparation,
              transportation, and family respite — in your parent&apos;s own
              home.
            </p>
            <span className="font-semibold text-burgundy text-sm">
              Explore Home Care →
            </span>
          </Link>
          <Link
            href="/senior-living-homes"
            className="group bg-ivory hover:bg-navy-pale rounded-3xl p-8 border border-beige hover:border-navy/20 transition-colors"
          >
            <div className="text-xs font-bold tracking-widest text-navy uppercase mb-3">
              Saigon Senior Living Homes
            </div>
            <h2 className="font-serif text-2xl font-bold text-navy mb-3">
              A Senior Living Home
            </h2>
            <p className="text-muted text-sm leading-relaxed mb-5">
              Small residential assisted-living homes with family-style
              living, Vietnamese culture, and professional care. Locations in
              development — join the priority list.
            </p>
            <span className="font-semibold text-navy text-sm">
              Explore Senior Living Homes →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
