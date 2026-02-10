"use client";

import Image from "next/image";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=600&q=80",
    alt: "Assorted sushi rolls on a dark plate",
    width: 600,
    height: 400,
  },
  {
    src: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=600&q=80",
    alt: "Fresh salmon nigiri sushi",
    width: 600,
    height: 750,
  },
  {
    src: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=600&q=80",
    alt: "Hibachi grill cooking with flames",
    width: 600,
    height: 400,
  },
  {
    src: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=600&q=80",
    alt: "Dragon roll with avocado topping",
    width: 600,
    height: 600,
  },
  {
    src: "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=600&q=80",
    alt: "Sashimi platter with fresh fish",
    width: 600,
    height: 450,
  },
  {
    src: "https://images.unsplash.com/photo-1625938145744-e380515399bf?w=600&q=80",
    alt: "Japanese ramen bowl with toppings",
    width: 600,
    height: 700,
  },
  {
    src: "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=600&q=80",
    alt: "Tempura shrimp appetizer",
    width: 600,
    height: 400,
  },
  {
    src: "https://images.unsplash.com/photo-1540648639573-8c848de23f0a?w=600&q=80",
    alt: "Colorful sushi arrangement on wooden board",
    width: 600,
    height: 500,
  },
  {
    src: "https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=600&q=80",
    alt: "Maki rolls with vibrant fish and vegetables",
    width: 600,
    height: 600,
  },
];

export default function Gallery() {
  return (
    <section
      className="section-padding"
      style={{ backgroundColor: "var(--background)" }}
      aria-label="Food Gallery"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-4xl sm:text-5xl text-center mb-4"
          style={{ color: "var(--text-primary)" }}
        >
          Every Dish, A Work of Art
        </h2>
        <p
          className="text-center text-base mb-12 max-w-xl mx-auto"
          style={{ color: "var(--text-secondary)" }}
        >
          Crafted with precision, served with pride.
        </p>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="gallery-item break-inside-avoid rounded-lg overflow-hidden group transition-all duration-300"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .gallery-item {
          border: 2px solid transparent;
        }
        .gallery-item:hover {
          border-color: var(--accent);
          box-shadow: 0 0 20px rgba(212, 168, 83, 0.3);
        }
      `}</style>
    </section>
  );
}
