

let botao = document.getElementById("botao");

botao.addEventListener("click", function() {

    alert("Obrigado pelo interesse! Entre em contato pelo nosso WhatsApp.");

});




let botoes = document.querySelectorAll(".comprar");

botoes.forEach(function(botao) {

    botao.addEventListener("click", function() {

        alert("Você demonstrou interesse neste computador!");

    });

});




let contato = document.getElementById("contatoBotao");

contato.addEventListener("click", function() {

    alert("Entre em contato pelo WhatsApp: (85) 99999-9999");

});
