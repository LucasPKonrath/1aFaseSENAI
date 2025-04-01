programa {
  funcao inicio() {
    inteiro numero
    escreva("Digite o número: ")
    leia(numero)

    se(numero % 3 == 0){
      escreva("É múltiplo de 3")
      se(numero % 5 == 0){
        escreva(" e de 5 também ")
      }
    }senao
     // se(numero % 3 != 0)
    {
      escreva("Não é múltiplo de 3 ")
    }    
    se(numero % 5 == 0){
      escreva("É múltiplo de 5")
    }
  }
}
