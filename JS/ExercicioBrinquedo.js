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



