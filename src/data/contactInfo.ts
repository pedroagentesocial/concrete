export type SocialLink = {
  name: "LinkedIn" | "Facebook" | "Instagram" | "X";
  href: string;
  icon: string;
};

export type ContactInfo = {
  phoneDisplay: string;
  phoneHref: string;
  emailDisplay: string;
  emailHref: string;
  addressDisplay: string;
  mapHref: string;
  social: SocialLink[];
};

const linkedInIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.94 7.5A1.44 1.44 0 1 1 5.5 6.06c.8 0 1.44.64 1.44 1.44zM6.75 9.5H4.25v10h2.5v-10zM13.5 9.47c-1.33 0-2.24.73-2.61 1.43v-1.4H8.39v10h2.5v-5.59c0-1.49.88-2.41 2.13-2.41 1.21 0 1.93.82 1.93 2.41v5.59h2.5v-6.33c0-2.68-1.46-3.9-3.95-3.9z"/></svg>';

const facebookIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.5 9H15V6.5h-1.5A3.5 3.5 0 0 0 10 10v2H8v2.5h2v6h2.5v-6H15L15.5 12H12v-1.9c0-.63.51-1.1 1.1-1.1H13.5z"/></svg>';

const instagramIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zM12 7a5 5 0 1 0 .001 10.001A5 5 0 0 0 12 7zm0 2a3 3 0 1 1-.001 6.001A3 3 0 0 1 12 9zm5.5-2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/></svg>';

const xIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.98 3H20l-7.41 8.46L21.5 21h-7.02l-5.06-5.67L3 21H.02l7.87-8.99L2 3h7.02l4.59 5.15L16.98 3z"/></svg>';

export const contactInfo: ContactInfo = {
  phoneDisplay: "(801) 555-0199",
  phoneHref: "tel:+18015550199",
  emailDisplay: "sales@wasatchcement.com",
  emailHref: "mailto:sales@wasatchcement.com",
  addressDisplay: "1234 Industrial Way, Salt Lake City, UT 84101",
  mapHref: "https://maps.google.com/?q=1234%20Industrial%20Way%2C%20Salt%20Lake%20City%2C%20UT%2084101",
  social: [
    { name: "LinkedIn", href: "#", icon: linkedInIcon },
    { name: "Facebook", href: "#", icon: facebookIcon },
    { name: "Instagram", href: "#", icon: instagramIcon },
    { name: "X", href: "#", icon: xIcon },
  ],
};
