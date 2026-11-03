import { icons } from '../components/icons.js';

const principles = [
  { icon: 'heart', title: 'Personalised Beauty Experience', text: 'Every look starts with you: your outfit, your occasion and your comfort.' },
  { icon: 'bridal', title: 'Bridal and Occasion Makeup', text: 'From the wedding day to haldi, mehndi, reception and parties.' },
  { icon: 'eye', title: 'Attention to Detail', text: 'Careful finishing, from base and eyes to hair and accessories.' },
  { icon: 'chat', title: 'Friendly Client Consultation', text: 'Tell us what you have in mind and we will talk it through together.' },
  { icon: 'calendar', title: 'Convenient Appointment Enquiries', text: 'Ask about timings and availability directly on WhatsApp.' },
  { icon: 'cap', title: 'Beauty Learning Opportunities', text: 'Interested in learning makeup? Ask us about the academy.' },
];

export function renderAbout() {
  return `
  <section class="section section--alt" id="about" aria-labelledby="about-title">
    <div class="container">
      <header class="section-head">
        <h2 id="about-title">Why choose Dreamy Look</h2>
        <p>A beauty studio in Firozabad built around how you want to feel on your most important days, and every day in between.</p>
      </header>
      <ul class="principles">
        ${principles.map((p) => `<li class="principle"><span class="principle__icon">${icons[p.icon]}</span><div><h3>${p.title}</h3><p>${p.text}</p></div></li>`).join('')}
      </ul>
    </div>
  </section>`;
}
