import { business, waMessages } from '../config/business.js';
import { services } from '../data/services.js';
import { waLink } from '../components/whatsapp.js';

export const serviceOptions = [
  ...services.map((s) => s.title),
  'Makeup Academy / Training',
  'Something else',
];

export function renderAppointment() {
  const opts = serviceOptions.map((s) => `<option value="${s}">${s}</option>`).join('');
  return `
  <section class="section section--alt" id="appointment" aria-labelledby="appt-title">
    <div class="container appointment">
      <div class="appointment__copy">
        <h2 id="appt-title">Book an Appointment</h2>
        <p>Share a few details and we will open a WhatsApp chat with your enquiry ready to send. Your appointment is only confirmed once the studio replies and agrees a time with you.</p>
        <p class="appointment__note">Prefer to talk? Call <a href="tel:${business.phoneHref}">${business.phone}</a>.</p>
      </div>
      <form class="form" id="appointment-form" novalidate data-wa="https://wa.me/${business.whatsappNumber}">
        <div class="field">
          <label for="f-name">Your name <span aria-hidden="true">*</span></label>
          <input id="f-name" name="name" type="text" autocomplete="name" required aria-describedby="err-name">
          <p class="field__error" id="err-name" role="alert"></p>
        </div>
        <div class="field">
          <label for="f-phone">Phone number <small>(optional)</small></label>
          <input id="f-phone" name="phone" type="tel" inputmode="tel" autocomplete="tel" placeholder="e.g. 98XXXXXXXX" aria-describedby="err-phone">
          <p class="field__error" id="err-phone" role="alert"></p>
        </div>
        <div class="field">
          <label for="f-service">Service <span aria-hidden="true">*</span></label>
          <select id="f-service" name="service" required aria-describedby="err-service">
            <option value="">Select a service</option>${opts}
          </select>
          <p class="field__error" id="err-service" role="alert"></p>
        </div>
        <div class="field-row">
          <div class="field"><label for="f-date">Preferred date <small>(optional)</small></label><input id="f-date" name="date" type="date"></div>
          <div class="field"><label for="f-time">Preferred time <small>(optional)</small></label><input id="f-time" name="time" type="time"></div>
        </div>
        <div class="field">
          <label for="f-msg">Message <small>(optional)</small></label>
          <textarea id="f-msg" name="message" rows="4" placeholder="Occasion, outfit, any details you would like us to know"></textarea>
        </div>
        <button class="btn btn--gold btn--block" type="submit">Send enquiry on WhatsApp</button>
        <p class="form__status" role="status" aria-live="polite"></p>
      </form>
    </div>
  </section>`;
}
