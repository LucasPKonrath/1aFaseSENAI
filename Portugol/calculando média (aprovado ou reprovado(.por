programa {
  funcao inicio() {
    //5) Crie um programa que peça ao usuário para digitar três notas
    // individualmente (uma por vez), faça a média e caso a média seja igual ou maior que 7, mostre uma mensagem "Aprovado!"

    real nota1,nota2,nota3,media

    escreva("Digite suas 3 notas: ")
    leia(nota1,nota2,nota3)
    media = (nota1+nota2+nota3) / 3

    se(media >=7 ){
      escreva("Aprovado!")
    }
      se(media <7){
        escreva("Reprovado!")
      }
      
    }

  }

