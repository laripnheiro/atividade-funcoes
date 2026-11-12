/*Exercício 2: O dobro
Crie uma função `dobro(numero)` que **retorne** o dobro de um número.
Peça um número ao usuário e mostre o resultado.*/

function dobro(numero){
    numero = window.prompt(`Insira o número em que você quer dobrar:`);

    let multiplicacao = numero * 2;

    let mensagem = `O dobro do número ${numero} é ${multiplicacao}.`;

    return mensagem;
}

console.log(dobro());