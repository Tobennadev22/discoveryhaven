// Site configuration: every outbound destination lives here.
//
// Leave a value blank ("") until the owner supplies the real, tested URL.
// Blank values hide the related button or link instead of sending parents
// to a placeholder.
export const SITE = {
  name: "Discovery Haven",
  url: "https://www.discoveryhaven.org",

  // Book a call: the existing Calendly profile. Every "Book a call" button
  // links here. Keep the label free of a duration unless every appointment
  // type on the profile matches it.
  calendlyUrl: "https://calendly.com/stella-chibuikeezike",

  // Parent Community: the published Systeme.io hosted opt-in page.
  // While blank, the site uses its own signup form (api/subscribe.js),
  // which saves the contact to Systeme.io with the community tags.
  communityOptInUrl: "",

  // Approved privacy notice. Shown on the signup and in the footer once set.
  privacyUrl: "",

  // Default share image (absolute URL or a path in /public). Leave blank
  // until an approved image is supplied.
  shareImage: "",
};

// The single Parent Community destination used by every community CTA.
export const COMMUNITY_HREF = SITE.communityOptInUrl || "/haven-tribe#join";

// Any URL with a scheme: https:, mailto:, tel:
export function isExternal(href) {
  return /^[a-z][a-z0-9+.-]*:/i.test(href || "");
}
