export interface ServiceItem {
  title: string;
  description: string;
}

export interface ValueItem {
  title: string;
  description: string;
}

export interface WhyItem {
  title: string;
  description: string;
}

export interface ReviewItem {
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export interface GalleryItem {
  label: string;
}

export interface Dictionary {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    services: string;
    why: string;
    gallery: string;
    reviews: string;
    contact: string;
  };
  buttons: {
    call: string;
    whatsapp: string;
    directions: string;
    contactUs: string;
    scrollToServices: string;
    seeAllServices: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    headlineAccent: string;
    subheadline: string;
    stats: { value: string; label: string }[];
  };
  about: {
    eyebrow: string;
    title: string;
    paragraph: string;
    values: ValueItem[];
  };
  services: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: ServiceItem[];
  };
  why: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: WhyItem[];
  };
  gallery: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: GalleryItem[];
  };
  reviews: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: ReviewItem[];
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    phoneLabel: string;
    emailLabel: string;
    addressLabel: string;
    hoursLabel: string;
    hoursValue: string;
    formNote: string;
  };
  footer: {
    description: string;
    quickLinks: string;
    contactTitle: string;
    servicesTitle: string;
    rights: string;
    officialDealer: string;
  };
}
