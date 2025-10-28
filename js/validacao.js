// Mostra mensagens de erro e sucesso dentro da página

export function validarFormulario() {
  const form = document.getElementById("form-contato");
  const mensagem = document.getElementById("mensagem");

  if (!form || !mensagem) return; // Se não existe, sai da função

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();

    if (nome === "" || email === "") {
      mensagem.textContent = "Por favor, preencha todos os campos!";
      mensagem.style.color = "red";
      return;
    }

    mensagem.textContent = "Formulário enviado com sucesso!";
    mensagem.style.color = "green";
    form.reset();
  });
}