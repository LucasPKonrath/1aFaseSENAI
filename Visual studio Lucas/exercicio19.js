/*🎒 19. Lista de Material Escolar
História:
Lista de exercícios 8
Se a criança for do ensino fundamental, precisa levar lápis. Se for do médio, leva
caneta. Se for outro, leva ambos!
Desafio:
let tipoEnsino = "fundamental";
Use if/else para mostrar o material adequado.*/

let tipoEnsino = prompt("Qual o nível da escola que voce cursa?")

if(tipoEnsino == "fundamental"){
    console.log("Precisa levar lápis")
}else if (tipoEnsino == "médio"){
    console.log("Precisa levar caneta")
}else console.log("Precisa levar lápis e caneta")