/*🧃 7. O Robô do Café
Lista de exercícios 3
História:
Um robô serve café conforme o pedido. Ele só aceita "café", "capuccino" ou
"expresso". Qualquer outro pedido, ele responde educadamente.
Desafio:
let pedido;
Responda com:
"Servindo café ☕"
"Servindo capuccino 🧋"
"Servindo expresso 🔥"
"Desculpe, não temos esse tipo de café � */

let pedido = prompt("Qual o tipo de café?")

if(pedido == "café" || pedido == "capuccino" || pedido == "expresso"){
    console.log("Servindo ",pedido)
}else console.log("Desculpe, não temos esse tipo de café")