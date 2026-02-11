export default function About() {
  return (
    <section
      className="section-padding"
      style={{ backgroundColor: "var(--surface)" }}
      aria-label="About Koizi"
    >
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-4xl sm:text-5xl mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            A Tampa Tradition Since 2011
          </h2>
          <p
            className="text-base leading-relaxed mb-6"
            style={{ color: "var(--text-secondary)" }}
          >
            Koizi was founded in Tampa Palms with a simple but bold vision:
            redefine all-you-can-eat Japanese dining. While others relied on
            buffet lines and heat lamps, we chose a different path — every dish
            made to order, every time.
          </p>
          <p
            className="text-base leading-relaxed mb-6"
            style={{ color: "var(--text-secondary)" }}
          >
            What started as a single restaurant has grown into three locations
            across Florida, each carrying the same commitment to freshness,
            generous portions, and authentic Japanese recipes. From our signature
            rolls crafted by skilled sushi chefs to hibachi grilled right before
            your eyes, Koizi delivers an experience — not just a meal.
          </p>
          <p
            className="text-base leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Whether you&apos;re a sushi enthusiast, a hibachi lover, or someone
            bringing the whole family for a celebration, Koizi welcomes you to
            feast without limits. That&apos;s the spirit of endless dining.
          </p>
        </div>
      </div>
    </section>
  );
}
