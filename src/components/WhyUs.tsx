const pillars = [
  {
    title: "Verified Supplier Network",
    desc: "Direct access to thousands of pre-vetted factories and suppliers in China with proven quality records.",
    icon: (
      <svg viewBox="0 0 40 40" className="w-7 h-7" fill="none">
        <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M12 20l5 5 11-11" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "End-to-End Solution",
    desc: "One partner for the entire supply chain — sourcing, logistics, warehousing, and market promotion.",
    icon: (
      <svg viewBox="0 0 40 40" className="w-7 h-7" fill="none">
        <path d="M6 20h28M26 14l8 6-8 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="10" cy="20" r="3" stroke="currentColor" strokeWidth="1.8"/>
      </svg>
    ),
  },
  {
    title: "Deep Market Expertise",
    desc: "Over 10 years navigating Southeast Asian regulations, customs, and consumer markets across 6 countries.",
    icon: (
      <svg viewBox="0 0 40 40" className="w-7 h-7" fill="none">
        <circle cx="20" cy="16" r="8" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M8 34c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Competitive Pricing",
    desc: "Our scale and direct factory relationships mean you get the best prices without sacrificing quality.",
    icon: (
      <svg viewBox="0 0 40 40" className="w-7 h-7" fill="none">
        <path d="M20 6v28M14 10l6-4 6 4M14 30l6 4 6-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 18h20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Dedicated Support",
    desc: "A dedicated account manager fluent in your language and business needs, from day one.",
    icon: (
      <svg viewBox="0 0 40 40" className="w-7 h-7" fill="none">
        <path d="M8 30V24a12 12 0 0124 0v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="20" cy="14" r="6" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M8 30a2 2 0 002 2h4v-8H8v6zM30 30a2 2 0 01-2 2h-4v-8h6v6z" stroke="currentColor" strokeWidth="1.8"/>
      </svg>
    ),
  },
  {
    title: "Proven Track Record",
    desc: "Trusted by 2,965+ entrepreneurs and growing brands from across Southeast Asia and beyond.",
    icon: (
      <svg viewBox="0 0 40 40" className="w-7 h-7" fill="none">
        <path d="M20 6l3.6 7.3L32 14.6l-6 5.8 1.4 8.2L20 24.8l-7.4 3.8 1.4-8.2-6-5.8 8.4-1.3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function WhyUs() {
  return (
    <section id="why" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <div className="inline-flex items-center gap-2 bg-white border border-brand/20 text-brand text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Why AsiaCommerce
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark tracking-tight leading-tight">
              The Smartest Way to Scale{" "}
              <span className="text-brand">Cross-Border</span>
            </h2>
          </div>
          <p className="text-lg text-mid leading-relaxed lg:pb-2">
            We remove the complexity of cross-border trade so you can focus on
            growing your business. Here's why over 2,900 entrepreneurs trust us
            as their supply chain partner.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className="bg-white rounded-2xl p-7 border border-gray-100 card-lift group"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-soft text-brand flex items-center justify-center mb-5 group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                {p.icon}
              </div>
              <h3 className="text-base font-bold text-dark mb-2">{p.title}</h3>
              <p className="text-sm text-mid leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
