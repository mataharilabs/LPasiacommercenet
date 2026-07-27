import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="py-20 bg-brand relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Blobs */}
      <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/10 rounded-full" />
      <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-white/10 rounded-full" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
          Ready to Expand Your Business?
        </h2>
        <p className="text-white/75 text-lg mb-10 max-w-2xl mx-auto">
          Join 2,965+ entrepreneurs who scaled their business across Southeast Asia
          with AsiaCommerce. Start with a free consultation today.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="https://www.asiacommerce.net/contact"
            className="inline-flex items-center gap-2 bg-white text-brand font-bold px-8 py-4 rounded-full hover:bg-gray-50 transition-colors shadow-xl"
          >
            Get Free Consultation
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="https://www.asiacommerce.net/business-club"
            className="inline-flex items-center gap-2 border-2 border-white/50 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-colors"
          >
            Join Business Club
          </Link>
        </div>
      </div>
    </section>
  );
}
