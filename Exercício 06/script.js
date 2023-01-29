var pesoUsuario = window.prompt("Informe seu peso em quilos:")
var alturaUsuario = window.prompt("Informe sua altura em metros:")

function calcularIMC(peso, altura){
    var IMC = peso / (altura * altura)
    if(IMC >= 25 && IMC <= 100){
        window.alert("Você está acima do peso, procure um médico")
    }else if(IMC < 25 && IMC > 18.5){
        window.alert("PARABÉNS!! Você está no peso ideal")
    }else if(IMC <= 18.5 && IMC >0){
        window.alert("Você está abaixo do peso, procure um médico")
    } else {
        window.alert("Valores inseridos incorretos! IMC Inválido")
    }
}

calcularIMC(pesoUsuario, alturaUsuario)