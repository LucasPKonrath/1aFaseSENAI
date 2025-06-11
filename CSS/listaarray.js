//12

let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

let numerosDois = numeros.map(elemento=>elemento*2)
console.log(numeros)
console.log(numerosDois)

let soma = numeros.reduce((acumulado, valoratual) => acumulado+valoratual, 0)
console.log(soma)


//14
let nomes2 = ["João" , " Clara" , " Jonas" , " Carla" , " Maria" , " Carlos" , " José"]
let nomesvirgula = nomes2.reduce((acumulado, valoratual) => acumulado + "," + valoratual)

console.log(nomesvirgula)