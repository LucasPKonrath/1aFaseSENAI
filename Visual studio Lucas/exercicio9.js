/* Presente Secreto
Lista de exercícios 4
História:
Você entrou em um jogo de presente secreto. Se você tirou "Carlos", você deve
comprar um livro. Se tirou "Ana", um chocolate. Qualquer outro nome, um
presente surpresa!
Desafio:
let nomeSorteado;
Resultado esperado:
"Compre um livro 📚"
"Compre um chocolate 🍫"
"Compre um presente surpresa � */

let nomeSorteado = prompt("Digite um nome:")

if(nomeSorteado == "Carlos"){
    console.log("Compre um livro!")}

else if(nomeSorteado == "Ana"){
        console.log("Compre um chocolate!")}
    
else console.log("Compre um presente surpresa!")