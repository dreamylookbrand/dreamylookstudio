import { waMessages } from '../config/business.js';
import { logoImg } from '../components/image.js';
import { waButton } from '../components/whatsapp.js';
import { icons } from '../components/icons.js';

export function renderAcademy() {
  return `
  <section class="section section--alt" id="academy" aria-labelledby="academy-title">
    <div class="container academy">
      <div class="academy__copy">
        <p class="kicker">Dreamy Look Academy</p>
        <h2 id="academy-title">Learn the Art of Beauty</h2>
        <p>Explore beauty and makeup learning opportunities at Dreamy Look Studio &amp; Academy. Contact us to discuss available training options, course details and upcoming batches.</p>
        <ul class="academy__points">
          <li>${icons.cap}<span>Makeup and beauty training enquiries</span></li>
          <li>${icons.chat}<span>Course details shared directly by the studio</span></li>
          <li>${icons.calendar}<span>Ask about upcoming batches</span></li>
        </ul>
        ${waButton('Enquire About Courses', waMessages.academy, 'btn btn--gold')}
      </div>
      <div class="academy__panel" aria-hidden="true">${logoImg(480, 'academy__logo', '')}</div>
    </div>
  </section>`;
}
