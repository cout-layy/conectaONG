// index.js
// ========================================
// Importações (devem sempre ficar no topo)
import { carregarPagina } from "./spa.js";
import { validarFormulario } from "./validacao.js";

// ========================================
// Função que identifica a página atual pela hash da URL
function navegar() {
  const hash = window.location.hash.replace("#", "") || "home";
  carregarPagina(hash);
  validarFormulario(); // ativa a validação se estiver na página de contato
}

// ========================================
// Quando o site carregar, mostra a página inicial
window.addEventListener("load", navegar);

// Quando clicar em outro link (mudar a hash), carrega a nova página
window.addEventListener("hashchange", navegar);