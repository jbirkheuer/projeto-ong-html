export const inicioTemplate = `
<section class="hero" aria-labelledby="hero-title">
  <div class="container">
    <h1 id="hero-title">ONG Esperança</h1>
    <p>Transformando comunidades por meio de projetos sociais.</p>
    <figure>
      <img src="./imagens/banner.jpg" alt="Voluntários em ação" class="hero-image">
      <figcaption>Voluntários atuando em projetos comunitários</figcaption>
    </figure>
  </div>
</section>

<section class="about" aria-labelledby="about-title">
  <div class="container">
    <h2 id="about-title">Missão, Visão e Valores</h2>
    <article>
      <h3>Missão</h3>
      <p>Promover desenvolvimento social sustentável através da educação e do engajamento comunitário.</p>
    </article>
    <article>
      <h3>Visão</h3>
      <p>Ser referência nacional em iniciativas sociais participativas até 2030.</p>
    </article>
    <article>
      <h3>Valores</h3>
      <ul>
        <li>Transparência</li>
        <li>Respeito</li>
        <li>Inclusão</li>
      </ul>
    </article>
  </div>
</section>

<section class="highlights" aria-labelledby="highlights-title">
  <div class="container">
    <h2 id="highlights-title">Nossos Destaques</h2>
    <div class="cards">
      <article class="card">
        <figure>
          <img src="./imagens/voluntarios.jpg" alt="Voluntários em ação">
          <figcaption>Equipe de voluntários em atividade social</figcaption>
        </figure>
        <h3>Projetos</h3>
        <p>Atuação em educação, saúde e meio ambiente.</p>
        <a href="#projetos" data-route="projetos">Ver projetos</a>
      </article>

      <article class="card">
        <h3>Voluntariado</h3>
        <p>Participe como voluntário e ajude a transformar realidades.</p>
        <a href="#cadastro" data-route="cadastro">Inscreva-se</a>
      </article>
    </div>
  </div>
</section>

<section id="contato" class="contact" aria-labelledby="contact-title">
  <div class="container">
    <h2 id="contact-title">Contato</h2>
    <address>
      <p>Rua Birimbó, 123 — Centro — Cascatas/RS</p>
      <p>Telefone: <a href="https://wa.me/5554912345678" target="_blank">(54) 91234-5678</a></p>
      <p>Email: <a href="mailto:contato@institutoesperanca.org.br">contato@institutoesperanca.org.br</a></p>
    </address>
  </div>
</section>
`;

export const projetosTemplate = `
<div class="container">
  <section aria-labelledby="projects-title">
    <h2 id="projects-title">Nossos Projetos</h2>
    
    <article aria-labelledby="proj1">
      <h3 id="proj1">Educar para o Futuro</h3>
      <p>Projeto de experiências culturais e educativas para crianças, promovendo aprendizado e integração social.</p>
      <p><strong>Impacto:</strong> 500 crianças beneficiadas em 2024.</p>
      <p><a href="#cadastro" data-route="cadastro" class="botao">Quero ser voluntário</a></p>
      <figure>
        <img src="./imagens/projeto1.jpg" alt="Crianças em atividade educacional">
        <figcaption>Crianças participando de atividades educativas</figcaption>
      </figure>
    </article>

    <article aria-labelledby="proj2">
      <h3 id="proj2">EcoAção</h3>
      <p>Atividades de educação ambiental e mutirões de limpeza em matas e florestas.</p>
      <p><strong>Resultado:</strong> 100 toneladas de resíduos coletados em 2024.</p>
      <p><a href="#cadastro" data-route="cadastro" class="botao">Quero ser voluntário</a></p>
      <figure>
        <img src="./imagens/projeto2.jpg" alt="Mutirão de limpeza ambiental">
        <figcaption>Voluntários em mutirão de limpeza ambiental</figcaption>
      </figure>
    </article>
  </section>

  <section aria-labelledby="volunteer-title">
    <h2 id="volunteer-title">Voluntariado</h2>
    <p>Participe como voluntário e ajude a transformar vidas! Temos oportunidades em diferentes áreas:</p>
    <ul>
      <li>Educação: reforço escolar, atividades culturais e recreativas.</li>
      <li>Saúde: apoio em campanhas de prevenção e orientação.</li>
      <li>Meio ambiente: mutirões de limpeza e plantio de árvores.</li>
    </ul>
    <p>Requisitos: maior de 16 anos, disponibilidade mínima de 4 horas por semana e compromisso com a comunidade.</p>
    <p>Horários flexíveis de acordo com sua disponibilidade.</p>
    <p><a href="#cadastro" data-route="cadastro" class="botao">Inscreva-se como voluntário</a></p>
  </section>

  <section aria-labelledby="donate-title">
    <h2 id="donate-title">Como Doar</h2>
    <p>Seu apoio é essencial para que possamos continuar nossos projetos. Você pode ajudar de várias formas:</p>
    <ul>
      <li>Doações financeiras via transferência ou PIX.</li>
      <li>Doação de materiais e equipamentos escolares.</li>
      <li>Parcerias corporativas ou institucionais.</li>
    </ul>
    <p>Para fazer uma doação ou saber mais, entre em contato conosco:</p>
    <p><a href="#contato" data-route="inicio" class="botao">Fale conosco</a></p>
  </section>
</div>
`;

