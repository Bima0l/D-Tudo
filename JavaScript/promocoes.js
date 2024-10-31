document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const emailInput = document.getElementById('email');
    
    // Aqui você pode adicionar lógica para enviar o e-mail para um servidor, se necessário.
    
    // Exibir mensagem de agradecimento
    document.getElementById('thank-you-message').classList.remove('hidden');
    emailInput.value = ''; // Limpa o campo de entrada
});

