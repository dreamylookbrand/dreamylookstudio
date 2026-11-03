import { business, waMessages } from '../config/business.js';
import { icons } from '../components/icons.js';
import { waButton } from '../components/whatsapp.js';
import { socialLinks } from '../components/footer.js';

export function renderLocation() {
  return `
  <section class="section" id="contact" aria-labelledby="contact-title">
    <div class="container">
      <header class="section-head">
        <h2 id="contact-title">Visit the Studio</h2>
        <p>Walk in, call, or message us on WhatsApp. We are open every day.</p>
      </header>
      <div class="contact">
        <div class="contact__card">
          <ul class="contact__list">
            <li>${icons.pin}<div><strong>Address</strong><address>${business.address.full}</address></div></li>
            <li>${icons.phone}<div><strong>Phone</strong><a href="tel:${business.phoneHref}">${business.phone}</a></div></li>
            <li>${icons.mail}<div><strong>Email</strong><a href="mailto:${business.email}">${business.email}</a></div></li>
            <li>${icons.clock}<div><strong>Opening hours</strong><span>${business.hours.label}</span></div></li>
          </ul>
          <div class="contact__actions">
            <a class="btn btn--gold" href="${business.maps.listing}" target="_blank" rel="noopener noreferrer">Get Directions</a>
            <button class="btn btn--outline" type="button" data-copy-address data-address="${business.address.full}">${icons.copy}<span>Copy Address</span></button>
            ${waButton('WhatsApp Us', waMessages.general, 'btn btn--outline')}
          </div>
          <p class="copy-status" role="status" aria-live="polite"></p>
          ${socialLinks()}
        </div>
        <div class="contact__map">
          <iframe title="Map showing Dreamy Look Studio &amp; Academy in Firozabad" src="${business.maps.embed}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </section>`;
}
