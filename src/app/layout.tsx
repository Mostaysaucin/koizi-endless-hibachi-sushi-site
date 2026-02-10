import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Koizi Endless Hibachi & Sushi | Tampa's Premier All-You-Can-Eat Japanese Dining",
  description:
    "Koizi offers endless made-to-order sushi, hibachi, and Japanese cuisine across 4 Florida locations. Not a buffet — every dish crafted fresh since 2011. 100+ menu items including signature rolls, hibachi, sashimi, and more.",
  keywords: [
    "Koizi",
    "all you can eat sushi Tampa",
    "hibachi Tampa",
    "Japanese restaurant Tampa",
    "endless sushi",
    "AYCE sushi Florida",
    "made to order sushi",
  ],
  openGraph: {
    title: "Koizi Endless Hibachi & Sushi",
    description:
      "Tampa Bay's premier all-you-can-eat Japanese dining experience. Every dish made to order, never from a buffet line.",
    type: "website",
    locale: "en_US",
    siteName: "Koizi Endless Hibachi & Sushi",
  },
  twitter: {
    card: "summary_large_image",
    title: "Koizi Endless Hibachi & Sushi",
    description:
      "Tampa Bay's premier all-you-can-eat Japanese dining experience since 2011.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=DM+Serif+Display&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "Koizi Endless Hibachi & Sushi",
              image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c",
              servesCuisine: ["Japanese", "Sushi", "Hibachi"],
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "17012 Palm Pointe Dr",
                addressLocality: "Tampa",
                addressRegion: "FL",
                postalCode: "33647",
                addressCountry: "US",
              },
              telephone: "+1-813-971-1919",
              url: "https://koizi.com",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  opens: "11:30",
                  closes: "22:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Sunday",
                  opens: "12:00",
                  closes: "21:00",
                },
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.2",
                reviewCount: "3450",
                bestRating: "5",
              },
              numberOfLocations: 4,
              foundingDate: "2011",
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
