// Menu hambúrguer (abre e fecha no celular)
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu-links');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
});