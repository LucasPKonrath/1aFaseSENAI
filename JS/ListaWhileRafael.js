
{/*6. Some os números de 1 a 100, mas pare se a soma passar de 400. */}

// gerar a contagem até 100
// somar os números
// parar se deu ruim
// mostrar o resultado 
function somar(){
    let soma = 0

    let cont = 1 // Inicialização da variável de controle
    while(cont <= 100 && soma <= 400){  // setar a condição de repetição
        // usar a função && junto com o cont para usar as 2 condições
        // no caso o CONT foi até 29 e a soma parou pois foi maior que 400 , total 406!
        soma = soma + cont
        console.log("Cont" + cont);
        console.log("Soma" + soma);
        console.log("=============");
        cont++ // modificação da contagem

    }
    console.log("Soma: " + soma)
    
}