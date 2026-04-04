import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-gold flex items-center justify-center text-white font-bold text-sm">
                S
              </div>
              <div>
                <div className="font-bold text-white text-lg">
                  Saigon Senior Care
                </div>
                <div className="text-xs text-gray-400">Houston, TX</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              A warm, family-oriented assisted living community in Houston, TX.
              We honor Vietnamese traditions while providing world-class care
              for your loved ones.
            </p>
            <div className="mt-5 space-y-2 text-sm text-gray-400">
              <div className="flex items-start gap-2">
                <LocationIcon />
                <span>9999 Bellaire Blvd, Houston, TX 77036</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon />
                <a
                  href="tel:+18322346888"
                  className="hover:text-gold transition-colors"
                >
                  (832) 234-6888
                </a>
              </div>
              <div className="flex items-center gap-2">
                <EmailIcon />
                <a
                  href="mailto:hello@saigonseniorcare.com"
                  className="hover:text-gold transition-colors"
                >
                  hello@saigonseniorcare.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Ready to Visit?
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Come see our community in person. Tours are free and available
              7 days a week.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gold hover:bg-gold-dark text-white text-sm font-semibold px-5 py-3 rounded-full transition-colors duration-150"
            >
              Schedule a Tour
            </Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Saigon Senior Care. All rights
            reserved.
          </p>
          <p>Houston, TX &mdash; Serving the Vietnamese community with heart.</p>
        </div>
      </div>
    </footer>
  );
}

function LocationIcon() {
  return (
    <svg
      className="w-4 h-4 mt-0.5 shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      className="w-4 h-4 shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
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
    <svg
      className="w-4 h-4 shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}
