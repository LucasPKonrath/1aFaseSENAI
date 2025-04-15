/*🕹 10. Jogo de Pontuação
História:
Você precisa verificar se um jogador venceu. Se a pontuação for maior ou igual a
100, ele vence.
Desafio:
let pontos;
Exiba:
"Você venceu! 🏆" ou
"Continue jogando! 🎮" */

let pontos = prompt("Qual sua pontuação?")

if(pontos >= 100 ){
    console.log("Você venceu!")
}else console.log("Continue jogando!")

