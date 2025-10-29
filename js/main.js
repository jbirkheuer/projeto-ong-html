import { setupNavigation, navigate } from './router.js';

document.addEventListener('DOMContentLoaded', () => {
  setupNavigation();
  const initialRoute = location.hash.replace('#','') || 'inicio';
  navigate(initialRoute);
});

// Menu mobile
const menuToggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navUl.classList.toggle('active');
});