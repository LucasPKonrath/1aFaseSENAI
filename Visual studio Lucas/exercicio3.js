/*🍕 3. A Pizzaria do Código
História:
João quer pedir pizza, mas só se:
Ele tiver dinheiro e estiver com fome.
Ou se for sexta-feira (porque é tradição!).
Desafio:
let temDinheiro;
let estaComFome;
let hojeEhSexta;
Exiba:
"Vamos pedir pizza!" ou
"Hoje não é dia de pizza."*/

let temDinheiro = prompt("Você tem dinheiro?")
let estaComFome = prompt("Você esta com fome?")
let hojeEhSexta = prompt("Hoje é sexta-feira?") 

if(temDinheiro == "sim" && estaComFome == "sim"){
    console.log("Vamos pedir pizza!")
}else if(hojeEhSexta == "sim"){
    console.log("Vamos pedir pizza!")
}else console.log("Hoje não é dia de pizza!")
