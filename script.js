// CGT — script.js  (keep JS minimal; interactivity only)

// Mobile nav toggle
const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');
toggle?.addEventListener('click', () => links.classList.toggle('open'));

// Close mobile menu after clicking a link
links?.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => links.classList.remove('open'))
);

// Contact form — submits to Formspree (set the form's action to your form ID).
const form = document.getElementById('contactForm');
const note = document.getElementById('formNote');
const errorNote = document.getElementById('formError');
form?.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (note) note.hidden = true;
  if (errorNote) errorNote.hidden = true;
  try {
    const res = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' }
    });
    if (res.ok) {
      form.reset();
      if (note) note.hidden = false;
    } else {
      if (errorNote) errorNote.hidden = false;
    }
  } catch (_) {
    if (errorNote) errorNote.hidden = false;
  }
});

// Auto year in footer
document.getElementById('year').textContent = new Date().getFullYear();
