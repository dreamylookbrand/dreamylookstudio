import { business, waMessages } from '../config/business.js';
import { img } from '../components/image.js';
import { waButton } from '../components/whatsapp.js';

export function renderOwner() {
  return `
  <section class="section" id="owner" aria-labelledby="owner-title">
    <div class="container owner">
      <figure class="owner__figure">
        <div class="owner__frame">
          ${img('/images/owner/lovely-owner-dreamy-look-studio', 'Lovely, owner of Dreamy Look Studio & Academy in Firozabad', { widths: [480, 800], w: 899, h: 1600, sizes: '(max-width: 760px) 80vw, 380px', cls: 'owner__img' })}
        </div>
        <figcaption>Lovely, Owner</figcaption>
      </figure>
      <div class="owner__copy">
        <p class="kicker">Where Beauty Meets Artistry</p>
        <h2 id="owner-title">Meet Lovely</h2>
        <p>At Dreamy Look Studio &amp; Academy, our focus is on helping every client feel confident, beautiful and special. From bridal transformations to everyday beauty services, we aim to create a personalised experience for every occasion.</p>
        <div class="owner__actions">
          ${waButton('Connect with Lovely', waMessages.lovely, 'btn btn--gold')}
        </div>
      </div>
    </div>
  </section>`;
}
