// Add the real WhatsApp number here in international format, without +, spaces or leading zero.
// Example for Nigeria: 2348012345678
const WHATSAPP_NUMBER = '2347089275868';

document.getElementById('year').textContent = new Date().getFullYear();
const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('nav');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', open);
});
document.querySelectorAll('nav a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));

document.getElementById('order-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const message = `Hello BIBIRE CLASSIC COUTURE!%0A%0AI would like to order: *${form.get('item')}*%0AName: ${form.get('name')}%0APhone: ${form.get('phone')}%0ADetails: ${form.get('details') || 'Not specified'}`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank', 'noopener');
});
