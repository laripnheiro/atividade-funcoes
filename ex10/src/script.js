/*Exercício 10: Maioridade
Crie uma função `verificarIdade(idade)` que retorne `"Maior de idade"` se a idade for 18 ou mais, e `"Menor de idade"` caso contrário.
Peça a idade ao usuário e mostre o resultado.*/

function verificarIdade(idade){
    idade = parseInt(window.prompt("Insira sua idade:"));

    if (idade < 18){
        let mensagem = `Você tem ${idade}, então você é menor de idade.`
        return mensagem;
    } else{
        let mensagem = `Você tem ${idade}, então você é maior de idade.`
        return mensagem;
    }
}

console.log(verificarIdade());