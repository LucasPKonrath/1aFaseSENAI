// Login até nome "admin" e senha "1234" corretos!

let usuario = "admin"
let senha = "1234"  
usuariodigitado = ''
senhadigitada = ''
tentativas = 1
while((usuario !== usuariodigitado || senha !== senhadigitada) && tentativas <= 3){
    usuario = prompt("Digite seu usuário")
    senhadigitada = prompt("Digite sua senha: ")
    tentativas ++
}   
if(senhadigitada == senha){
    alert("Você está logado!")
}else alert("Bloqueado!")
