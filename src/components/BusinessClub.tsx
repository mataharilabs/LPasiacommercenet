import Link from "next/link";

const benefits = [
  "Exclusive member pricing on all sourcing services",
  "Monthly sourcing & market insights report",
  "Priority access to new factory partners",
  "Private networking events with SE Asian entrepreneurs",
  "Dedicated business consultant",
  "Free quarterly business audit",
];

export default function BusinessClub() {
  return (
    <section id="business-club" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left – text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-brand/20 border border-brand/30 text-brand text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              ✦ Exclusive Membership
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
              AsiaCommerce{" "}
              <span className="text-brand">Business Club</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Join an exclusive community of Southeast Asian entrepreneurs who
              leverage our network, expertise, and relationships to build
              thriving cross-border businesses.
            </p>

            <ul className="space-y-3 mb-10">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand/20 border border-brand/30 flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-white/70 text-sm">{b}</span>
                </li>
              ))}
            </ul>

            <Link
              href="https://asiacommerce.net/asiacommerce-business-club/"
              className="inline-flex items-center gap-2 bg-brand text-white font-semibold px-8 py-4 rounded-full hover:bg-brand-hover transition-colors shadow-lg shadow-brand/30"
            >
              Join the Business Club
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Right – card */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              {/* Glow */}
              <div className="absolute -inset-4 bg-brand/10 rounded-3xl blur-2xl" />

              <div className="relative bg-dark-2 border border-white/10 rounded-3xl p-8 overflow-hidden">
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-brand/10 rounded-full -translate-y-1/2 translate-x-1/2" />

                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-brand text-white text-xs font-bold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wide">
                  Member Card
                </div>

                <div className="text-white/40 text-xs mb-1 uppercase tracking-widest">
                  AsiaCommerce
                </div>
                <div className="text-white text-2xl font-extrabold mb-6">
                  Business Club
                </div>

                {/* Divider */}
                <div className="border-t border-white/10 mb-6" />

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { v: "2,965+", l: "Members" },
                    { v: "6",      l: "Countries" },
                    { v: "10+",    l: "Years" },
                    { v: "500+",   l: "Products" },
                  ].map((s) => (
                    <div key={s.l}>
                      <div className="text-white text-xl font-extrabold">{s.v}</div>
                      <div className="text-white/40 text-xs">{s.l}</div>
                    </div>
                  ))}
                </div>

                {/* Perks pills */}
                <div className="flex flex-wrap gap-2">
                  {["Priority Access", "Insights Report", "Networking", "Consultant"].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-white/8 border border-white/10 text-white/60 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
