export default function Footer() {
  return (
    <footer
      className="section-padding"
      style={{ backgroundColor: "var(--footer-bg)" }}
      aria-label="Footer"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1: Address */}
          <div>
            <h3
              className="text-2xl sm:text-3xl mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Koizi
            </h3>
            <address
              className="not-italic text-sm leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              <p>17012 Palm Pointe Dr</p>
              <p>Tampa, FL 33647</p>
              <p className="mt-2">
                <a
                  href="tel:8139711919"
                  className="transition-opacity hover:opacity-80"
                  style={{ color: "var(--accent)" }}
                >
                  (813) 971-1919
                </a>
              </p>
            </address>
          </div>

          {/* Column 2: Hours */}
          <div>
            <h3
              className="text-2xl sm:text-3xl mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Hours
            </h3>
            <div
              className="text-sm leading-relaxed space-y-1"
              style={{ color: "var(--text-secondary)" }}
            >
              <p>Monday: 11:30 AM - 10 PM</p>
              <p>Tuesday: Closed</p>
              <p>Wednesday - Saturday: 11:30 AM - 10 PM</p>
              <p>Sunday: 12 PM - 9 PM</p>
            </div>
          </div>

          {/* Column 3: Connect */}
          <div>
            <h3
              className="text-2xl sm:text-3xl mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Connect
            </h3>
            <nav
              className="text-sm leading-relaxed space-y-2"
              aria-label="Social links"
            >
              <p>
                <a
                  href="https://order.simplemenu.com/store/1810"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-80"
                  style={{ color: "var(--accent)" }}
                >
                  Order Online
                </a>
              </p>
              <p>
                <a
                  href="https://www.instagram.com/koizi_sushi_and_hibachi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-80"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Instagram @koizi_sushi_and_hibachi
                </a>
              </p>
              <p>
                <a
                  href="https://www.yelp.com/biz/koizi-endless-hibachi-and-sushi-tampa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-80"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Yelp
                </a>
              </p>
              <p>
                <a
                  href="https://www.tripadvisor.com/Restaurant_Review-g34678-d4087654-Reviews-Koizi_Endless_Hibachi_Sushi-Tampa_Florida.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-80"
                  style={{ color: "var(--text-secondary)" }}
                >
                  TripAdvisor
                </a>
              </p>
            </nav>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div
          className="mt-12 pt-8 text-center text-sm"
          style={{
            borderTop: "1px solid var(--surface-light)",
            color: "var(--text-secondary)",
          }}
        >
          <p>
            &copy; 2026 Koizi Endless Hibachi & Sushi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
