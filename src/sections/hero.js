import { business, waMessages } from '../config/business.js';
import { icons } from '../components/icons.js';
import { img } from '../components/image.js';

export function renderHero() {
  return `
  <section class="hero" id="home" aria-labelledby="hero-title">
    <div class="container hero__grid">
      <div class="hero__copy">
        <p class="eyebrow">LUXURY BEAUTY • BRIDAL • MAKEUP ACADEMY</p>
        <h1 id="hero-title">Your Beauty. Your Dreams. Our Art.</h1>
        <p class="hero__lead">Discover the beauty of every moment with professional bridal makeup, personalised beauty services and a luxurious salon experience at Dreamy Look Studio &amp; Academy.</p>
        <div class="hero__actions">
          <a class="btn btn--gold" href="#appointment">Book Your Appointment</a>
          <a class="btn btn--outline" href="#gallery">Explore Our Gallery</a>
        </div>
        <p class="hero__place">${icons.pin}<span>${business.address.city}, ${business.address.region}</span></p>
      </div>
      <figure class="hero__figure">
        <div class="hero__frame">
          ${img('/images/bridal/hero-bridal-makeup-firozabad', 'Bride in red and gold lehenga with bridal makeup by Dreamy Look Studio & Academy, Firozabad', { widths: [600, 900, 1200], sizes: '(max-width: 900px) 80vw, 480px', priority: true, cls: 'hero__img' })}
        </div>
      </figure>
    </div>
  </section>`;
}
