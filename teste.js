// PEDIR NÚMEROS

let numero1 = prompt("Digite o primeiro número:");
let numero2 = prompt("Digite o segundo número:");

// CONVERTER PARA NUMBER

numero1 = Number(numero1);
numero2 = Number(numero2);

// OPERAÇÕES

let soma = numero1 + numero2;
let subtracao = numero1 - numero2;
let multiplicacao = numero1 * numero2;

// EXIBIR RESULTADOS

document.write("<h2>Resultados</h2>");

document.write("Soma: " + soma + "<br>");

document.write("Subtração: " + subtracao + "<br>");

document.write("Multiplicação: " + multiplicacao + "<br>");