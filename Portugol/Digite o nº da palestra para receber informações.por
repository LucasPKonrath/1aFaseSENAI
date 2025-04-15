programa {
  funcao inicio() {
    //5.4 Faça um algoritimo que leia o n° da palestra que ele quer participar e mostre o local e o horário que ela acontecerá
    /* 1-"Animação com Scratch, laboratório 305, 19h"
       2-"Scratch para gamers, laboratório 512, 20h "
       3-"JavaScript para leigos, laboratório 101, 19h"
       4-"Tópicos avançados de JavaScript, laboratório 305, 20h"
       5-"Vida e carreira, auditório, 21h"*/

      inteiro numero

      escreva("Qual o nº da palestra que você deseja participar? ")
      leia(numero)

      se(numero == 1 ){
        escreva("Animação com Scratch, laboratório 305, 19h")
      }
      se(numero == 2 ){
        escreva("Scratch para gamers, laboratório 512, 20h ")
      }
      se(numero == 3){
        escreva("JavaScript para leigos, laboratório 101, 19h")
      }
      se(numero == 4 ){
        escreva("Tópicos avançados de JavaScript, laboratório 305, 20h")
      }
      se(numero == 5 ){
        escreva("Vida e carreira, auditório, 21h")
      }
  }
}
