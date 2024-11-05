document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleButton');
    const navbarNav = document.getElementById('navbarNav');
    const closeButton = document.createElement('span'); // Criar o botão "X"

    closeButton.className = 'close';
    closeButton.innerHTML = '&times;'; // Adicionar o "X"
    closeButton.style.display = 'none'; // Ocultar por padrão
    toggleButton.appendChild(closeButton); // Adicionar o "X" ao botão de menu

    // Evento para abrir e fechar o menu
    toggleButton.addEventListener('click', () => {
        navbarNav.parentElement.classList.toggle('open');

        // Alternar a visibilidade do "X"
        closeButton.style.display = navbarNav.parentElement.classList.contains('open') ? 'block' : 'none';
    });

    // Evento para fechar o menu ao clicar no "X"
    closeButton.addEventListener('click', () => {
        navbarNav.parentElement.classList.remove('open');
        closeButton.style.display = 'none'; // Ocultar o "X"
    });

    // Fechar o menu ao clicar fora dele
    document.addEventListener('click', (event) => {
        if (!navbarNav.parentElement.contains(event.target) && !toggleButton.contains(event.target)) {
            navbarNav.parentElement.classList.remove('open');
            closeButton.style.display = 'none'; // Ocultar o "X"
        }
    });
});
