export default function Concept() {
  const stats = [
    { value: "100+", label: "Menu Items" },
    { value: "3", label: "Florida Locations" },
    { value: "2011", label: "Since" },
  ];

  return (
    <section
      className="section-padding"
      style={{ backgroundColor: "var(--surface)" }}
      aria-label="Our Concept"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Side */}
          <div>
            <h2
              className="text-4xl sm:text-5xl mb-6"
              style={{ color: "var(--text-primary)" }}
            >
              Not a Buffet. A Celebration.
            </h2>
            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "var(--text-secondary)" }}
            >
              At Koizi, every dish is made to order by our skilled chefs. Unlike
              traditional buffets where food sits under heat lamps, our endless
              dining experience means you order as much as you want, and we
              prepare it fresh — just for you.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              From hand-rolled sushi to sizzling hibachi prepared right at your
              table, every plate arrives at its peak. That&apos;s the Koizi
              promise — unlimited portions, uncompromised quality.
            </p>
          </div>

          {/* Stats Side */}
          <div className="grid grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="text-4xl sm:text-5xl font-bold mb-2"
                  style={{ color: "var(--accent)" }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-sm sm:text-base uppercase tracking-wider"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
