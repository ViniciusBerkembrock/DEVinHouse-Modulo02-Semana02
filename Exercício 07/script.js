var contador = 1
var ruim = 0
var bom = 0
var excelente = 0

while(contador <= 4) {
    var nota = window.prompt(`Usuário Nro ${contador} - Qual a sua nota para Stranger Things:`)
    if(nota == "Ruim") {
        ruim++
    }else if (nota == "Bom") {
        bom++
    } else if (nota == "Excelente") {
        excelente++
    }
    contador++
}

document.write("<h4>Número de avaliações RUIMS: " + ruim + "</h4>")