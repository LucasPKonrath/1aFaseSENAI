function exercicio1(){
    //     Exercícios JavaScript com prompt e alert
    // 1. Exercício 1 - Saudação Personalizada
    // Solicite ao usuário que digite seu nome usando prompt .
    // Exiba uma saudação personalizada no formato: "Olá, [nome]! Seja bemvindo!" usando alert .
    nome = prompt("Digite seu Nome: ")
    alert (`Olá ${nome}! Seja Bem Vindo!`)
    }function exercicio2(){
    // Exercício 2 - Calculadora de Soma
    // Peça ao usuário para inserir dois números (você pode usar prompt para
    // pegar os valores como strings e depois convertê-los para números com
    // Number ).
    // Mostre o resultado da soma desses dois números usando alert .
    let n1, n2, soma
    
        n1 = Number(prompt("Pimeiro Número: "))
        n2 = Number(prompt("Segundo Número: "))
        //n1 = Number(n1)
        //n2 = Number(n2)
        soma = n1 + n2
    
        alert("A soma de "+n1 +" e de " +n2+" é igual a: " + soma)
    }function exercicio3(){
    //     Exercício 3 - Conversão de Temperatura (Celsius para Fahrenheit)
    // Solicite ao usuário que insira uma temperatura em Celsius.
    // Converta essa temperatura para Fahrenheit (F = C × 9/5 + 32).
    // Exiba o resultado em uma mensagem de alert .
    grausCelsius = Number(prompt("Qual a temperatura em Celsius? "))
    fahrenheit = (grausCelsius * 9/5) + 32
    alert (`A temperatura em Fahrenheit é ${fahrenheit}`)
    }function exercicio4(){
    //     Exercício 4 - Verificar se um número é par ou ímpar
    // Solicite ao usuário que insira um número.
    // Verifique se o número é par ou ímpar e exiba uma mensagem
    // correspondente usando alert .
    numero = Number(prompt("Digite um número: "))
    if (numero % 2 === 0){
        alert(`O número ${numero} é par`)
     } else alert(`O número ${numero} é ímpar`)
    }function exercicio5(){
    //     Exercício 5 - Calcular a média de três notas
    // Peça ao usuário para inserir três notas de um aluno.
    // Calcule a média das notas e exiba o resultado em um alert .
    nota1 = Number(prompt("Digite a primeira nota:"))
    nota2 = Number(prompt("Digite a segunda nota:"))
    nota3 = Number(prompt("Digite a terceira nota:"))
    media = (nota1 + nota2 + nota3) / 3
    alert (`A sua média é ${media}`)
    }function exercicio6(){
    //     Exercício 6 - Calculadora de IMC
    // Solicite ao usuário que insira seu peso e altura.
    // Calcule o Índice de Massa Corporal (IMC) utilizando a fórmula: IMC = peso
    // / (altura²).
    // Lista de exercícios HTML-JS 1
    // Exiba o resultado em um alert e classifique o IMC de acordo com os
    // valores:
    // Menos de 18,5: Abaixo do peso
    // Entre 18,5 e 24,9: Peso normal
    // Entre 25 e 29,9: Sobrepeso
    // 30 ou mais: Obesidade
    peso = Number(prompt("Digite seu peso:"))
    altura = Number(prompt("Digite sua altura:"))
    imc = peso / (altura**2)
    alert (`Seu imc é ${imc}` )
    if (imc <18.6){
        alert("Você está abaixo do peso!")
    }else if (imc >18.5 && imc <25){
        alert("Peso normal!")
    }else if (imc >24.9 && imc <30){
        alert("Sobrepeso!")
    }else if(imc > 29.9){
        alert("Obesidade!")
    }
    
    }function exercicio8(){
    //     8. Exercício 8 - Verificar ano bissexto
    // Solicite ao usuário que insira um ano.
    // Verifique se o ano é bissexto (um ano é bissexto se for divisível por 4, mas
    // não por 100, exceto se for divisível por 400) e exiba uma mensagem com o
    // resultado em alert .
    ano = prompt("Digite um ano: ")
    if (ano % 4 === 0 && ano % 100 !== 0){
    alert("bissexto" + 1)
    
    } else if (ano % 400 === 0) {
        alert("bissexto" + 2)
    
    } else alert("Não é bissexto")
    
    }function exercicioNomeHeroi(){
        let nome = prompt ("Digite seu nome, para saber o nome de super herói! ")
        let min = 1
        let max = 4
        let numeroaleartorio = Math.floor(Math.random() * (max - min) + min)

        // Math.cell() -> Arredonda pra cima 
        // Math.floor() -> Arredonda pra baixo
        // Math.round() -> Arredonda pro mais próximo 

        let frase1 = "Capitão América"
        let frase2 = "Homem de Ferro"
        let frase3 = "Homem Aranha"

        if(numeroaleartorio === 1){
            alert(nome + frase1)
        }
        else if(numeroaleartorio === 2){
            alert(nome + frase2)
        }else if(numeroaleartorio === 3){
            alert(nome + frase3)
        }
    }