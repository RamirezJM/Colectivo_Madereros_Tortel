import './scss/main.scss';
import '@fontsource-variable/fraunces/wght.css';
import '@fontsource-variable/ibm-plex-sans/wght.css';
import * as bootstrap from 'bootstrap';

document.querySelectorAll('.btn-toggle-info').forEach((btn) => {
  const targetId = btn.getAttribute('data-bs-target');
  const target = document.querySelector(targetId);

  target.addEventListener('shown.bs.collapse', () => {
    btn.textContent = 'Ver menos';
  });

  target.addEventListener('hidden.bs.collapse', () => {
    btn.textContent = 'Ver más';
  });
});