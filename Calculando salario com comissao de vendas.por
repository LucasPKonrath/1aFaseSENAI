programa {
  funcao inicio() {
    //Faça um programa que leia o nome de um vendedor, o seu salário fixo e o total
    // de vendas efetuadas por ele no mês (em dinheiro). Sabendo que este vendedor ganha 15%
    // de comissão sobre suas vendas efetuadas, informar o total a receber no final do mês, com duas casas decimais.

    // Declarando Váriaveis 
    cadeia vendedor
    real salario , comissao, total,vendas

    // Entrada de Dados
    escreva("Nome do vendedor: ")
    leia(vendedor)

    escreva("Qual o salário fixo? ")
    leia(salario)

    escreva("Qual valor de vendas efetuadas no mês R$? ")
    leia(vendas)
    //Cálculo
    comissao = salario * 15/100
    total = salario + comissao
    // Saída de Dados
    escreva("Fúncionário ",vendedor)
    escreva("\nSua venda desse mes foi de R$",vendas," e a  comissão referido as vendas é de R$:",comissao)
    escreva("\nO total a receber é de R$:" ,total)
  }
}
