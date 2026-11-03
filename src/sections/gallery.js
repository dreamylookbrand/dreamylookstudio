import { gallery, galleryCategories } from '../data/gallery.js';

export function renderGallery() {
  const tabs = galleryCategories
    .map((c, i) => `<button class="filter" type="button" data-filter="${c.id}" aria-pressed="${i === 0}">${c.label}</button>`)
    .join('');
  const items = gallery
    .map((g, i) => `
    <button class="gallery__item${i < 15 && i % 5 === 0 ? ' is-feature' : ''}" type="button" data-category="${g.category}" data-full="${g.src}" ${i >= 15 ? 'hidden' : ''} aria-label="Open photo: ${g.alt}">
      <img src="${g.src.replace('-1200', '-480')}" srcset="${g.srcset}" sizes="(max-width: 600px) 50vw, (max-width: 1100px) 33vw, 25vw" width="${g.w}" height="${g.h}" alt="${g.alt}" loading="lazy" decoding="async">
    </button>`)
    .join('');
  return `
  <section class="section" id="gallery" aria-labelledby="gallery-title">
    <div class="container">
      <header class="section-head">
        <h2 id="gallery-title">Bridal &amp; Beauty Gallery</h2>
        <p>Real looks created at the studio. Tap any photo to view it full screen.</p>
      </header>
      <div class="filters" role="group" aria-label="Filter gallery by category">${tabs}</div>
      <div class="gallery" data-gallery>${items}</div>
      <div class="gallery__foot">
        <p data-gallery-count aria-live="polite"></p>
        <button class="btn btn--outline" type="button" data-gallery-more aria-expanded="false">View all photos</button>
      </div>
    </div>
  </section>`;
}
