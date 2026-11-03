import { business, waMessages } from '../config/business.js';
import { icons } from './icons.js';
import { waLink } from './whatsapp.js';

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#academy', label: 'Academy' },
  { href: '#contact', label: 'Contact' },
];

export function renderHeader() {
  const links = navLinks.map((l) => `<li><a href="${l.href}">${l.label}</a></li>`).join('');
  return `
  <a class="skip-link" href="#main">Skip to content</a>
  <header class="site-header" id="top">
    <div class="container site-header__bar">
      <a class="brand" href="#home" aria-label="${business.brand} – home">
        <img class="brand__logo" src="/images/logo/dreamy-look-logo-gold-120.webp" srcset="/images/logo/dreamy-look-logo-gold-120.webp 1x, /images/logo/dreamy-look-logo-gold-240.webp 2x" width="56" height="56" alt="Dreamy Look Studio &amp; Academy golden DL logo">
        <span class="brand__name">Dreamy Look<small>Studio &amp; Academy</small></span>
      </a>
      <nav class="primary-nav" id="primary-nav" aria-label="Main navigation">
        <ul>${links}</ul>
        <a class="btn btn--gold btn--sm primary-nav__cta" href="#appointment">Book Appointment</a>
      </nav>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-nav" aria-label="Open menu">
        <span class="menu-toggle__open">${icons.menu}</span><span class="menu-toggle__close">${icons.close}</span>
      </button>
    </div>
  </header>`;
}
