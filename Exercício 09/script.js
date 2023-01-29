var input = 0
var numHortifruti = 0
var numLaticinios = 0
var numCarnes = 0
var numPeixes = 0
var numAves = 0

var arr = [["Hortifruti", numHortifruti], ["Laticinios", numLaticinios], ["Carnes", numCarnes], ["Peixes", numPeixes], ["Aves", numAves]]

do {
    input = window.prompt("opções de produtos para compra: (1)Hortifruti (2)Laticínios (3)Carnes (4)Peixes (5)Aves (6)Fechar pedido")
    var opcao = parseInt(input)
    
    switch(opcao) {
        case 1:
            arr[opcao - 1][1]++
            break;
        case 2:
            arr[opcao - 1][1]++
            break;
        case 3:
            arr[opcao - 1][1]++
            break;
        case 4:
            arr[opcao - 1][1]++
            break;
        case 5:
            arr[opcao - 1][1]++
            break;
    }
} while(opcao != 6)

var arrMaisComprado = [null, 0]

for(var arrIndex = 0; arrIndex < arr.length; arrIndex++){
    if (arr[arrIndex][1] > arrMaisComprado[1]) {
        arrMaisComprado = [arr[arrIndex][0], arr[arrIndex][1]]
    }
}
document.write(`Produto mais comprado: ${arrMaisComprado[0]} - Quantidade: ${arrMaisComprado[1]}`)

