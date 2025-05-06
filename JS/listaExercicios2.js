function exercicio3(){
    let nome = prompt ("Digite seu nome, para saber o nome de super herói! ")
    let min = 1
    let max = 4
    let numeroaleartorio = Math.floor(Math.random() * (max - min) + min)

    // Math.cell() -> Arredonda pra cima 
    // Math.floor() -> Arredonda pra baixo
    // Math.round() -> Arredonda pro mais próximo 

    let frase1 = " Capitão América"
    let frase2 = " Homem de Ferro"
    let frase3 = " Homem Aranha"

    if(numeroaleartorio === 1){
        alert(nome + frase1)
    }
    else if(numeroaleartorio === 2){
        alert(nome + frase2)
    }else if(numeroaleartorio === 3){
        alert(nome + frase3)
    }
}function exercicio4(){
    let signo = prompt("Digite o seu signo , para saber a previsão! ")
    if (signo == "aries"){
        alert("Você começa a semana com boas energias na hora de lidar com dinheiro ")
    }else if (signo == "touro"){
        alert("Esta segunda será favorável para cuidar de alguns interesses pessoais. ")
    }else if (signo == "gemeos"){
        alert("Com a Lua infernizando o seu astral, vai ser preciso mais cautela e cuidado! ")
    }else if (signo == "cancer"){
        alert("A semana começa com ótimas vibes para se arriscar mais e buscar soluções inovadoras ")
    }else if (signo == "leao"){
        alert("Segundou, e sua atenção deve se concentrar na vida profissional hoje. ")
    }else if (signo == "virgem"){
        alert("Agir em equipe será o segredo do sucesso nesta segundona")
    }else if (signo == "libra"){
        alert("A semana começa movimentada, com direito a reviravoltas e surpresas pelo caminho. ")
    }else if (signo == "escorpiao"){
        alert("A segunda promete boas energias para os relacionamentos! ")
    }else if (signo == "sagitario"){
        alert("Segundou com força e você já começa o dia com disposição para mergulhar nas tarefas. ")
    }else if (signo == "capricornio"){
        alert("No trabalho, vai dar um show em serviços que exigem criatividade ")
    }else if (signo == "aquario"){
        alert("No trabalho, você conta com praticidade e responsabilidade para fazer o serviço deslanchar.")
    }else if (signo == "peixes"){
        alert("Seu lado comunicativo será seu maior trunfo nesta segunda! ")
    }
}function exercicio10(){

    let parouimpar = prompt ("Escolha par ou impar:")
    let numero = Number(prompt("Digite um número: "))
    let min = 0
    let max = 10
    let numeroaleartorio = Math.floor(Math.random() * (max - min) + min)
    let soma = numero + numeroaleartorio

    if (soma %2 === 0){
        if (parouimpar == "par")
        alert("Você ganhou!" + "voce digitou" + parouimpar + numero + "o número aleartório é " + numeroaleartorio + " a soma é " + soma)
    else alert("Você perdeu!"  + "voce digitou" + parouimpar  + numero + "o número aleartório é " + numeroaleartorio + " a soma é " + soma)
    }else {
        if (parouimpar == "impar")
            alert("Você ganhou!"  + "voce digitou" + parouimpar + numero + "o número aleartório é " + numeroaleartorio + " a soma é " + soma)
        else alert ("Você perdeu!"  + "voce digitou" + parouimpar + numero + "o número aleartório é " + numeroaleartorio + " a soma é " + soma)
    }

//Objetivo: O usuário joga contra o computador para ver quem vence no jogo de
// par ou ímpar.
// 🧩 Como Funciona
// 1. O usuário escolhe “Par” ou “Ímpar”.
// 2. Depois, o usuário digita um número de 0 a 10.
// 3. O computador gera aleatoriamente um número de 0 a 10.
// 4. O sistema soma os dois números.
// 5. Se a soma for par e o usuário escolheu “Par”, ele ganha.
// Se a soma for ímpar e o usuário escolheu “Ímpar”, ele também ganha.
// 💡 Exemplo Completo
// O usuário escolhe: “Ímpar”
// O usuário digita: 3
// O computador sorteia: 4
// Soma total: 3 + 4 = 7
// Resultado: Ímpar
// Usuário venceu!

}
function gerarCaracterAleartorio(){
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const numeroaleartorio = Math.floor(Math.random() * caracteres.length);
    caracter = caracteres.charAt(numeroaleartorio);
    console.log (caracter)
    return caracter
    
}    


function mostrarsenha(){
    let quantidade = Number(prompt("Informe quantos caracteres sua senha deve ter - de 1 a 10"))

    if(quantidade === 1){
        alert("Senha: " + gerarCaracterAleartorio())
    } else if(quantidade == 2){
        alert("Senha: " + gerarCaracterAleartorio() + gerarCaracterAleartorio())
    }else if(quantidade == 3){
        alert("Senha: " + gerarCaracterAleartorio() + gerarCaracterAleartorio()
        + gerarCaracterAleartorio())
    }else if(quantidade == 4){
        alert("Senha: " + gerarCaracterAleartorio() + gerarCaracterAleartorio()
        + gerarCaracterAleartorio() + gerarCaracterAleartorio())
    }else if(quantidade == 5){
        alert("Senha: " + gerarCaracterAleartorio() + gerarCaracterAleartorio()
        + gerarCaracterAleartorio() + gerarCaracterAleartorio() + gerarCaracterAleartorio())
    }
}
// let contador = 1

// while(contador <=10){
//     alert("Contador igual a " + contador)
//     contador +=2
// }
// alert("O contador é " + contador)
let contagemcliques = 0
function contadorcliques(){
    contagemcliques++

}

function mostrarcliques(){
    alert("Voce clicou: " + contagemcliques + " vezes")
}

function exercicio15(){
    let min = 1
    let max = 10
    let acertou = false
    let numeroaleartorio = Math.floor(Math.random() * (max - min) + min)
    let tentativas = 0
    while(acertou == false){
        let numero = Number(prompt("Digite um número: "))

        if(numeroaleartorio == numero){
            alert("Você acertou " + numero)
            acertou = true
        }else {
            tentativas++
            alert("Você errou, o numero que voce tentou foi " + numero)
            alert ("Você tentou " + tentativas + " vezes") 
        } 

    }
}