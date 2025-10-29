import { setupNavigation, navigate } from './router.js';

document.addEventListener('DOMContentLoaded', () => {
  setupNavigation();
  const initialRoute = location.hash.replace('#','') || 'inicio';
  navigate(initialRoute);
});

// Alto Contraste
const contrastBtn = document.getElementById('contrast-toggle');
if (contrastBtn) {  // Verifica se o botão existe
  contrastBtn.addEventListener('click', () => {
    document.body.classList.toggle('high-contrast');
  });
}

// Menu mobile
const menuToggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navUl.classList.toggle('active');
});