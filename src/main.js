import '@fontsource/cormorant-garamond/500.css';
import '@fontsource/cormorant-garamond/600.css';
import '@fontsource/cormorant-garamond/500-italic.css';
import '@fontsource-variable/inter';
import './styles/reset.css';
import './styles/variables.css';
import './styles/global.css';
import './styles/layout.css';
import './styles/components.css';
import './styles/sections.css';
import './styles/responsive.css';

import { initMobileMenu } from './components/mobile-menu.js';
import { initGalleryFilter } from './components/gallery-filter.js';
import { initLightbox } from './components/lightbox.js';
import { initAccordion } from './components/accordion.js';
import { initBackToTop } from './components/back-to-top.js';
import { initAppointmentForm } from './components/appointment-form.js';

// The page HTML is pre-rendered at build time (see vite.config.js); this file only adds behaviour.
initMobileMenu();
const gallery = initGalleryFilter();
if (gallery) initLightbox(gallery.visibleItems);
initAccordion();
initBackToTop();
initAppointmentForm();

document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });

document.querySelector('[data-copy-address]')?.addEventListener('click', async (e) => {
  const btn = e.currentTarget;
  const status = document.querySelector('.copy-status');
  try {
    await navigator.clipboard.writeText(btn.dataset.address);
    status.textContent = 'Address copied to clipboard.';
  } catch {
    status.textContent = 'Could not copy automatically. Please select the address and copy it.';
  }
  setTimeout(() => { status.textContent = ''; }, 3500);
});
