/*⛷️ 18. Esqui na Montanha
História:
A pista de esqui está liberada apenas para maiores de 16 anos e que tenham
equipamento completo.
Desafio:
let idade;
let temEquipamento;
Exiba:
"Pode esquiar 🎿" ou
"Não liberado." */

let idade = prompt("Qual sua idade?")
let temEquipamento = prompt("Tem equipamento completo?")

if(idade >=16 && temEquipamento == "sim"){
    console.log("Pode esquiar!")
}else console.log("Não liberado!")
