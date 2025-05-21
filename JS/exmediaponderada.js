function calcular(){
let nota1 = Number(document.getElementById("nota1").value)
let nota2 = Number(document.getElementById("nota2").value)
let nota3 = Number(document.getElementById("nota3").value)
let nota4 = Number(document.getElementById("nota4").value)
let peso1 = Number(document.getElementById("peso1").value)
let peso2 = Number(document.getElementById("peso2").value)
let peso3 = Number(document.getElementById("peso3").value)
let peso4 = Number(document.getElementById("peso4").value)
let resultadosoma =(nota1 * peso1) + (nota2 * peso2) +(nota3 * peso3) + (nota4 * peso4)
let resultadopeso = peso1 + peso2 + peso3 + peso4
let mediaponderada = resultadosoma / resultadopeso
let tagresultado = document.getElementById("resultado")
let tagresultadopeso = document.getElementById("peso")
let tagmediaponderada = document.getElementById("media")
tagmediaponderada.innerText = mediaponderada
tagresultadopeso.innerText = resultadopeso
tagresultado.innerText = resultadosoma
}

function calcularmedia(){
    let nota1 = Number(document.getElementById("nota_1").value)
    let nota2 = Number(document.getElementById("nota_2").value)
    let nota3 = Number(document.getElementById("nota_3").value)
    let nota4 = Number(document.getElementById("nota_4").value)
    let resultadosoma = nota1 + nota2 + nota3 + nota4
    let media = resultadosoma / 4
    let tagresultado = document.getElementById("resultado_")
    let tagmedia = document.getElementById("media_")
    tagresultado.innerText = resultadosoma
    tagmedia.innerText = media   
}
function calcularimc(){
    let nome = document.getElementById("nome").value
    let idade = Number(document.getElementById("idade").value)
    let sexo = document.getElementById("sexo").value
    let altura = Number(document.getElementById("altura").value)
    let peso = Number(document.getElementById("pesopessoa").value)
    let imc = peso / (altura**2)
    console.log(altura, peso, imc)
    let tagimc = document.getElementById("imc")
    tagimc.innerText = imc

}

