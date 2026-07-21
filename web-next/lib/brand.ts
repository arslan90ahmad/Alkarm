export const BRAND = {
  name: "Al Karam Real Estate",
  shortName: "Al Karam",
  tagline: "The biggest and most trusted name in Al Jalil Garden",
  description:
    "Authorized sub-dealer of Al Jalil Developers. Your trusted partner for property investment in Al Jalil Garden Housing Scheme, Lahore.",
  phone: "0300-2849215",
  phoneHref: "tel:+923002849215",
  whatsappBase: "https://wa.me/923002849215",
  facebook: "https://www.facebook.com/AlKaramRealE/",
  tiktok: "https://www.tiktok.com/@al.karam.real.est",
  officeAddressLines: [
    "Main Boulevard, Al Jalil Garden",
    "2 km from Faizpur Interchange, Lahore",
  ],
  officeMap:
    "https://www.google.com/maps/search/?api=1&query=Al+Karam+Real+Estate+Main+Boulevard+Al+Jalil+Garden+Lahore",
  tours: {
    alJalil: "https://myajdcloud.com/vtour/ajg.html",
    alNoor: "https://myajdcloud.com/vtour/ano.html",
  },
  developer: {
    name: "Al Jalil Developers",
    site: "https://aljalildevelopers.com/",
    alJalilPage: "https://aljalildevelopers.com/pages/al-jalil-garden-housing-scheme",
    alNoorPage: "https://aljalildevelopers.com/pages/al-noor-orchard-housing-scheme",
  },
  mapResource: "https://emap.pk/al-jalil-garden-lahore-map",
} as const;

export const wa = (msg: string) =>
  `${BRAND.whatsappBase}?text=${encodeURIComponent(msg)}`;
