// Exibe números múltiplos de 2 e 3 ou que sejam 25

let resultado = ''
// let array = []
for(let contador = 0; contador <= 100; contador++){
    if(contador % 2 == 0
        || contador % 3 == 0
        || contador == 25){
            // array.push = contador
            resultado += contador + ', '
            // alert("Número atende a regra " + contador)

        }
}
alert(resultado)