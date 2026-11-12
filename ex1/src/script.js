/*Exercício 1: Saudação
Crie uma função `saudacao(nome)` que mostre a mensagem `Olá, [nome]! Bem-vindo(a) à aula!`.
Peça o nome do usuário com `prompt()` e chame a função.*/


function saudacao(nome) {
     nome = window.prompt("Insira seu nome:");
    
     let mensagem = `Olá, ${nome}! Bem-vindo(a) à aula!`;

     return mensagem;

}

console.log(saudacao());

