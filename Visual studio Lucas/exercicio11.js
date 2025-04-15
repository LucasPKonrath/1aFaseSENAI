/*🎬 11. Sessão de Cinema
História:
Lista de exercícios 5
A entrada no cinema é gratuita para crianças até 12 anos ou idosos acima de 60.
Desafio:
let idade;
Exiba:
"Entrada gratuita 🎟" ou
"Precisa pagar ingresso 💳" */

let idade = Number(prompt("Qual sua idade?"))

if(idade <= 11 || idade >= 60){
    console.log("Entrada gratuita!")
}else console.log("Precisa pagar ingresso!")
