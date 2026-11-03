import { business } from '../config/business.js';
import { icons } from '../components/icons.js';
import { reviews } from '../data/reviews.js';

export function renderTestimonials() {
  const list = reviews.length
    ? `<ul class="review-list">${reviews.map((r) => `<li class="review"><blockquote><p>${r.text}</p></blockquote><footer>${r.name}${r.date ? `, ${r.date}` : ''}</footer></li>`).join('')}</ul>`
    : '';
  return `
  <section class="section" id="reviews" aria-labelledby="reviews-title">
    <div class="container reviews">
      <div class="reviews__google">
        <h2 id="reviews-title">What our clients say</h2>
        <p>Read genuine reviews and see recent photos on our Google Maps listing. Visited the studio? An honest review helps other brides and clients find us.</p>
        ${list}
        <div class="reviews__actions">
          <a class="btn btn--gold" href="${business.maps.listing}" target="_blank" rel="noopener noreferrer">${icons.star}<span>See Google reviews</span></a>
          <a class="btn btn--outline" href="${business.maps.listing}" target="_blank" rel="noopener noreferrer"><span>Leave a review</span></a>
        </div>
      </div>
      <aside class="insta-card" aria-labelledby="insta-title">
        <h3 id="insta-title">Follow us on Instagram</h3>
        <p>${business.instagramHandle}</p>
        <a class="insta-card__qr" href="${business.social.instagram}" target="_blank" rel="noopener noreferrer" aria-label="Open Dreamy Look Studio on Instagram">
          <img src="/images/social/instagram-dreamylookstudio-qr.svg" width="200" height="200" alt="QR code to open the Dreamy Look Studio Instagram profile" loading="lazy">
        </a>
        <p class="insta-card__hint">Scan with your phone camera</p>
        <a class="btn btn--outline btn--sm" href="${business.social.instagram}" target="_blank" rel="noopener noreferrer">${icons.instagram}<span>Open Instagram</span></a>
      </aside>
    </div>
  </section>`;
}
