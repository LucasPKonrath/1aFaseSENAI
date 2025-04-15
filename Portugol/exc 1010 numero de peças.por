programa {
  funcao inicio() {
    // Neste problema, deve-se ler o código de uma peça 1, o número de peças 1, o valor unitário de cada peça 1,
    // o código de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2. Após, calcule e mostre o valor a ser pago.

    // Declarando Váriaveis
    real codigo1 , codigo2
    real npecas1 , valorpecas1 , npecas2, valorpecas2, total

    // Entrada de dados
    escreva("Digite o código das peças 1, ", "numero de peças", " e o valor de cada peça: ")
    leia(codigo1, npecas1, valorpecas1)

    escreva("Digite o código das peças 2,"  ," numero de peças " , "e o valor de cada peça: ")
    leia(codigo2, npecas2, valorpecas2)
    codigo1 = npecas1 * valorpecas1
    codigo2 = npecas2 * valorpecas2
    total = codigo1 + codigo2



    // Saída de Dados
    escreva("O valor a pagar: R$ ",total)



  }
}
