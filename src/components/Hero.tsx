import Link from "next/link";

const stats = [
  { value: "2,965+", label: "Entrepreneurs Helped" },
  { value: "6",      label: "Countries Covered" },
  { value: "10+",    label: "Years Experience" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-dark flex items-center overflow-hidden">
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid" />

      {/* Red gradient blob top-right */}
      <div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #E8002D 0%, transparent 70%)" }}
      />
      {/* Subtle blob bottom-left */}
      <div
        className="absolute -bottom-60 -left-40 w-[500px] h-[500px] rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #E8002D 0%, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left – copy */}
        <div>
          {/* Badge */}
          <div className="animate-fade-in inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
            <span className="text-white/80 text-sm font-medium">
              Cross-border Supply Chain Enabler for Southeast Asia
            </span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-in-up delay-1 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
            Grow Your Business{" "}
            <span className="text-brand">Across Southeast Asia</span>
          </h1>

          {/* Sub */}
          <p className="animate-fade-in-up delay-2 mt-6 text-lg text-white/60 leading-relaxed max-w-xl">
            From sourcing in China to distributing and promoting across Indonesia,
            Philippines, Singapore, Malaysia & Thailand — we handle your entire
            cross-border supply chain.
          </p>

          {/* CTAs */}
          <div className="animate-fade-in-up delay-3 mt-8 flex flex-wrap gap-4">
            <Link
              href="https://asiacommerce.net/contact/"
              className="inline-flex items-center gap-2 bg-brand text-white font-semibold px-7 py-3.5 rounded-full hover:bg-brand-hover transition-colors shadow-lg shadow-brand/30"
            >
              Get Free Consultation
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="https://asiacommerce.net/services/"
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-semibold px-7 py-3.5 rounded-full hover:bg-white/20 transition-colors"
            >
              View Services
            </Link>
          </div>

          {/* Stats */}
          <div className="animate-fade-in-up delay-4 mt-12 flex flex-wrap gap-8">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-extrabold text-white">{s.value}</div>
                <div className="text-sm text-white/50 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right – graphic */}
        <div className="hidden lg:flex justify-center items-center animate-fade-in delay-3">
          <div className="relative w-[460px] h-[460px]">
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full border border-white/10" />
            <div className="absolute inset-8 rounded-full border border-white/8" />
            <div className="absolute inset-16 rounded-full border border-white/6" />

            {/* Center box icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-float bg-dark-2 border border-white/10 rounded-3xl p-10 shadow-2xl">
                <svg viewBox="0 0 80 80" className="w-24 h-24" fill="none">
                  <rect x="8" y="30" width="64" height="42" rx="4" fill="#E8002D" fillOpacity="0.15" stroke="#E8002D" strokeWidth="1.5"/>
                  <path d="M8 38h64" stroke="#E8002D" strokeWidth="1.5"/>
                  <path d="M30 30V20a10 10 0 0120 0v10" stroke="#E8002D" strokeWidth="1.5" strokeLinecap="round"/>
                  <circle cx="40" cy="52" r="5" fill="#E8002D"/>
                  {/* Flag dots representing countries */}
                  <circle cx="22" cy="64" r="2.5" fill="#E8002D" fillOpacity="0.6"/>
                  <circle cx="32" cy="64" r="2.5" fill="#E8002D" fillOpacity="0.6"/>
                  <circle cx="48" cy="64" r="2.5" fill="#E8002D" fillOpacity="0.6"/>
                  <circle cx="58" cy="64" r="2.5" fill="#E8002D" fillOpacity="0.6"/>
                </svg>
              </div>
            </div>

            {/* Floating country badges */}
            {[
              { label: "🇨🇳 China",       top: "6%",  left: "52%"  },
              { label: "🇮🇩 Indonesia",   top: "50%", left: "88%"  },
              { label: "🇵🇭 Philippines", top: "82%", left: "60%"  },
              { label: "🇸🇬 Singapore",   top: "80%", left: "15%"  },
              { label: "🇲🇾 Malaysia",    top: "48%", left: "-8%"  },
              { label: "🇹🇭 Thailand",    top: "12%", left: "6%"   },
            ].map((b) => (
              <div
                key={b.label}
                className="absolute bg-dark-2/90 border border-white/10 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full whitespace-nowrap"
                style={{ top: b.top, left: b.left, transform: "translate(-50%, -50%)" }}
              >
                {b.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
