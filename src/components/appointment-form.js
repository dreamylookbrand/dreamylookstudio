import { business } from '../config/business.js';

const fmtDate = (v) => {
  if (!v) return '';
  const [y, m, d] = v.split('-').map(Number);
  return new Date(y, m - 1, d).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
};
const fmtTime = (v) => {
  if (!v) return '';
  const [h, m] = v.split(':').map(Number);
  return `${h % 12 || 12}:${String(m).padStart(2, '0')} ${h >= 12 ? 'PM' : 'AM'}`;
};

export function validPhone(raw) {
  const d = raw.replace(/[\s\-()]/g, '').replace(/^(\+91|91|0)/, '');
  return /^[6-9]\d{9}$/.test(d);
}

export function buildMessage(v) {
  const lines = [`Hello ${business.brand}, I would like to request an appointment.`, '', `Name: ${v.name}`];
  if (v.phone) lines.push(`Phone: ${v.phone}`);
  lines.push(`Service: ${v.service}`);
  if (v.date) lines.push(`Preferred date: ${fmtDate(v.date)}`);
  if (v.time) lines.push(`Preferred time: ${fmtTime(v.time)}`);
  if (v.message) lines.push(`Message: ${v.message}`);
  lines.push('', 'Please let me know if this slot is available. Thank you!');
  return lines.join('\n');
}

export function initAppointmentForm() {
  const form = document.getElementById('appointment-form');
  if (!form) return;
  const status = form.querySelector('.form__status');
  const dateInput = form.elements.date;
  const t = new Date();
  dateInput.min = `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, '0')}-${String(t.getDate()).padStart(2, '0')}`;

  const setErr = (id, msg) => {
    const el = document.getElementById(`err-${id}`);
    const input = form.elements[id];
    el.textContent = msg;
    input.setAttribute('aria-invalid', msg ? 'true' : 'false');
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const v = Object.fromEntries(new FormData(form).entries());
    Object.keys(v).forEach((k) => { v[k] = String(v[k]).trim(); });
    let bad = null;
    setErr('name', ''); setErr('phone', ''); setErr('service', '');
    if (!v.name) { setErr('name', 'Please enter your name.'); bad ||= 'name'; }
    if (v.phone && !validPhone(v.phone)) { setErr('phone', 'Enter a valid 10-digit mobile number, or leave this blank.'); bad ||= 'phone'; }
    if (!v.service) { setErr('service', 'Please choose a service.'); bad ||= 'service'; }
    if (bad) { form.elements[bad].focus(); status.textContent = ''; return; }

    const url = `${form.dataset.wa}?text=${encodeURIComponent(buildMessage(v))}`;
    const w = window.open(url, '_blank', 'noopener');
    status.innerHTML = `WhatsApp is opening with your enquiry. This is a request only. Your appointment is <strong>not confirmed</strong> until the studio replies. <a href="${url}" target="_blank" rel="noopener noreferrer">Tap here if WhatsApp did not open</a>.`;
    if (!w) status.focus?.();
  });
}
