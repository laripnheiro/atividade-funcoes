/*Par ou ímpar
Crie uma função `ehPar(numero)` que retorne `true` se o número for par e `false` se for ímpar.
Peça um número ao usuário e mostre o resultado. */

function ehPar(numero){
    numero = parseInt(window.prompt('Insira o número que você gostaria de verificar'));

    if (numero % 2 === 0){
        let mensagem = `O número ${numero} é par!`;

        return mensagem;
    } else {
        mensagem = `O número ${numero} é impar!`;

        return mensagem;
    }
}

console.log(ehPar());