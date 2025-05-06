function exercicio1(){
    contador = 1
    while(contador <= 20){
        resultado = contador % 2 
        if(resultado == 0){
            alert("O número " + contador + " é Par")
        }
        contador++

    }
}function exercicio2(){
    contador = 1
    while(contador <= 20){
        resultado = contador % 2
        if(resultado != 0){
            alert("O número " + contador + " é Ímpar")
        }
        contador++
    }
}function exercicio3(){
    contador = 1
    while(contador <=5){
        alert("Olá mundo!")
        contador++
    }

}function exercicio4(){
    contador = 0
    while(contador <=50){
        alert("O Número é: " + contador)
        contador += 5
    }
}function exercicio5(){
    contador = 100
    while(contador <= 100 && contador >=0 ){
        alert("O Número é: " + contador)
        contador -= 10
    }
}function exercicio6(){
    contador = 0
    while(contador <= 30){
        resultado = contador % 3 
        if(resultado == 0){
            alert(contador)
        }
        contador++
    }
}function exercicio7(){
    contador = 1
    while(contador <= 10){
        quadrado = contador**2
        alert("O quadrado do número " + contador + " é " + quadrado)
        contador++
    }
}function exercicio8(){
    contador = 1
    while(contador <= 10){
        cubo = contador**3
        alert("O cubo do número " + contador + " é " + cubo)
        contador++
    }
}