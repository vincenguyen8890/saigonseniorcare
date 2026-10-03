import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="font-serif font-bold text-white text-xl mb-1">
              Saigon Senior Care
            </div>
            <div className="text-sm text-lotus mb-4">
              Professional Care. Vietnamese Heart.
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Compassionate in-home care and intimate residential senior
              living homes for Houston families — built around comfort,
              dignity, culture, and family. All families are welcome.
            </p>
            <div className="mt-5 space-y-2 text-sm text-gray-400">
              <div className="flex items-start gap-2">
                <LocationIcon />
                <span>Serving Greater Houston, Texas</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon />
                <a href="tel:+18322346888" className="hover:text-lotus transition-colors">
                  (832) 234-6888
                </a>
              </div>
              <div className="flex items-center gap-2">
                <EmailIcon />
                <a
                  href="mailto:hello@saigonseniorcare.com"
                  className="hover:text-lotus transition-colors"
                >
                  hello@saigonseniorcare.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              {[
                { href: "/home-care", label: "Home Care" },
                { href: "/senior-living-homes", label: "Senior Living Homes" },
                { href: "/about", label: "About" },
                { href: "/resources", label: "Resources" },
                { href: "/contact", label: "Contact" },
                { href: "/privacy", label: "Privacy" },
                { href: "/terms", label: "Terms" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-lotus transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Ready to Talk?
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Tell us about your family. A care advisor will reach out to
              discuss options — no pressure, no obligation.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-burgundy hover:bg-burgundy-dark text-white text-sm font-semibold px-5 py-3 rounded-full transition-colors duration-150"
            >
              Request a Free Care Consultation
            </Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 text-sm text-gray-500 space-y-3">
          <p className="text-xs leading-relaxed max-w-3xl">
            Services are subject to an individual care assessment and
            availability. Residential senior living locations are currently
            in development — contact us to join the priority list for
            availability updates.
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <p>
              &copy; {new Date().getFullYear()} Saigon Senior Care. All rights
              reserved.
            </p>
            <p>English | Tiếng Việt &mdash; Houston, Texas</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function LocationIcon() {
  return (
    <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}
