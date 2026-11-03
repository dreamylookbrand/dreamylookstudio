import { icons } from '../components/icons.js';
import { img } from '../components/image.js';
import { waButton } from '../components/whatsapp.js';
import { services, alsoListed } from '../data/services.js';

const chips = (items) => `<ul class="chips">${items.map((i) => `<li>${i}</li>`).join('')}</ul>`;

function featured(s) {
  return `
  <article class="service service--feature" id="service-${s.id}">
    <div class="service__media">${img(s.image.src, s.image.alt, { sizes: '(max-width: 760px) 90vw, 360px', cls: 'service__img' })}</div>
    <div class="service__body">
      <span class="service__icon">${icons[s.icon]}</span>
      <h3>${s.title}</h3>
      <p>${s.description}</p>
      ${chips(s.items)}
      ${waButton(s.cta, s.message, 'btn btn--outline btn--sm')}
    </div>
  </article>`;
}
function compact(s) {
  return `
  <article class="service service--compact" id="service-${s.id}">
    <span class="service__icon">${icons[s.icon]}</span>
    <h3>${s.title}</h3>
    <p>${s.description}</p>
    ${chips(s.items)}
    ${waButton(s.cta, s.message, 'btn btn--outline btn--sm')}
  </article>`;
}

export function renderServices() {
  return `
  <section class="section section--alt" id="services" aria-labelledby="services-title">
    <div class="container">
      <header class="section-head">
        <h2 id="services-title">Our Services</h2>
        <p>Everything the studio offers, as listed on our Google profile. Message us for availability and details, as pricing depends on the look and service you choose.</p>
      </header>
      <div class="services-feature">${services.filter((s) => s.featured).map(featured).join('')}</div>
      <div class="services-grid">${services.filter((s) => !s.featured).map(compact).join('')}</div>
      <p class="services-also">Also on our Google profile: ${alsoListed.join(', ')}.</p>
    </div>
  </section>`;
}
