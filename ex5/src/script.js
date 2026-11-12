/*Exercício 5: Maior de dois
Crie uma função `maiorDeDois(a, b)` que retorne o maior entre dois números.
Peça os dois números ao usuário e mostre qual é o maior.*/

function maiorDeDois(a,b) {
    a = parseInt(window.prompt("Insira o primeiro valor:"));

    b = parseInt(window.prompt("Insira o segundo valor:"));

    if (a > b){
        let mensagem = `O número ${a} é maior que ${b}.`;

        return mensagem;
    } else if ( a < b){
        mensagem = `O número ${a} é menor que ${b}. `;
        
        return mensagem;
    } else{
        mensagem = `O número ${a} é igual ao número ${b}.`;

        return mensagem;
    }
}

console.log(maiorDeDois());