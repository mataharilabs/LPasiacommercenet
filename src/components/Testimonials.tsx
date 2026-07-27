const testimonials = [
  {
    quote:
      "AsiaCommerce completely changed how we source products from China. The quality control and logistics support saved us from a lot of costly mistakes. Our procurement costs dropped by 30%.",
    name: "Budi Santoso",
    title: "CEO, PT Maju Bersama",
    country: "🇮🇩 Indonesia",
    initials: "BS",
    rating: 5,
  },
  {
    quote:
      "From finding the right suppliers to distributing products in the Philippines, AsiaCommerce handled everything seamlessly. Their team understands Southeast Asian markets inside out.",
    name: "Maria Dela Cruz",
    title: "Founder, TradePH Solutions",
    country: "🇵🇭 Philippines",
    initials: "MD",
    rating: 5,
  },
  {
    quote:
      "The Business Club membership was a game changer. The exclusive network and monthly market insights helped us identify opportunities in Malaysia and Thailand we never would have found ourselves.",
    name: "Ahmad Farid",
    title: "Director, CrossBorder MY",
    country: "🇲🇾 Malaysia",
    initials: "AF",
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.368-2.448a1 1 0 00-1.175 0l-3.368 2.448c-.784.57-1.838-.197-1.54-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.062 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z"/>
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-soft border border-brand/20 text-brand text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark tracking-tight">
            Trusted by <span className="text-brand">Entrepreneurs</span>
            <br />Across Southeast Asia
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="card-lift bg-slate-50 rounded-2xl p-7 border border-gray-100 flex flex-col"
            >
              {/* Quote mark */}
              <div className="text-brand/20 text-6xl font-serif leading-none mb-2 select-none">&ldquo;</div>

              <Stars count={t.rating} />

              <blockquote className="text-dark-2/80 text-sm leading-relaxed flex-1 mb-6">
                {t.quote}
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-bold text-dark">{t.name}</div>
                  <div className="text-xs text-mid">{t.title}</div>
                  <div className="text-xs text-mid mt-0.5">{t.country}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
