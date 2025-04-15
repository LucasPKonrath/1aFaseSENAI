/* 16. MasterChef Lógico
História:
Você precisa preparar um prato especial se o ingrediente principal ou o tempero
secreto estiver disponível.
Desafio:
let temIngredientePrincipal;
let temTemperoSecreto;
Lista de exercícios 7
Exiba:
"Prato especial pronto! 🍽" ou
"Sem os ingredientes necessários. 😕"*/

let temIngredientePrincipal = prompt("O ingrediente principal está disponível?")
let temTemperoSecreto = prompt("O tempero secreto está disponível?")

if(temIngredientePrincipal == "sim" || temTemperoSecreto == "sim"){
    console.log("Prato especial pronto!")
}else console.log("Sem os ingredientes necessários!")
