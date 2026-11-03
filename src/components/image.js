/** Responsive <img> using the -480/-800/-1200 WebP naming convention. */
export function img(base, alt, { sizes = '100vw', widths = [480, 800, 1200], w = 1200, h = 1600, lazy = true, cls = '', priority = false } = {}) {
  const srcset = widths.map((x) => `${base}-${x}.webp ${x}w`).join(', ');
  const src = `${base}-${widths[widths.length - 1]}.webp`;
  return `<img class="${cls}" src="${src}" srcset="${srcset}" sizes="${sizes}" width="${w}" height="${h}" alt="${alt}" ${priority ? 'fetchpriority="high" decoding="async"' : lazy ? 'loading="lazy" decoding="async"' : ''}>`;
}

export const logoImg = (size = 240, cls = 'logo-img', alt = 'Dreamy Look Studio & Academy golden DL logo') =>
  `<img class="${cls}" src="/images/logo/dreamy-look-logo-gold-${size}.webp" srcset="/images/logo/dreamy-look-logo-gold-240.webp 240w, /images/logo/dreamy-look-logo-gold-480.webp 480w" sizes="${size / 2}px" width="1254" height="1254" alt="${alt}">`;
