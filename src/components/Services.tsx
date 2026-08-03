import Link from "next/link";

const services = [
  {
    id: 1,
    flag: "🇨🇳",
    title: "Sourcing from China",
    desc: "Access thousands of verified manufacturers in China. We find the best quality products at competitive prices, negotiate on your behalf, and ensure QC before shipment.",
    href: "https://asiacommerce.net/services/",
    features: ["Factory Verification", "Price Negotiation", "Quality Control"],
    icon: (
      <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none">
        <path d="M8 36V16l16-8 16 8v20l-16 8L8 36z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M24 8v32M8 16l16 8 16-8" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 2,
    flag: "📦",
    title: "Procurement to SEA",
    desc: "Full-service procurement management from purchase order to last-mile delivery across Southeast Asia. We handle customs, logistics, and compliance.",
    href: "https://asiacommerce.net/services/",
    features: ["PO Management", "Customs Clearance", "Compliance"],
    icon: (
      <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none">
        <rect x="6" y="20" width="36" height="22" rx="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M6 28h36M16 20V14a8 8 0 0116 0v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="24" cy="34" r="3" fill="currentColor"/>
      </svg>
    ),
  },
  {
    id: 3,
    flag: "🚚",
    title: "Distribution to SEA",
    desc: "Warehouse, inventory management, and last-mile distribution network across Indonesia, Philippines, Singapore, Malaysia & Thailand.",
    href: "https://asiacommerce.net/services/",
    features: ["Warehousing", "Inventory Mgmt", "Last-Mile Delivery"],
    icon: (
      <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none">
        <path d="M4 32V20l8-12h20l4 8h8v16H4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <circle cx="14" cy="36" r="4" stroke="currentColor" strokeWidth="2"/>
        <circle cx="36" cy="36" r="4" stroke="currentColor" strokeWidth="2"/>
        <path d="M18 36h14M32 20v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 4,
    flag: "📣",
    title: "Promotion to SEA",
    desc: "Market entry strategy, digital marketing, and brand promotion tailored to each Southeast Asian market's culture and consumer behavior.",
    href: "https://asiacommerce.net/services/",
    features: ["Market Entry", "Digital Marketing", "Brand Promotion"],
    icon: (
      <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none">
        <path d="M8 18v12l8 4V14L8 18z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M16 14l20-8v36L16 34" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M10 30l4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="38" cy="24" r="6" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-soft border border-brand/20 text-brand text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Our Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark tracking-tight">
            Four Ways We Power{" "}
            <span className="text-brand">Your Growth</span>
          </h2>
          <p className="mt-4 text-lg text-mid max-w-2xl mx-auto">
            Comprehensive cross-border solutions covering every step from
            sourcing in China to reaching your end customers in Southeast Asia.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div
              key={s.id}
              className={`card-lift group relative bg-white rounded-2xl border border-gray-100 p-7 flex flex-col`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-6 right-6 h-0.5 bg-brand rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-brand-soft text-brand flex items-center justify-center mb-5 group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                {s.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-dark mb-2">{s.title}</h3>

              {/* Desc */}
              <p className="text-sm text-mid leading-relaxed mb-5 flex-1">{s.desc}</p>

              {/* Feature tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {s.features.map((f) => (
                  <span
                    key={f}
                    className="text-xs bg-gray-50 border border-gray-100 text-mid px-2.5 py-1 rounded-full"
                  >
                    {f}
                  </span>
                ))}
              </div>

              {/* Link */}
              <Link
                href={s.href}
                className="inline-flex items-center gap-1.5 text-brand text-sm font-semibold hover:gap-3 transition-all duration-200"
              >
                Learn More
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
