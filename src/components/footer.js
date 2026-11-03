import { business, waMessages } from '../config/business.js';
import { icons } from './icons.js';
import { logoImg } from './image.js';
import { waButton } from './whatsapp.js';
import { navLinks } from './header.js';
import { services } from '../data/services.js';

export const socialLinks = () => `
  <ul class="social-list" aria-label="Social media">
    <li><a href="${business.social.instagram}" target="_blank" rel="noopener noreferrer" aria-label="Dreamy Look Studio on Instagram">${icons.instagram}</a></li>
    <li><a href="${business.social.facebook}" target="_blank" rel="noopener noreferrer" aria-label="Dreamy Look Studio on Facebook">${icons.facebook}</a></li>
    <li><a href="${business.social.youtube}" target="_blank" rel="noopener noreferrer" aria-label="Dreamy Look Studio on YouTube">${icons.youtube}</a></li>
  </ul>`;

export function renderFooter() {
  const nav = navLinks.map((l) => `<li><a href="${l.href}">${l.label}</a></li>`).join('');
  const svc = services.slice(0, 7).map((s) => `<li><a href="#services">${s.title}</a></li>`).join('');
  return `
  <footer class="site-footer">
    <div class="container footer-grid">
      <div class="footer-brand">
        ${logoImg(240, 'footer-logo')}
        <p>Bridal makeup, hair, nails and beauty services in Firozabad, with a makeup academy for those who want to learn the craft.</p>
        ${socialLinks()}
      </div>
      <div>
        <h2 class="footer-title">Explore</h2>
        <ul class="footer-links">${nav}<li><a href="#appointment">Book Appointment</a></li><li><a href="#faq">FAQ</a></li></ul>
      </div>
      <div>
        <h2 class="footer-title">Services</h2>
        <ul class="footer-links">${svc}</ul>
      </div>
      <div>
        <h2 class="footer-title">Visit &amp; contact</h2>
        <address class="footer-contact">
          <p><strong>${business.owner}</strong>, Owner</p>
          <p><a href="tel:${business.phoneHref}">${business.phone}</a></p>
          <p><a href="mailto:${business.email}">${business.email}</a></p>
          <p>${business.address.full}</p>
          <p>${business.hours.label}</p>
        </address>
        <p><a class="text-link" href="${business.maps.listing}" target="_blank" rel="noopener noreferrer">Get directions on Google Maps</a></p>
        ${waButton('Chat on WhatsApp', waMessages.general, 'btn btn--gold btn--sm')}
      </div>
    </div>
    <div class="container footer-bottom">
      <p>&copy; <span data-year>${new Date().getFullYear()}</span> ${business.brand}. All rights reserved.</p>
      <p>${business.address.city}, ${business.address.region}</p>
    </div>
  </footer>`;
}
