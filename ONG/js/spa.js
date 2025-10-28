import { templateHome, templateProjetos, templateContato } from "./templates.js";

export function carregarPagina(pagina) {
  const app = document.getElementById("app");

  switch (pagina) {
    case "home":
      app.innerHTML = templateHome();
      break;
    case "projetos":
      app.innerHTML = templateProjetos();
      break;
    case "contato":
      app.innerHTML = templateContato();
      break;
    default:
      app.innerHTML = templateHome();
  }
}