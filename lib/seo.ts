import { BRAND, CONTACT, GEO, SITE_URL } from "./constants";
import type { Locale } from "./i18n/config";

/**
 * Schema.org LocalBusiness (AutomotiveBusiness) structured data.
 * Rendered as a <script type="application/ld+json"> tag in the root layout.
 */
export function getLocalBusinessSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    "@id": `${SITE_URL}/#business`,
    name: BRAND.name,
    legalName: BRAND.legalName,
    // Replace with real storefront/team photography once available —
    // schema.org rich-result eligibility improves with an actual photo.
    image: `${SITE_URL}/logo.svg`,
    url: SITE_URL,
    telephone: CONTACT.phones.map((p) => p.raw),
    email: CONTACT.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Babək prospekti 22M",
      addressLocality: "Bakı",
      addressCountry: "AZ",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: GEO.latitude,
      longitude: GEO.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "09:00",
        closes: "18:30",
      },
    ],
    areaServed: {
      "@type": "City",
      name: "Baku",
    },
    inLanguage: locale,
    makesOffer: [
      "Tire Sales",
      "Tire Mounting",
      "Wheel Balancing",
      "Tire Repair",
      "Wheel Diagnostics",
      "Nitrogen Tire Inflation",
      "Corporate Tire Supply",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name,
      },
    })),
    brand: [
      { "@type": "Brand", name: "PEARLY" },
      { "@type": "Brand", name: "ATLAS" },
    ],
  };
}
