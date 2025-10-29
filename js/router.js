import { inicioTemplate, projetosTemplate, cadastroTemplate } from './templates.js';
import { setupFormValidation } from './validation.js';

const routes = {
  inicio: inicioTemplate,
  projetos: projetosTemplate,
  cadastro: cadastroTemplate,
  contato: inicioTemplate // contato é uma seção do início
};

export function navigate(route){
  const app = document.getElementById('app');
  app.innerHTML = routes[route] || '<h1>Página não encontrada</h1>';

  // Formulário de cadastro
  if(route === 'cadastro'){
    setupFormValidation();
  }

  // Rolagem para contato
  if(route === 'contato'){
    const contatoSection = document.getElementById('contato');
    if(contatoSection){
      contatoSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Atualiza os links SPA após renderização
  document.querySelectorAll('a[data-route]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const newRoute = link.dataset.route;
      navigate(newRoute);
      window.history.pushState({route: newRoute}, '', `#${newRoute}`);
      // Fecha menu mobile ao clicar
      const navUl = document.querySelector('nav ul');
      if(navUl.classList.contains('active')){
        navUl.classList.remove('active');
      }
    });
  });
}

export function setupNavigation() {
  document.querySelectorAll('a[data-route]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const route = link.dataset.route;
      navigate(route);
      window.history.pushState({route}, '', `#${route}`);
      // Fecha menu mobile
      const navUl = document.querySelector('nav ul');
      if(navUl.classList.contains('active')){
        navUl.classList.remove('active');
      }
    });
  });

  window.addEventListener('popstate', e => {
    navigate(e.state?.route || 'inicio');
  });
}