export const cadastroTemplate = `
<section aria-labelledby="form-title">
  <div class="container">
    <h2 id="form-title">Cadastro de Voluntários</h2>
    <form id="cadastroForm" novalidate>
      <fieldset>
        <legend>Dados Pessoais</legend>
        <label for="nome">Nome completo *</label>
        <input id="nome" name="nome" type="text" required minlength="3">

        <label for="email">Email *</label>
        <input id="email" name="email" type="email" required>

        <label for="cpf">CPF *</label>
        <input id="cpf" name="cpf" type="text" inputmode="numeric" required pattern="\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}" placeholder="000.000.000-00">

        <label for="telefone">Telefone *</label>
        <input id="telefone" name="telefone" type="tel" required pattern="\\(\\d{2}\\)\\s?\\d{4,5}-\\d{4}" placeholder="(00) 90000-0000">

        <label for="nascimento">Data de Nascimento *</label>
        <input id="nascimento" name="nascimento" type="date" required>
      </fieldset>

      <fieldset>
        <legend>Endereço</legend>
        <label for="cep">CEP *</label>
        <input id="cep" name="cep" type="text" required pattern="\\d{5}-\\d{3}" placeholder="00000-000" maxlength="9">

        <label for="endereco">Endereço *</label>
        <input id="endereco" name="endereco" type="text" required>

        <label for="cidade">Cidade *</label>
        <input id="cidade" name="cidade" type="text" required>

        <label for="estado">Estado *</label>
        <select id="estado" name="estado" required>
          <option value="">Selecione</option>
          <option value="AC">Acre</option>
          <option value="AL">Alagoas</option>
          <option value="AP">Amapá</option>
          <option value="AM">Amazonas</option>
          <option value="BA">Bahia</option>
          <option value="CE">Ceará</option>
          <option value="DF">Distrito Federal</option>
          <option value="ES">Espírito Santo</option>
          <option value="GO">Goiás</option>
          <option value="MA">Maranhão</option>
          <option value="MT">Mato Grosso</option>
          <option value="MS">Mato Grosso do Sul</option>
          <option value="MG">Minas Gerais</option>
          <option value="PA">Pará</option>
          <option value="PB">Paraíba</option>
          <option value="PR">Paraná</option>
          <option value="PE">Pernambuco</option>
          <option value="PI">Piauí</option>
          <option value="RJ">Rio de Janeiro</option>
          <option value="RN">Rio Grande do Norte</option>
          <option value="RS">Rio Grande do Sul</option>
          <option value="RO">Rondônia</option>
          <option value="RR">Roraima</option>
          <option value="SC">Santa Catarina</option>
          <option value="SP">São Paulo</option>
          <option value="SE">Sergipe</option>
          <option value="TO">Tocantins</option>
        </select>
      </fieldset>

      <fieldset>
        <legend>Interesses</legend>
        <label for="interesse">Áreas de interesse</label>
        <select id="interesse" name="interesse" multiple>
          <option value="educacao">Educação</option>
          <option value="saude">Saúde</option>
          <option value="meio-ambiente">Meio ambiente</option>
        </select>
      </fieldset>

      <div>
        <button type="submit">Enviar cadastro</button>
        <button type="reset">Limpar</button>
      </div>
    </form>
  </div>
</section>
`;