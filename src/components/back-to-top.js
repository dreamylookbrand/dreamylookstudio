import { icons } from './icons.js';

export const renderBackToTop = () =>
  `<button class="back-to-top" type="button" aria-label="Back to top" hidden>${icons.up}</button>`;

export function initBackToTop() {
  const btn = document.querySelector('.back-to-top');
  if (!btn) return;
  const toggle = () => { btn.hidden = window.scrollY < 700; };
  window.addEventListener('scroll', toggle, { passive: true });
  toggle();
  btn.addEventListener('click', () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
  });
}
