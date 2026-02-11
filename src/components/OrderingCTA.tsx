const orderLocations = [
  { name: "Tampa Palms", url: "https://order.simplemenu.com/store/1810" },
  { name: "New Port Richey", url: "https://www.koiziendlesshibachisushieatery.com/" },
  { name: "Royal Palm Beach", url: "https://koizifl.com/" },
];

export default function OrderingCTA() {
  return (
    <section
      className="section-padding"
      style={{ backgroundColor: "var(--background)" }}
      aria-label="Order Now"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2
          className="text-4xl sm:text-5xl mb-4"
          style={{ color: "var(--accent)" }}
        >
          Ready to Feast?
        </h2>
        <p
          className="text-base sm:text-lg mb-8 max-w-xl mx-auto"
          style={{ color: "var(--text-secondary)" }}
        >
          Order online for pickup or delivery. Also available on DoorDash,
          Uber Eats, and Grubhub.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          {orderLocations.map((loc) => (
            <a
              key={loc.name}
              href={loc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 hover:opacity-90 hover:scale-105"
              style={{
                backgroundColor: "var(--primary)",
                color: "var(--text-primary)",
              }}
            >
              Order {loc.name}
            </a>
          ))}
        </div>

        <div className="mb-8">
          <a
            href="tel:8139711919"
            className="inline-block px-8 py-4 rounded-lg text-lg font-medium border-2 transition-all duration-300 hover:scale-105"
            style={{
              borderColor: "var(--accent)",
              color: "var(--accent)",
              backgroundColor: "transparent",
            }}
          >
            Call to Reserve
          </a>
        </div>

        {/* Delivery Platforms */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          {["DoorDash", "Uber Eats", "Grubhub"].map((platform) => (
            <span
              key={platform}
              className="text-sm font-medium uppercase tracking-wider px-4 py-2 rounded-full"
              style={{
                color: "var(--text-secondary)",
                backgroundColor: "var(--surface)",
              }}
            >
              {platform}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
