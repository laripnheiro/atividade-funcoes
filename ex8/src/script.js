/*Exercício 8: Celsius para Fahrenheit
Crie uma função `celsiusParaFahrenheit(c)` que converta a temperatura de Celsius para Fahrenheit.
Fórmula: `F = C * 1.8 + 32`
Peça a temperatura em Celsius e mostre o resultado em Fahrenheit. */

function celsiusParaFahrenheit(c){
    c = parseFloat(window.prompt("Insira a temperatur em graus Celsius:"));

    let f = (c * 1.8) + 32;

    let conversao = `${c}°C convertido para Farenheit é: ${f}°F.`;
    
    return conversao;
}

console.log(celsiusParaFahrenheit());