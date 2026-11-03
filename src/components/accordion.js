export function initAccordion() {
  document.querySelectorAll('.accordion').forEach((acc) => {
    const buttons = [...acc.querySelectorAll('.accordion__trigger')];
    buttons.forEach((btn, i) => {
      const panel = document.getElementById(btn.getAttribute('aria-controls'));
      btn.addEventListener('click', () => {
        const open = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', String(!open));
        panel.hidden = open;
      });
      btn.addEventListener('keydown', (e) => {
        const map = { ArrowDown: i + 1, ArrowUp: i - 1, Home: 0, End: buttons.length - 1 };
        if (e.key in map) { e.preventDefault(); buttons[(map[e.key] + buttons.length) % buttons.length].focus(); }
      });
    });
  });
}
