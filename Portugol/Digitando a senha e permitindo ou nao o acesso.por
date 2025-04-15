programa {
  funcao inicio() {
    // Crie um programa que execute a validação de uma senha digitada pelo usuário. Caso ele digite a senha "1234" devemos informar
    // a ele "Acesso Permitido". Para qualquer outra senha digitada, informar "Acesso Negado"

    inteiro senha
    escreva("Digite sua senha com quatro dígitos: ")
    leia(senha)
    se(senha == 1234){
      escreva("Acesso Permitido!")
    }senao{
      escreva("Acesso Negado!")
    }
  }
}
