var numeroParaVerificar = window.prompt("insira um número para verificação:");

function verificarNumero(numero){
    if( numero % 2 == 0){
        return resultado = "Par"
    } else{
        return resultado = "Ímpar"
    }
}

var resultadoParOuImpar = verificarNumero(numeroParaVerificar)
document.write(`<h3>O número inserido é ${resultadoParOuImpar}`)