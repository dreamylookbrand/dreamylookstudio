// Pure string rendering — runs at build time (pre-rendering for SEO) and never touches the DOM.
import { renderHeader } from './components/header.js';
import { renderFooter } from './components/footer.js';
import { renderWhatsAppFloat } from './components/whatsapp.js';
import { renderBackToTop } from './components/back-to-top.js';
import { renderLightbox } from './components/lightbox.js';
import { renderHero } from './sections/hero.js';
import { renderAbout } from './sections/about.js';
import { renderOwner } from './sections/owner.js';
import { renderServices } from './sections/services.js';
import { renderGallery } from './sections/gallery.js';
import { renderAcademy } from './sections/academy.js';
import { renderTestimonials } from './sections/testimonials.js';
import { renderAppointment } from './sections/appointment.js';
import { renderLocation } from './sections/location.js';
import { renderFaq } from './sections/faq.js';

export function renderPage() {
  return [
    renderHeader(),
    '<main id="main">',
    renderHero(), renderOwner(), renderAbout(), renderServices(), renderGallery(), renderAcademy(),
    renderTestimonials(), renderAppointment(), renderLocation(), renderFaq(),
    '</main>',
    renderFooter(), renderWhatsAppFloat(), renderBackToTop(), renderLightbox(),
  ].join('\n');
}
