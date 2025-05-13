// Repete enquanto o usuário não tiver idade minima ou
// Aceitar os termos




let idademinima = 0
let aceitoutermo = false

while(aceitoutermo == false || idademinima < 18){
    idademinima = Number(prompt("Qual a sua idade? "))
    let resposta = prompt("Aceita o termo? Sim ou Não" )
    if(resposta === "Sim") aceitoutermo = true
    else aceitoutermo = false
}
if(aceitoutermo === true && idademinima >= 18){
alert("Entrou no código")
}

alert("Você esta inscrito!")