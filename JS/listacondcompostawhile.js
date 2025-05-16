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
