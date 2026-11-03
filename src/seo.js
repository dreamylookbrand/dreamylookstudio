import { business } from './config/business.js';
import { services } from './data/services.js';
import { faqs } from './sections/faq.js';

export const seo = {
  title: 'Dreamy Look Studio & Academy | Bridal Makeup in Firozabad',
  description:
    'Bridal, engagement and party makeup, hairstyling, nail extensions and beauty services at Dreamy Look Studio & Academy, Firozabad. Enquire on WhatsApp.',
  ogImage: `${business.url}images/social/og-dreamy-look-studio.jpg`,
};

export function jsonLd() {
  const a = business.address;
  const salon = {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    '@id': `${business.url}#business`,
    name: business.brand,
    url: business.url,
    image: [seo.ogImage],
    logo: `${business.url}favicon.png`,
    description: seo.description,
    telephone: business.phone.replace(/\s/g, ''),
    email: business.email,
    founder: { '@type': 'Person', name: business.owner },
    address: { '@type': 'PostalAddress', streetAddress: a.street, addressLocality: a.city, addressRegion: a.region, postalCode: a.postalCode, addressCountry: a.country },
    geo: { '@type': 'GeoCoordinates', latitude: business.geo.lat, longitude: business.geo.lng },
    hasMap: business.maps.listing,
    openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], opens: business.hours.opens, closes: business.hours.closes }],
    areaServed: { '@type': 'City', name: a.city },
    sameAs: Object.values(business.social),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services',
      itemListElement: services.map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s.title, description: s.description } })),
    },
  };
  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
  return [salon, faq];
}

export function headTags() {
  const esc = (s) => s.replace(/"/g, '&quot;');
  return `
  <title>${seo.title.replace(/&/g, '&amp;')}</title>
  <meta name="description" content="${esc(seo.description)}">
  <meta name="robots" content="index, follow, max-image-preview:large">
  <link rel="canonical" href="${business.url}">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="en_IN">
  <meta property="og:site_name" content="${esc(business.brand)}">
  <meta property="og:title" content="${esc(seo.title)}">
  <meta property="og:description" content="${esc(seo.description)}">
  <meta property="og:url" content="${business.url}">
  <meta property="og:image" content="${seo.ogImage}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="Dreamy Look Studio & Academy golden logo beside a bride in red lehenga">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(seo.title)}">
  <meta name="twitter:description" content="${esc(seo.description)}">
  <meta name="twitter:image" content="${seo.ogImage}">
  ${jsonLd().map((o) => `<script type="application/ld+json">${JSON.stringify(o)}</script>`).join('\n  ')}`;
}
