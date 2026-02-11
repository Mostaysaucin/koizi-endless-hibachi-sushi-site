"use client";

export default function Hero() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background with Ken Burns effect */}
      <div className="absolute inset-0 z-0">
        <div
          className="ken-burns absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=1920&q=80')",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(15,15,15,0.7) 0%, rgba(15,15,15,0.85) 50%, rgba(15,15,15,0.95) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <p
          className="text-lg sm:text-xl tracking-[0.3em] uppercase mb-4 fade-in-up"
          style={{ color: "var(--accent)", fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
        >
          Koizi
        </p>
        <h1
          className="text-5xl sm:text-6xl lg:text-7xl mb-6 fade-in-up"
          style={{ color: "var(--text-primary)" }}
        >
          Endless Sushi & Hibachi, Made to Order
        </h1>
        <p
          className="text-lg sm:text-xl max-w-2xl mx-auto mb-10 fade-in-up-delay-1"
          style={{ color: "var(--text-secondary)" }}
        >
          Tampa Bay&apos;s premier all-you-can-eat Japanese dining experience
          since 2011. Every dish crafted fresh, never from a buffet line.
        </p>
        <div className="flex flex-col items-center gap-4 fade-in-up-delay-2">
          <a
            href="#menu"
            className="inline-block px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 hover:opacity-90 hover:scale-105"
            style={{
              backgroundColor: "var(--primary)",
              color: "var(--text-primary)",
            }}
          >
            View Our Menu
          </a>
          <p
            className="text-sm uppercase tracking-[0.15em] mt-2"
            style={{ color: "var(--text-secondary)" }}
          >
            Order Online
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            {[
              { name: "Tampa Palms", url: "https://order.simplemenu.com/store/1810" },
              { name: "New Port Richey", url: "https://order.mealkeyway.com/merchant/4d3865464e7368306574572f5530744e62666c734b413d3d/main" },
              { name: "Royal Palm Beach", url: "https://fromtherestaurant.com/koizi-endless-gourmet-grill--sushi/" },
            ].map((loc) => (
              <a
                key={loc.name}
                href={loc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-lg text-base font-medium border-2 transition-all duration-300 hover:scale-105"
                style={{
                  borderColor: "var(--accent)",
                  color: "var(--accent)",
                  backgroundColor: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--accent)";
                  e.currentTarget.style.color = "var(--background)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "var(--accent)";
                }}
              >
                {loc.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          style={{ color: "var(--text-secondary)" }}
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}
