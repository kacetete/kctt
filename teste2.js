// Pedindo os números ao usuário
let a = Number(prompt("Digite o primeiro número:"));
let b = Number(prompt("Digite o segundo número:"));

// Operações matemáticas
let soma = a + b;
let subtracao = a - b;
let multiplicacao = a * b;
let divisao = a / b;

// Exibindo resultados
document.write("Valor de A: " + a + "<br>");
document.write("Valor de B: " + b + "<br><br>");

document.write("Soma: " + soma + "<br>");
document.write("Subtração: " + subtracao + "<br>");
document.write("Multiplicação: " + multiplicacao + "<br>");
document.write("Divisão: " + divisao + "<br><br>");

// Comparações
document.write("A é maior que B? " + ((a > b) ? "Verdadeiro" : "Falso") + "<br>");

document.write("A é menor que B? " + ((a < b) ? "Verdadeiro" : "Falso") + "<br>");

document.write("A é igual a B? " + ((a == b) ? "Verdadeiro" : "Falso") + "<br><br>");

// Incremento e decremento
a++;
b--;

// Exibindo novos valores
document.write("Novo valor de A após incremento: " + a + "<br>");
document.write("Novo valor de B após decremento: " + b);