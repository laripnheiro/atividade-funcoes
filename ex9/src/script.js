/* Exercício 9: Desconto
Crie uma função `calcularDesconto(preco, percentual)` que retorne o valor final do produto após o desconto.
Exemplo: preço 200 com 10% de desconto = 180.
Peça o preço e o percentual de desconto ao usuário. */

function calcularDesconto(preco, percentual){
    preco = parseFloat(window.prompt("Insira o valor do produto"));
    percentual = parseFloat(window.prompt("Insira a porcentagem do desconto (ex: 10% de desconto: 10)"));

    let porcentagem = percentual / 100;

    let desconto = preco * porcentagem;

    let valorFinal = preco - desconto;

    return valorFinal;
}

console.log(calcularDesconto());