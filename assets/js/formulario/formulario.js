document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    exibirMensagemFeedback();
});

function exibirMensagemFeedback() {
    var mensagemDiv = document.getElementById('mensagem-feedback');
    mensagemDiv.textContent = 'Obrigado pelo feedback';
    mensagemDiv.classList.add('ativo');

    setTimeout(function() {
        mensagemDiv.textContent = '';
        mensagemDiv.classList.remove('ativo');
    }, 3000);
}
