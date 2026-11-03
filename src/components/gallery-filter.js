// Filters the gallery by category and handles "View all photos".
const INITIAL = 15;

export function initGalleryFilter() {
  const root = document.querySelector('[data-gallery]');
  if (!root) return null;
  const items = [...root.querySelectorAll('.gallery__item')];
  const tabs = [...document.querySelectorAll('[data-filter]')];
  const more = document.querySelector('[data-gallery-more]');
  const count = document.querySelector('[data-gallery-count]');
  let cat = 'all';
  let expanded = false;

  const apply = () => {
    const matches = items.filter((el) => cat === 'all' || el.dataset.category === cat);
    const limit = expanded ? matches.length : INITIAL;
    items.forEach((el) => { el.hidden = true; el.classList.remove('is-feature'); });
    matches.slice(0, limit).forEach((el, i) => {
      el.hidden = false;
      if (i % 5 === 0) el.classList.add('is-feature');
    });
    if (more) {
      more.hidden = matches.length <= INITIAL;
      more.textContent = expanded ? 'Show fewer photos' : `View all photos (${matches.length})`;
      more.setAttribute('aria-expanded', String(expanded));
    }
    if (count) count.textContent = `Showing ${Math.min(limit, matches.length)} of ${matches.length} photos`;
  };

  tabs.forEach((t) => t.addEventListener('click', () => {
    cat = t.dataset.filter;
    expanded = false;
    tabs.forEach((x) => x.setAttribute('aria-pressed', String(x === t)));
    apply();
  }));
  more?.addEventListener('click', () => { expanded = !expanded; apply(); });
  apply();
  return { visibleItems: () => items.filter((el) => !el.hidden) };
}
