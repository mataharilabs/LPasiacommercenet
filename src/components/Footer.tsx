import Image from "next/image";
import Link from "next/link";

const cols = [
  {
    title: "Services",
    links: [
      { label: "Sourcing from China",       href: "https://www.asiacommerce.net/services/sourcing" },
      { label: "Procurement to SEA",        href: "https://www.asiacommerce.net/services/procurement" },
      { label: "Distribution to SEA",       href: "https://www.asiacommerce.net/services/distribution" },
      { label: "Promotion to SEA",          href: "https://www.asiacommerce.net/services/promotion" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us",      href: "https://www.asiacommerce.net/about" },
      { label: "Why Choose Us", href: "https://www.asiacommerce.net/about/why-choose-us" },
      { label: "Our Clients",   href: "https://www.asiacommerce.net/about/clients" },
      { label: "Blog",          href: "https://www.asiacommerce.net/blog" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Business Club", href: "https://www.asiacommerce.net/business-club" },
      { label: "Contact Us",    href: "https://www.asiacommerce.net/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        {/* Top */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/logo.png"
              alt="AsiaCommerce"
              width={160}
              height={36}
              className="h-9 w-auto brightness-0 invert mb-4"
            />
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Cross-border Supply Chain Enabler for Southeast Asia. Sourcing,
              procurement, distribution, and promotion — all in one partner.
            </p>
            <div className="flex items-center gap-1 text-white/40 text-sm">
              <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              developer@asiacommerce.net
            </div>
          </div>

          {/* Nav cols */}
          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} AsiaCommerce Network. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {["🇮🇩", "🇵🇭", "🇸🇬", "🇲🇾", "🇹🇭", "🇨🇳"].map((flag) => (
              <span key={flag} className="text-base" title="Coverage region">
                {flag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
