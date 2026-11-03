import { icons } from './icons.js';

export const renderLightbox = () => `
  <div class="lightbox" role="dialog" aria-modal="true" aria-label="Photo viewer" hidden>
    <button class="lightbox__btn lightbox__close" type="button" aria-label="Close photo viewer">${icons.close}</button>
    <button class="lightbox__btn lightbox__prev" type="button" aria-label="Previous photo">${icons.prev}</button>
    <figure class="lightbox__figure">
      <img class="lightbox__img" alt="" width="1200" height="1600">
      <figcaption class="lightbox__caption"></figcaption>
    </figure>
    <button class="lightbox__btn lightbox__next" type="button" aria-label="Next photo">${icons.next}</button>
  </div>`;

export function initLightbox(getItems) {
  const box = document.querySelector('.lightbox');
  if (!box) return;
  const img = box.querySelector('.lightbox__img');
  const cap = box.querySelector('.lightbox__caption');
  const closeBtn = box.querySelector('.lightbox__close');
  let list = [];
  let idx = 0;
  let opener = null;

  const show = (i) => {
    idx = (i + list.length) % list.length;
    const el = list[idx];
    const thumb = el.querySelector('img');
    img.src = el.dataset.full;
    img.alt = thumb.alt;
    cap.textContent = `${thumb.alt} (${idx + 1} / ${list.length})`;
    // preload neighbours
    [idx + 1, idx - 1].forEach((n) => { const p = new Image(); p.src = list[(n + list.length) % list.length].dataset.full; });
  };
  const open = (el) => {
    list = getItems();
    opener = el;
    box.hidden = false;
    document.body.classList.add('lightbox-open');
    show(list.indexOf(el));
    closeBtn.focus();
  };
  const close = () => {
    box.hidden = true;
    document.body.classList.remove('lightbox-open');
    img.removeAttribute('src');
    opener?.focus();
  };

  document.querySelectorAll('.gallery__item').forEach((el) => el.addEventListener('click', () => open(el)));
  box.querySelector('.lightbox__prev').addEventListener('click', () => show(idx - 1));
  box.querySelector('.lightbox__next').addEventListener('click', () => show(idx + 1));
  closeBtn.addEventListener('click', close);
  box.addEventListener('click', (e) => { if (e.target === box || e.target.classList.contains('lightbox__figure')) close(); });

  document.addEventListener('keydown', (e) => {
    if (box.hidden) return;
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowLeft') show(idx - 1);
    else if (e.key === 'ArrowRight') show(idx + 1);
    else if (e.key === 'Tab') {
      const f = [...box.querySelectorAll('button')];
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  // swipe on touch screens
  let x0 = null;
  box.addEventListener('touchstart', (e) => { x0 = e.touches[0].clientX; }, { passive: true });
  box.addEventListener('touchend', (e) => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 50) show(idx + (dx < 0 ? 1 : -1));
    x0 = null;
  });
}
