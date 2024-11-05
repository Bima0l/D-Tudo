document.addEventListener('DOMContentLoaded', function() {

    // Função para enviar o formulário
    function enviarFormulario(form, formspreeURL) {
        // Cria o objeto FormData a partir do formulário
        const formData = new FormData(form);
        const data = {};

        // Preenche o objeto "data" com os dados do formulário
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // Envia os dados para o Formspree
        fetch(formspreeURL, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                alert('Mensagem enviada com sucesso!');
                form.reset(); // Reseta o formulário após o envio
            } else {
                alert('Erro ao enviar a mensagem. Por favor, tente novamente.');
            }
        })
        .catch(error => {
            console.error('Erro:', error);
            alert('Ocorreu um erro ao enviar a mensagem.');
        });
    }

    // Verifica se o formulário de contato existe
    const contatoForm = document.getElementById('contatoform');
    if (contatoForm) {
        // URL do Formspree para o formulário de contato
        const formspreeURLContato = 'https://formspree.io/f/xbljojpw';
        
        // Adiciona o evento de submit ao formulário de contato
        contatoForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Evita o envio padrão do formulário
            enviarFormulario(contatoForm, formspreeURLContato);
        });
    }

});



