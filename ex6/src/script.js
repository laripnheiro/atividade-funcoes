/*Exercício 6: Média de notas
Crie uma função `calcularMedia(n1, n2, n3)` que retorne a média de três notas.
Peça as três notas ao usuário e mostre a média. */

function calcularMedia(n1,n2,n3){
    n1 = parseFloat(window.prompt("Insira o valor da primeira nota:"));
    n2 = parseFloat(window.prompt("Insira o valor da segunda nota:"));
    n3 = parseFloat(window.prompt("Insira o valor da terceira nota:"));

    let media = (n1 + n2 + n3) / 3;

    let mensagem = `A média das 3 notas informadas é: ${media}.`;

    return mensagem;
}

console.log(calcularMedia());