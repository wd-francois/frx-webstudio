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
  url: 'https://frxwebstudio.com',

  founder: {
    name: 'Francois', // TODO: full name if you'd like it shown
    role: 'Founder & Lead Web Designer',
  },

  contact: {
    email: 'webdev.francois@gmail.com',
    phone: '0416 423 136',
    phoneHref: 'tel:+61416423136',
    location: 'Melbourne, Australia · Working with clients everywhere',
    hours: 'Mon – Fri, 8am – 6pm',
  },

  social: [
    // TODO: add/remove as needed — leave href empty to hide
    { label: 'Facebook', href: '' },
    { label: 'Instagram', href: '' },
    { label: 'LinkedIn', href: '' },
  ],

  currency: '$', // TODO: R, £, €, A$ ...
} as const;

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];
