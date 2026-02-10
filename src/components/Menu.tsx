"use client";

import { useState } from "react";
import { menuCategories } from "@/data/menu";

export default function Menu() {
  const [activeTab, setActiveTab] = useState("signature-rolls");

  const activeCategory = menuCategories.find((c) => c.id === activeTab);

  return (
    <section
      id="menu"
      className="section-padding"
      style={{ backgroundColor: "var(--background)" }}
      aria-label="Menu"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-4xl sm:text-5xl text-center mb-4"
          style={{ color: "var(--text-primary)" }}
        >
          Our Menu
        </h2>
        <p
          className="text-center text-base mb-12 max-w-xl mx-auto"
          style={{ color: "var(--text-secondary)" }}
        >
          Over 100 made-to-order dishes. Browse our categories below.
        </p>

        {/* Tab Navigation */}
        <nav
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12"
          role="tablist"
          aria-label="Menu categories"
        >
          {menuCategories.map((category) => (
            <button
              key={category.id}
              role="tab"
              aria-selected={activeTab === category.id}
              aria-controls={`panel-${category.id}`}
              onClick={() => setActiveTab(category.id)}
              className="relative px-4 py-2 text-sm sm:text-base font-medium transition-colors duration-300 cursor-pointer"
              style={{
                color:
                  activeTab === category.id
                    ? "var(--accent)"
                    : "var(--text-secondary)",
              }}
            >
              {category.name}
              {activeTab === category.id && (
                <span
                  className="absolute bottom-0 left-0 right-0 h-0.5"
                  style={{ backgroundColor: "var(--accent)" }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Menu Items Grid */}
        {activeCategory && (
          <div
            id={`panel-${activeCategory.id}`}
            role="tabpanel"
            aria-labelledby={activeCategory.id}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {activeCategory.items.map((item) => (
              <div
                key={item.name}
                className="p-5 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg relative"
                style={{ backgroundColor: "var(--surface-light)" }}
              >
                {item.popular && (
                  <span
                    className="absolute top-3 right-3 text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wider"
                    style={{
                      backgroundColor: "var(--accent)",
                      color: "var(--background)",
                    }}
                  >
                    Popular
                  </span>
                )}
                <div className="flex justify-between items-start mb-2 pr-16">
                  <h3
                    className="text-lg font-medium"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {item.name}
                  </h3>
                </div>
                {item.pieces && (
                  <span
                    className="text-xs mb-2 inline-block"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {item.pieces}
                  </span>
                )}
                {item.description && (
                  <p
                    className="text-sm mb-3 leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {item.description}
                  </p>
                )}
                <div
                  className="text-lg font-semibold"
                  style={{ color: "var(--accent)" }}
                >
                  {item.price}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
