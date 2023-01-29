contador = 1

var nomeAluno = window.prompt("Digite seu nome:")
var aluno = [[nomeAluno],[]]

while(contador <= 4) {
    var nota = window.prompt(`Digite a ${contador}ª Nota:`)
    aluno[1].push(nota)
    contador++
}

var soma = 0
for(var arrIndex = 0; arrIndex < aluno[1].length; arrIndex++){
    soma = soma + parseInt(aluno[1][arrIndex])
}
var mediaAluno = soma/aluno[1].length
var resultadoFinal = (mediaAluno >= 7) ? "Aprovado" : "Reprovado"


document.write(`Nome Aluno: ${aluno[0]} - Média: ${mediaAluno}`)
document.write(`<br>Status do Aluno: ${resultadoFinal}`)