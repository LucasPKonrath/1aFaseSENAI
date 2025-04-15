programa {
  funcao inicio() {
    //5.5 Crie um algoritimo para ler duas notas do aluno e calcular a média. Diga também se ele passou("A média do aluno é:")
  
  real nota1, nota2, media

  escreva("Digita a primeira nota: ")
  leia(nota1)

  escreva("Digite a segunda nota: ")
  leia(nota2)

  media = (nota1+nota2) / 2
  se(media >=7){
    escreva("A média do aluno é ",media, " Você foi aprovado!")
  }
  senao{
    escreva("A média do aluno é ",media, " Você não atingiu a média")
  }
  }
}
