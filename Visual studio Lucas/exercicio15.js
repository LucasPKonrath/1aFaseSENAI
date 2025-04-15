/*🍦 15. Sorveteria Gelada
História:
O cliente quer um sabor de sorvete. Só há: "baunilha", "chocolate" ou "morango".
Desafio:
let sabor;
Use condicionais para exibir:
"Servindo sorvete de [sabor] 🍦"
Ou "Sabor indisponível 😢" */

let sabor = prompt("Qual sabor do seu sorvete?")

if(sabor == "baunilha" || sabor == "chocolate" || sabor == "morango"){
    console.log("Servindo sorvete sabor",sabor)
}else console.log("Sabor indisponível")
