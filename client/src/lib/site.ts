export const SITE_URL = "https://www.whv-residency.com";
export const HOTEL_NAME = "W&H View Residency";
export const HOTEL_DESCRIPTION =
  "W&H View Residency offers comfortable, premium hotel stays in Mattancherry, Kochi, with thoughtfully designed rooms, dining, and airport transfers.";
export const PHONE = "+917994912900";
export const PHONE_DISPLAY = "+91 7994912900";
export const EMAIL = "info@whv-residency.com";
export const ADDRESS = {
  streetAddress: "6/153, Jew Town Rd, Kappalandimukku",
  addressLocality: "Mattancherry",
  addressRegion: "Kerala",
  postalCode: "682002",
  addressCountry: "IN",
};
export const GEO = {
  latitude: 9.953513634998393,
  longitude: 76.26067298800133,
};
export const SOCIAL_LINKS = [
  "https://www.facebook.com/profile.php?id=61583144679550",
  "https://www.instagram.com/whviewresidency",
  "https://www.linkedin.com/company/wh-hospitality",
];

export function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}