# ONG Esperança

## Descrição

Projeto web para a ONG Esperança, com foco em divulgação de projetos sociais, voluntariado e captação de recursos. Este projeto é uma SPA (Single Page Application) com navegação dinâmica, acessibilidade e otimização para produção.

---

## Funcionalidades Implementadas

- SPA: navegação entre páginas sem recarregar o site.
- Validação de formulário de cadastro.
- Layout responsivo para diferentes tamanhos de tela.
- Alto contraste e suporte a navegação por teclado (WCAG 2.1 Nível AA).
- Sistema de feedback visual para formulários.
- Minificação de CSS e otimização de imagens para produção.
- Estrutura modular de CSS: base, layout, componentes e responsivo.
- Controle de versão com Git/GitHub (GitFlow e commits semânticos).
- Release oficial no GitHub (`v1.2.0`).

---

## Tecnologias Utilizadas

- HTML5
- CSS3 (modular e minificado)
- JavaScript (ES6+)
- Git/GitHub (controle de versão e release)

---

## Estrutura do Projeto
```
/
├─ css/
│ ├─ base.css
│ ├─ componentes.css
│ ├─ layout.css
│ ├─ responsivo.css
│ ├─ style.css
│ └─ style.min.css
├─ imagens/
│ ├─ banner.jpg
│ ├─ logo.png
│ ├─ projeto1.jpg
│ ├─ projeto2.jpg
│ └─ voluntarios.jpg
├─ js/
│ ├─ main.js
│ ├─ router.js
│ ├─ templates.js
│ └─ validation.js
├─ cadastro.html
├─ index.html
├─ projetos.html
└─ README.md
```
---

## Como Rodar Localmente

1. Abra o terminal ou prompt de comando.
2. Clone o repositório:
   git clone https://github.com/jbirkheuer/projeto-ong-html.git
3. Entre na pasta do projeto:
   cd projeto-ong-html
4. Abra o arquivo index.html no navegador manualmente (ou use uma extensão de live server se quiser).

---

## Release

A versão final do projeto está disponível em: [Release v1.2.0](https://github.com/jbirkheuer/projeto-ong-html/releases/tag/v1.2.0)

---

## Observações de Acessibilidade

- Todos os links e botões são navegáveis via teclado.
- Contraste mínimo de 4.5:1 para textos normais.
- Implementado modo de alto contraste ativável via botão.
- Suporte a leitores de tela.

## Autor

Jean Carlos Birkheuer
