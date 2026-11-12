/*Exercício 7: Área do retângulo
Crie uma função `areaRetangulo(base, altura)` que retorne a área do retângulo.
Peça a base e a altura ao usuário e mostre a área. */

function areaRetangulo(base,altura){
    base = parseFloat(window.prompt("Insira a base do retangulo"));
    altura = parseFloat(window.prompt("Insira a altura do retangulo"));

    let area = base * altura;

    let mensagem = `A área de um retângulo de base ${base} e altura ${altura} é ${area}.`;

    return mensagem;
}

console.log(areaRetangulo());