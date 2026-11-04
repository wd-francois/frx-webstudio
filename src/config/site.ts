// ─────────────────────────────────────────────────────────────
// Central site settings. Edit these values and every page updates.
// Anything marked TODO is a placeholder you should replace.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'FRX Web Studio',
  shortName: 'FRX',
  tagline: 'Professional, modern & affordable websites for small businesses.',
  description:
    'FRX Web Studio designs and hand-codes fast, modern, affordable websites that help small businesses win more enquiries. Free consultation, transparent pricing and real support.',
  url: 'https://frx-webstudio.netlify.app', // TODO: switch to custom domain when you have one

  founder: {
    name: 'Francois', // TODO: full name if you'd like it shown
    role: 'Founder & Lead Web Designer',
  },

  contact: {
    email: 'hello@frxwebstudio.com', // TODO
    phone: '+00 000 000 0000', // TODO (shown as written)
    phoneHref: 'tel:+000000000000', // TODO (digits only, with country code)
    location: 'Working with clients everywhere', // TODO e.g. "Cape Town, South Africa"
    hours: 'Mon – Fri, 8am – 6pm',
  },

  social: [
    // TODO: add/remove as needed — leave href empty to hide
    { label: 'Facebook', href: '' },
    { label: 'Instagram', href: '' },
    { label: 'LinkedIn', href: '' },
  ],

  // Contact form → https://web3forms.com (free, no backend needed).
  // Enter your email there, paste the access key here, and enquiries land in your inbox.
  form: {
    endpoint: 'https://api.web3forms.com/submit',
    accessKey: 'YOUR_WEB3FORMS_ACCESS_KEY', // TODO
  },

  currency: '$', // TODO: R, £, €, A$ ...
} as const;

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];
