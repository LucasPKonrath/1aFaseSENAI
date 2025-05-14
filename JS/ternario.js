//Peça ao usuário sua idade e se ele tem carteira de motorista
//Exiba "Pode dirigir" se for maior de 18 e tiver carteira

let idade = 0
let temcnh = false
while(idade < 18 || !temcnh){
    idade = Number(prompt("Digite sua idade: "))
    temcnh = prompt("Tem cnh? Sim ou Não") == "Sim" ? true : false
    if(idade >= 18 && temcnh) alert ("Você pode dirigir")
        else alert("Ainda não pode dirigir!")

}