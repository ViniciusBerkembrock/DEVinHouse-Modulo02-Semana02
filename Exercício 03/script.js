var primeiroNumero = window.prompt("Digite o 1º número para soma: ");
var segundoNumero = window.prompt("Digite o 2º número para soma:");

function somarNumeros(nro01, nro02){
    return parseInt(nro01) + parseInt(nro02);
}

var resultadoSoma = somarNumeros(primeiroNumero, segundoNumero);

// document.write("<h4>A soma: " + primeiroNumero + " + " + segundoNumero + " é igual a " + resultadoSoma + "</h4>")
document.write(`<h4>A soma: ${primeiroNumero} + ${segundoNumero} é igual a ${resultadoSoma}</h4>`)
