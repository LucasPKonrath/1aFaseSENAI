programa {
  funcao inicio() {
    //Calcule o consumo médio de um automóvel sendo fornecidos a distância total percorrida (em Km)
    // e o total de combustível gasto (em litros).

    inteiro distanciaKm 
    real consumo, combustivelLitros

    // Entrada de Dados
    escreva("Qual a distância total percorrida (km) ? ")
    leia(distanciaKm)

    escreva("Combustível gasto: ")
    leia(combustivelLitros)

    consumo = distanciaKm / combustivelLitros

    escreva(consumo , " km/l")

    


  }
}
