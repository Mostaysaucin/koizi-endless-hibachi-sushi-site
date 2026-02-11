const locations = [
  {
    name: "Tampa Palms",
    badge: "Original Location",
    address: "17012 Palm Pointe Dr",
    city: "Tampa, FL 33647",
    phone: "(813) 971-1919",
    orderUrl: "https://order.simplemenu.com/store/1810",
    hours: [
      "Mon: 11:30 AM - 10 PM",
      "Tue: Closed",
      "Wed-Sat: 11:30 AM - 10 PM",
      "Sun: 12 PM - 9 PM",
    ],
  },
  {
    name: "New Port Richey",
    address: "4120 Little Rd",
    city: "New Port Richey, FL 34653",
    phone: "(727) 376-1888",
    orderUrl: "https://order.mealkeyway.com/merchant/4d3865464e7368306574572f5530744e62666c734b413d3d/main",
    hours: [
      "Mon-Sat: 11:30 AM - 10 PM",
      "Sun: 12 PM - 9 PM",
    ],
  },
  {
    name: "Royal Palm Beach",
    address: "10233 Okeechobee Blvd B1",
    city: "Royal Palm Beach, FL 33411",
    phone: "(561) 619-9989",
    orderUrl: "https://fromtherestaurant.com/koizi-endless-gourmet-grill--sushi/",
    hours: [
      "Mon-Sat: 11:30 AM - 10 PM",
      "Sun: 12 PM - 9 PM",
    ],
  },
];

export default function Locations() {
  return (
    <section
      id="locations"
      className="section-padding"
      style={{ backgroundColor: "var(--surface)" }}
      aria-label="Locations"
    >
      <div className="max-w-6xl mx-auto">
        <p
          className="text-center text-sm tracking-[0.2em] uppercase mb-3"
          style={{ color: "var(--accent)" }}
        >
          Visit Us
        </p>
        <h2
          className="text-4xl sm:text-5xl text-center mb-4"
          style={{ color: "var(--text-primary)" }}
        >
          3 Locations Across Florida
        </h2>
        <p
          className="text-center text-base mb-12 max-w-xl mx-auto"
          style={{ color: "var(--text-secondary)" }}
        >
          Find your nearest Koizi and order directly from that location.
        </p>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location) => (
            <article
              key={location.name}
              className="rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col"
              style={{ backgroundColor: "var(--surface-light)" }}
            >
              {/* Crimson accent bar */}
              <div
                className="h-1.5"
                style={{ backgroundColor: "var(--primary)" }}
              />

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <h3
                    className="text-2xl sm:text-3xl"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {location.name}
                  </h3>
                  {location.badge && (
                    <span
                      className="text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider"
                      style={{
                        backgroundColor: "var(--accent)",
                        color: "var(--background)",
                      }}
                    >
                      {location.badge}
                    </span>
                  )}
                </div>

                <address
                  className="not-italic text-sm leading-relaxed mb-4"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <p>{location.address}</p>
                  {location.city && <p>{location.city}</p>}
                </address>

                {location.phone && (
                  <a
                    href={`tel:${location.phone.replace(/[^0-9]/g, "")}`}
                    className="inline-block text-base font-medium mb-4 transition-opacity hover:opacity-80"
                    style={{ color: "var(--accent)" }}
                  >
                    {location.phone}
                  </a>
                )}

                <div
                  className="text-sm space-y-1 mb-6"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {location.hours.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>

                {/* Order button per location */}
                <div className="mt-auto">
                  <a
                    href={location.orderUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center px-6 py-3 rounded-lg text-sm font-medium uppercase tracking-wider transition-all duration-300 hover:opacity-90 hover:scale-[1.02]"
                    style={{
                      backgroundColor: "var(--primary)",
                      color: "var(--text-primary)",
                    }}
                  >
                    Order from {location.name}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
