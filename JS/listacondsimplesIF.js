// 1. Peça ao usuário sua idade e se ele tem carteira de motorista. Exiba "Pode
// dirigir" se for maior de 18 e tiver carteira.
function exercicio1(){

    let idade = prompt("Digite a sua idade: ")
    let cnh = prompt("Possui cnh? Sim ou Não? ")

    if(idade >= 18 && cnh === "Sim"){
        alert("Pode dirigir!")
    }
}
// 2. Verifique se um número digitado é positivo e par.
function exercicio2(){
    let numero = prompt("Digite um número: ")
    if(numero > 0 && numero % 2 === 0){
        alert("O número " + numero + " É positivo e é Par")
    }
}
// 3. Solicite um nome de usuário e uma senha. Exiba "Acesso permitido" se o
// nome for "admin" e a senha for "1234".
function exercicio3(){
    let usuario = prompt("Digite seu usuário: ")
    let senha = prompt("Digite sua senha: ")
    if(usuario === "admin" && senha === "1234")
        alert("Acesso permitido! ")
}
// 4. Peça dois números. Exiba "Valores válidos" se um for positivo e o outro for
// negativo.
function exercicio4(){
    let n1 = prompt("Digite um número: ")
    let n2 = prompt("Digite outro número: ")
    if(n1 > 0 && n2 < 0 || n1 < 0 && n2 > 0){
        alert("Valores válidos")
    }
}
// 5. Peça uma nota. Exiba "Aprovado" se a nota for maior que 6 e menor ou igual a 10.
function exercicio5(){
    let nota = prompt("Digite sua nota! ")
    if(nota >6 && nota <= 10 ){
        alert("Aprovado!")
    }
}
// 6. Peça um número. Exiba "Número inválido" se ele não estiver entre 1 e 100.
function exercicio6(){
    let numero = prompt("Digite um número: ")
    if(numero <1 || numero > 100){
        alert("Número inválido!")
    }
}
// 7. Peça a idade e se o usuário é estudante. Exiba "Meia entrada" se for menor de 18 ou estudante.
function exercicio7(){
    let idade = prompt("Digite sua idade: ")
    let estudante = prompt("Você é estudande? Sim ou Não: ")
    if(idade < 18 || estudante === "Sim"){
        alert("Meia entrada!")
    }
}
// 8. Peça se o usuário aceitou os termos (sim/não) e confirmou o email (sim/não).
// Exiba "Cadastro completo" se ambos forem "sim".
function exercicio8(){
    let acctermos = prompt("Aceita os termos: Sim ou Não")
    let confemail = prompt("Confirmou email? Sim ou Não")
    if(acctermos === "Sim" && confemail === "Sim"){
        alert("Cadastro Completo!")
    }
}
// 9. Peça a altura e o peso. Exiba "Apto para o esporte" se altura > 1.60m e peso
// entre 50 e 90 kg.
function exercicio9(){
    let altura = Number(prompt("Digite sua altura: "))
    let peso = Number(prompt("Digite seu peso: "))
    if(altura > 1.60 && (peso >= 50 && peso <= 90)){
        alert("Apto para o esporte!")
    } 
}
// 10. Verifique se uma pessoa não é maior de idade ou não aceitou os termos. Se
// for verdade, exiba "Acesso negado"
function exercicio10(){
    let idade = prompt("Digite sua idade: ")
    let acctermos = prompt("Aceita os termos? Sim ou Não: ") == "Sim" ? true : false
    if(idade < 18 && !acctermos){
        alert("Acesso negado!")
    }
}

