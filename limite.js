let tentativa = 1
let senha = "alex1234"
let senhadigitada = ''

while(senhadigitada !== senha && tentativa <= 3){
    senhadigitada = prompt("Digite sua senha: ")
    tentativa++
}

for(let tentativas = 1; tentativas <= 3 && senhadigitada !== senha; tentativas ++){
    senhadigitada = prompt("Digite sua senha: ")
}

if(senhadigitada !== senha){
    alert("Conta bloqueada!")
} else{
    alert("Logado!")
}