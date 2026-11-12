/*Exercício 3: Soma de dois números
Crie uma função `soma(a, b)` que **retorne** a soma de dois números.
Peça os dois números ao usuário com dois `prompt()`. */

function soma(a, b){
    a = parseInt(window.prompt("Insira o primeiro valor:"));
    
    b = parseInt(window.prompt("Insira o segundo valor:"));

    let adicao =  a + b;
    let mensagem = `A soma de ${a} e ${b} é ${adicao}.`;

    return mensagem;
}


console.log(soma());