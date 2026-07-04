export const SITE_URL = "https://www.optimaltekar.az";

export const BRAND = {
  name: "Optimal Təkər Mərkəzi",
  shortName: "Optimal",
  legalName: "Optimal Təkər Mərkəzi MMC",
};

export const CONTACT = {
  phones: [
    { raw: "+994552200095", display: "+994 55 220 00 95" },
    { raw: "+994702112170", display: "+994 70 211 21 70" },
  ],
  whatsapp: {
    raw: "994552200095",
    display: "+994 55 220 00 95",
  },
  email: "info@optimaltekar.az",
  address: {
    az: "Babək prospekti 22M, Bakı, Azərbaycan",
    ru: "Проспект Бабека 22M, Баку, Азербайджан",
  },
  hours: "09:00–18:30",
};

export const LINKS = {
  callPrimary: `tel:${CONTACT.phones[0]!.raw}`,
  callSecondary: `tel:${CONTACT.phones[1]!.raw}`,
  whatsapp: `https://wa.me/${CONTACT.whatsapp.raw}`,
  mapsDirections:
    "https://www.google.com/maps/dir/?api=1&destination=" +
    encodeURIComponent("Babək prospekti 22M, Bakı, Azərbaycan"),
  mapsEmbed:
    "https://www.google.com/maps?q=" +
    encodeURIComponent("Babək prospekti 22M, Bakı, Azərbaycan") +
    "&output=embed",
};

export const SOCIALS = {
  instagram: "https://instagram.com/optimaltekar",
  facebook: "https://facebook.com/optimaltekar",
};

export const GEO = {
  // Approximate coordinates for Babək prospekti, Baku — replace with the
  // exact rooftop coordinates once verified on Google Business Profile.
  latitude: 40.3856,
  longitude: 49.8328,
};

export const BRANDS_CARRIED = ["PEARLY", "ATLAS"];
export const DIAGNOSTIC_EQUIPMENT = "Hunter Road Force Elite";
