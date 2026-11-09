// Page content that is reused across several pages.
import type { IconName } from '../components/icons';

export const features: { icon: IconName; title: string; text: string }[] = [
  {
    icon: 'smartphone',
    title: 'Mobile-First Design',
    text: 'Most of your visitors are on a phone. Every layout is designed for small screens first, then scaled up beautifully.',
  },
  {
    icon: 'layout',
    title: 'Fully Responsive',
    text: 'Pixel-perfect on phones, tablets, laptops and big desktop monitors — no awkward zooming or broken layouts.',
  },
  {
    icon: 'gauge',
    title: 'Lightning-Fast Pages',
    text: 'Hand-coded with no bloated page builders, so pages load in about a second and visitors stay to enquire.',
  },
  {
    icon: 'search',
    title: 'SEO-Ready Build',
    text: 'Clean code, proper headings, metadata and sitemaps baked in from day one so Google can find you.',
  },
  {
    icon: 'shield',
    title: 'Secure & Reliable',
    text: 'Static sites have no plugins to hack. Fast global hosting and free SSL keep your site safe and online.',
  },
  {
    icon: 'message',
    title: 'Real, Personal Support',
    text: 'You deal directly with the person building your site. Need a change? One quick message and it’s done.',
  },
];

export const services: { icon: IconName; title: string; text: string; points: string[] }[] = [
  {
    icon: 'pen',
    title: 'Custom Website Design',
    text: 'A unique, on-brand website designed around your business and your customers — never a recycled template.',
    points: ['Unique design for your brand', 'Conversion-focused layouts', 'Copywriting guidance'],
  },
  {
    icon: 'code',
    title: 'Hand-Coded Development',
    text: 'Built with modern, lightweight technology for speed, security and top Google PageSpeed scores.',
    points: ['No WordPress or page builders', '90–100 PageSpeed target', 'Clean, future-proof code'],
  },
  {
    icon: 'refresh',
    title: 'Website Redesigns',
    text: 'Outdated, slow or hard to use? We rebuild your existing site into a modern lead-generating machine.',
    points: ['Keep your content & rankings', 'Modern look and feel', 'Faster load times'],
  },
  {
    icon: 'search',
    title: 'Local SEO',
    text: 'Show up when local customers search for what you do — on Google Search and Google Maps.',
    points: ['Google Business Profile setup', 'On-page optimisation', 'Keyword & competitor research'],
  },
  {
    icon: 'server',
    title: 'Hosting & Care Plans',
    text: 'Fast, secure hosting plus ongoing updates and edits, so you never have to worry about your website again.',
    points: ['Fast global hosting + SSL', 'Content edits included', 'Monitoring & backups'],
  },
];

export const packages = [
  {
    name: 'Starter',
    price: '799',
    suffix: 'once-off',
    blurb: 'Perfect for new businesses that need a professional presence fast.',
    features: [
      'One-page scrolling website',
      'Mobile-first, responsive design',
      'Contact form & click-to-call',
      'Basic on-page SEO',
      'Free SSL certificate',
      'Launch in 1–2 weeks',
    ],
    featured: false,
  },
  {
    name: 'Business',
    price: '1,499',
    suffix: 'once-off',
    blurb: 'Our most popular package for growing small businesses.',
    features: [
      'Up to 5 custom pages',
      'Unique design for your brand',
      'Enquiry forms & Google Maps',
      'Full on-page SEO setup',
      'Google Business Profile setup',
      'Speed optimised (90+ PageSpeed)',
      '30 days of free edits',
    ],
    featured: true,
  },
  {
    name: 'E-commerce',
    price: '2,999',
    suffix: 'starting at',
    blurb: 'Everything you need to start selling your products online.',
    features: [
      'Custom online store design',
      'Product, stock & order management',
      'Secure payment gateway',
      'Shipping & tax configuration',
      'Training walkthrough',
      'SEO-ready product pages',
    ],
    featured: false,
  },
];

export const carePlan = {
  price: '49',
  features: ['Fast, secure hosting', 'Content edits each month', 'Security & uptime monitoring', 'Priority support'],
};

export const process = [
  {
    title: 'Free Consultation',
    text: 'We chat about your business, goals and budget. No pressure, no jargon — just a clear plan and a fixed quote.',
  },
  {
    title: 'Design',
    text: 'I design a custom mockup of your new site. You review it and we refine it until you love it.',
  },
  {
    title: 'Build & Launch',
    text: 'Your site is hand-coded, tested on every device, optimised for speed and SEO, then launched.',
  },
  {
    title: 'Grow & Support',
    text: 'After launch I’m one message away for updates, edits and advice to keep enquiries coming in.',
  },
];

export const faqs = [
  {
    q: 'How much does a website cost?',
    a: 'It depends on the size and features of your site, but small business websites are kept affordable. Every project gets a fixed, written quote after a free consultation — no hidden fees or surprise invoices.',
  },
  {
    q: 'How long does it take to build my website?',
    a: 'A one-page site is usually live within 1–2 weeks, and a 5-page business site within 2–4 weeks. Timelines depend mostly on how quickly content and feedback come through.',
  },
  {
    q: 'Do I need to provide the content and photos?',
    a: 'It helps if you have them, but you don’t have to. I can guide you on what to write, polish your copy, and source quality stock photography that fits your brand.',
  },
  {
    q: 'Will my website show up on Google?',
    a: 'Yes. Every site is built with SEO best practices, a sitemap, fast load times and proper metadata, and I’ll submit it to Google. For extra visibility, our Local SEO service helps you rank for local searches.',
  },
  {
    q: 'Can I make changes to my website later?',
    a: 'Absolutely. On a care plan, just send your changes and I’ll handle them. Prefer to edit yourself? I can add a simple content editor to your site.',
  },
  {
    q: 'Do you build sites with WordPress or page builders?',
    a: 'No, I hand-code every website. This makes sites load faster because the code is clean, with nothing unnecessary slowing them down. They also avoid the common issues that come with plugins, like slower performance, unexpected breakages and security updates. And because nothing is limited by a template, I can build your site precisely around what your business needs. However, if you already have a WordPress site, I’m happy to review it with you and talk through whether a custom site would be a better long-term fit.',
  },
];
