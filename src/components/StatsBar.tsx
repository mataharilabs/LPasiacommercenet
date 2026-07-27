const stats = [
  { value: "2,965+", label: "Entrepreneurs Helped" },
  { value: "6",      label: "SE Asian Countries" },
  { value: "10+",    label: "Years of Experience" },
  { value: "500+",   label: "Products Sourced" },
];

export default function StatsBar() {
  return (
    <section className="bg-brand py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl lg:text-5xl font-extrabold text-white mb-1">
                {s.value}
              </div>
              <div className="text-white/70 text-sm font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
