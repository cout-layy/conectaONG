export function templateHome() {
  return `
    <section class="missao">
      <h2>Nossa Missão</h2>
      <p>
        A ConectaONG tem como missão conectar pessoas e recursos para fortalecer 
        organizações não governamentais (ONGs) e promover o desenvolvimento social.
      </p>
      <img src="imagens/imagem.jpg" alt="ONG em ação" class="imagem-missao">
    </section>
  `;
}

export function templateProjetos() {
  return `
    <section class="projetos">
      <h2>Nossos Projetos</h2>
      <p>Conheça alguns dos nossos principais projetos em andamento:</p>

      <div class="projeto-container">
        <div class="projeto">
          <img src="imagens/imagem2.jpg" alt="Projeto 1">
          <h3>Projeto Esperança Animal</h3>
          <p>Iniciativa dedicada à proteção e adoção de animais abandonados, promovendo o cuidado e a conscientização.</p>
          <a href="#" class="botao" onclick="alert('Mais informações em breve!')">Saiba mais</a>
        </div>

        <div class="projeto">
          <img src="imagens/imagem3.jpg" alt="Projeto 2">
          <h3>Educar para Transformar</h3>
          <p>Projeto que oferece oficinas educativas e culturais para crianças em situação de vulnerabilidade.</p>
          <a href="#" class="botao" onclick="alert('Mais informações em breve!')">Saiba mais</a>
        </div>

        <div class="projeto">
          <img src="imagens/imagem4.jpg" alt="Projeto 3">
          <h3>Verde Vidas</h3>
          <p>Ação voltada para o plantio de árvores e preservação de áreas verdes urbanas.</p>
          <a href="#" class="botao" onclick="alert('Mais informações em breve!')">Saiba mais</a>
        </div>
      </div>
    </section>
  `;
}

export function templateContato() {
  return `
    <section class="contato">
      <h2>Fale Conosco</h2>
      <p>Preencha o formulário abaixo e entraremos em contato com você:</p>

      <form id="form-contato">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" placeholder="Digite seu nome" required>

        <label for="email">E-mail:</label>
        <input type="email" id="email" placeholder="Digite seu e-mail" required>

        <label for="telefone">Telefone:</label>
        <input type="tel" id="telefone" placeholder="(xx) xxxxx-xxxx">

        <label for="mensagem">Mensagem:</label>
        <textarea id="mensagem" rows="4" placeholder="Digite sua mensagem..." required></textarea>

        <button type="submit">Enviar</button>
        <p id="mensagem-envio" class="mensagem"></p>
      </form>

      <address>
        <p><strong>Endereço:</strong> Rua Arthur Leal de Almeida, 71 - Boiçucanga/SP</p>
        <p><strong>Telefone:</strong> (12) 99739-2984</p>
        <p><strong>E-mail:</strong> contato@conectaong.org</p>
      </address>
    </section>
  `;
}