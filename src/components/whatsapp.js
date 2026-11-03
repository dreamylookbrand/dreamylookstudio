import { business, waMessages } from '../config/business.js';
import { icons } from './icons.js';

/** Build a wa.me link with a correctly encoded prefilled message. */
export function waLink(message = waMessages.general) {
  return `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/** Reusable WhatsApp CTA button markup. */
export function waButton(label, message, cls = 'btn btn--outline') {
  return `<a class="${cls}" href="${waLink(message)}" target="_blank" rel="noopener noreferrer">${icons.whatsapp}<span>${label}</span></a>`;
}

/** Floating WhatsApp button — fixed to the BOTTOM-LEFT of the viewport. */
export function renderWhatsAppFloat() {
  return `
  <a class="wa-float" href="${waLink(waMessages.general)}" target="_blank" rel="noopener noreferrer" aria-label="Chat with Dreamy Look Studio on WhatsApp">
    <span class="wa-float__icon">${icons.whatsapp}</span>
    <span class="wa-float__label" aria-hidden="true">WhatsApp Us</span>
  </a>`;
}
