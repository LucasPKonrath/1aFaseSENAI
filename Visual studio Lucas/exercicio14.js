/*🐶 14. Passeio com o Pet
Lista de exercícios 6
História:
Você só vai passear com seu cachorro se não estiver chovendo e se tiver tempo.
Desafio:
let estaChovendo;
let temTempo;
Exiba:
"Hora do passeio! 🐾" ou
"Hoje não vai dar... ☔" */

let estaChovendo = prompt("Está chovendo? ")
let temTempo = prompt("Você tem tempo? ")

if(estaChovendo == "nao" && temTempo == "sim"){
    console.log("Hora do passeio!")
}else console.log("Hoje não vai dar...")
