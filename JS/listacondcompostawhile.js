// 1. Enquanto a senha digitada não for “abc123” e o número de tentativas for
// menor que 3, peça a senha novamente.
function exercicio1(){
    let tentativas = 0
    let senha = prompt("Digite sua senha: ")


    while(senha !== "abc123" && tentativas < 3){
       senha = prompt("Senha incorreta, tente novamente! ")
       tentativas++
    } 
    if(senha == "abc123"){
        alert("Você esta logado!")
        
    } else{
        alert("SENHA BLOQUEADA!")
    }
}
// 2. Enquanto o usuário não aceitar os termos ou tiver menos de 18 anos, continue perguntando.
function exercicio2(){
    let termos = prompt("Aceita os termos? Sim ou Não ")
    let idade = Number(prompt("Digite sua idade: "))

    while(termos === "Não" || idade < 18 ){
        termos = prompt("Aceita os termos? Sim ou Não ")
        idade = Number(prompt("Digite sua idade: "))
        alert("Você nao aceitou os termos ou tem menos de 18 anos!")
    }
    alert("Você aceitou os termos e tem mais de 18 anos!")
}

// 3. Solicite dois números até que ambos sejam pares.
function exercicio3(){
    let num1 = Number(prompt("Digite um número: "))
    let num2 = Number(prompt("Digite outro número: "))

    while(num1 % 2 !== 0 || num2 % 2 !== 0){
        alert("Os dois números digitados não são pares!")
        num1 = Number(prompt("Digite um número: "))
        num2 = Number(prompt("Digite outro número: "))
    }
        alert("Os dois números digitados são pares!")
}
// 4. Peça uma letra até que ela não seja “a” e não seja “b”.
function exercicio4(){
    let letra = prompt("Digite uma letra: ")
    while(letra !== "a" && letra !== "b"){
        alert("Continue digitando")
         letra = prompt("Digite uma letra: ")
    }
        alert("Voce digitou a letra a ou b e finalizou o sistema!")
}
// 5. Solicite um número até que ele esteja entre 10 e 20 ou seja igual a 50.
function exercicio5(){
    let numero = Number(prompt("Digite um número: "))
    while(numero < 10 || numero > 20 && numero !== 50){
        alert("Você errou!")
        numero = Number(prompt("Digite um número: "))
    }
}
// 6. Peça login e senha até que ambos estejam corretos.
function exercicio6(){
    let usuario = "Lucas"
    let senha = "Lucas2806"

    let user = prompt("Digite seu usuário: ")
    let pass = prompt("Digite sua senha: ")
    while(usuario !== user || senha !== pass){
        alert ("Usuário ou senha inválidos!")
        user = prompt("Digite seu usuário: ")
        pass = prompt("Digite sua senha: ")
    }
        alert("Você está logado!")
}
// 7. Pergunte se o usuário deseja continuar (“sim” ou “não”) enquanto a resposta não for “não”.
function exercicio7(){
    let continuar = prompt("Você deseja continuar? (Sim) ou (Não)")
    while(continuar !== "Não"){
        continuar = prompt("Você deseja continuar? (Sim) ou (Não)")
    }
}
// 8. Solicite dois valores. Continue pedindo até que um seja múltiplo de 3 e o outro maior que 10
function exercicio8(){
    let num1 = Number(prompt("Digite um número: "))
    let num2 = Number(prompt("Digite outro número: "))
    while((num1 % 3 !== 0 && num2 < 10) || (num1 < 10 && num2 %3 !== 0) ){
        num1 = Number(prompt("Digite um número: "))
        num2 = Number(prompt("Digite outro número: "))
    }
}
// 9 Enquanto o nome digitado não for "admin" ou a senha não for "321", continue pedindo login.
function exercicio9(){
    let usuario = "admin"
    let senha = "321"

    let user = prompt("Digite seu usuário: ")
    let pass = prompt("Digite sua senha: ")
    while(usuario !== user || senha !== pass ){
        alert("Continue tentando!")
    user = prompt("Digite seu usuário: ")
    pass = prompt("Digite sua senha: ")
    }
}
// 10. Enquanto não forem preenchidos nome e idade, continue solicitando.
function exercicio10(){
    let nome = prompt("Digite seu nome: ")
    let idade = prompt("Digite sua idade: ")
    console.log(nome)
    console.log(idade)
    while(nome.length == 0 || idade.length == 0){
        nome = prompt("Digite seu nome: ")
        idade = prompt("Digite sua idade: ")
    }   
}



