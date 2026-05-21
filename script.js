// Função principal
function calcular() {

    // Pegando os valores digitados
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    let nota = Number(document.getElementById("nota").value);
    let frequencia = Number(document.getElementById("frequencia").value);

    // Operações matemáticas
    let soma = a + b;
    let subtracao = a - b;
    let multiplicacao = a * b;
    let divisao = a / b;

    // Comparação
    let comparacao;

    if (a > b) {
        comparacao = "A é maior que B";
    } else if (b > a) {
        comparacao = "B é maior que A";
    } else {
        comparacao = "A e B são iguais";
    }

    // Incremento e decremento
    a++;
    b--;

    // Verificação de aprovação
    let resultadoAluno;

    if (nota >= 7 && frequencia >= 75) {
        resultadoAluno = "O aluno foi aprovado";
    } else {
        resultadoAluno = "O aluno foi reprovado";
    }

    // Exibindo resultados no HTML
    document.getElementById("resultado").innerHTML = `
        <h2>Resultados</h2>

        <p><strong>Soma:</strong> ${soma}</p>
        <p><strong>Subtração:</strong> ${subtracao}</p>
        <p><strong>Multiplicação:</strong> ${multiplicacao}</p>
        <p><strong>Divisão:</strong> ${divisao}</p>

        <p><strong>Comparação:</strong> ${comparacao}</p>

        <p><strong>Novo valor de A após ++:</strong> ${a}</p>
        <p><strong>Novo valor de B após --:</strong> ${b}</p>

        <p><strong>Resultado do aluno:</strong> ${resultadoAluno}</p>
    `;
}