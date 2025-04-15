/*🐉 2. Dragões e Condições
História:
Um guerreiro encontrou um dragão! Se ele tiver uma espada mágica e mais de 18
anos, ele pode lutar. Se não, deve fugir.
Desafio:
Crie um programa que receba:
let idade;
let temEspadaMagica; 
"Você pode lutar contra o dragão!" ou "Fuja enquanto é tempo!"*/

let idade = Number(prompt("Digite a idade do guerreiro:"))
let temEspadaMagica = prompt("Sim ou não")

if(idade >= 18 && temEspadaMagica == "sim"){
    console.log("Pode lutar contra o dragão")
    
}else {
    console.log("Fuja enquanto é tempo!")
}


