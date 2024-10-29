// script.js

const toggleButton = document.getElementById('toggleButton');
const navbarNav = document.getElementById('navbarNav');

// Abre e fecha o menu ao clicar no botão de hambúrguer
toggleButton.addEventListener('click', () => {
    navbarNav.classList.toggle('active'); // Alterna a classe "active" para mostrar ou esconder o menu
});
