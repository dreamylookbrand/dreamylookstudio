import { business } from '../config/business.js';

export const faqs = [
  { q: 'How do I book an appointment?', a: `Use the appointment form on this page or message us on WhatsApp at ${business.phone}. The studio will reply to confirm availability. An appointment is confirmed only after we respond.` },
  { q: 'Do you offer bridal makeup?', a: 'Yes. Bridal makeup is one of our main services, along with engagement, reception, pre-wedding, haldi and mehndi looks. Message us with your date and outfit details to discuss your look.' },
  { q: 'Where is the studio located?', a: `${business.address.full} Use the Get Directions button in the Visit the Studio section to open it in Google Maps.` },
  { q: 'What are your opening hours?', a: `We are open ${business.hours.label.toLowerCase().replace('daily, ', 'every day, ')}.` },
  { q: 'Do you run makeup courses?', a: 'We have a makeup academy. Please message us on WhatsApp to ask about available training options, course details and upcoming batches.' },
  { q: 'What are your prices?', a: 'Pricing depends on the service, the look and the occasion, so we do not publish a fixed list here. Send us an enquiry on WhatsApp and the studio will share details.' },
];

export function renderFaq() {
  const items = faqs.map((f, i) => `
    <div class="accordion__item">
      <h3><button class="accordion__trigger" type="button" id="faq-btn-${i}" aria-expanded="false" aria-controls="faq-panel-${i}"><span>${f.q}</span><span class="accordion__chev" aria-hidden="true"></span></button></h3>
      <div class="accordion__panel" id="faq-panel-${i}" role="region" aria-labelledby="faq-btn-${i}" hidden><p>${f.a}</p></div>
    </div>`).join('');
  return `
  <section class="section section--alt" id="faq" aria-labelledby="faq-title">
    <div class="container container--narrow">
      <header class="section-head"><h2 id="faq-title">Frequently Asked Questions</h2></header>
      <div class="accordion">${items}</div>
    </div>
  </section>`;
}
