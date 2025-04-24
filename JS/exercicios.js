
function somar(){
    let n1, n2, soma

    n1 = Number(prompt("Pimeiro Número: "))
    n2 = Number(prompt("Segundo Número: "))
    //n1 = Number(n1)
    //n2 = Number(n2)
    soma = n1 + n2

    alert("A soma de "+n1 +" e de " +n2+" é igual a: " + soma)
}

function diminuir(){
    let n1, n2, subtracao

    n1 = Number(prompt("Primeiro Número: "))
    n2 = Number(prompt("Segundo Número: "))

    subtracao = n1 - n2

    alert("A subtração de "+ n1 +" e de " + n2 +" é igual a: " + subtracao)
}
function multiplicar(){
    let n1, n2, multiplicacao

    n1 = Number(prompt("Primeiro Número: "))
    n2 = Number(prompt("Segundo Número: "))

    multiplicacao = n1 * n2

    alert("A multiplicação de "+ n1 +" e de " + n2 +" é igual a: " + multiplicacao)
}
function dividir(){
    let n1, n2, divisao

    n1 = Number(prompt("Primeiro Número: "))
    n2 = Number(prompt("Segundo Número: "))

    divisao = n1 / n2

    alert("A divisão de "+ n1 +" e de " + n2 +" é igual a: " + divisao)
}
function brinquedos(){

    let nBrinquedos = Number(prompt("Digite o número de brinquedos: "))
    
    let Moedasrecebidas = nBrinquedos
    
    if(nBrinquedos < 0){
        alert("Digite um número certo!")
    }else
    
    if(Moedasrecebidas >3 ){
        alert("Você trouxe "+nBrinquedos+" Brinquedos, e vai receber 3 moedas que é o limite máximo")
    
    }else{
         alert("Você trouxe "+nBrinquedos+" Brinquedos, e vai receber " + Moedasrecebidas + " moedas")
    }
    }





