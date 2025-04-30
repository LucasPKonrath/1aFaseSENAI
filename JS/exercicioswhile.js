function gerarCaracterAleartorio(){
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const numeroaleartorio = Math.floor(Math.random() * caracteres.length);

    return caracteres.charAt(numeroaleartorio);
}


function mostrar(){
    let quantidade = Number(prompt("Informe quantos caracteres sua senha deve ter - de 1 a 10"))

    if(quantidade == 1){
        alert("Senha: " + gerarCaracterAleartorio())
    } else if(quantidade == 2){
        alert("Senha: " + gerarCaracterAleartorio() + gerarCaracterAleartorio())
    }else if(quantidade == 3){
        alert("Senha: " + gerarCaracterAleartorio() + gerarCaracterAleartorio()
        + gerarCaracterAleartorio())
    }else if(quantidade == 4){
        alert("Senha: " + gerarCaracterAleartorio() + gerarCaracterAleartorio()
        + gerarCaracterAleartorio() + gerarCaracterAleartorio())
    }else if(quantidade == 5){
        alert("Senha: " + gerarCaracterAleartorio() + gerarCaracterAleartorio()
        + gerarCaracterAleartorio() + gerarCaracterAleartorio() + gerarCaracterAleartorio())
    }
    
    function gerarCaracterAleartorio(){
        const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const numeroaleartorio = Math.floor(Math.random() * caracteres.length);
    
        return caracteres.charAt(numeroaleartorio);
    }
    
    
    function mostrar(){
        let quantidade = Number(prompt("Informe quantos caracteres sua senha deve ter - de 1 a 10"))
        let senha = ''
        while(quantidade > 0){
        senha = senha + gerarCaracterAleartorio()
        quantidade = quantidade - 1
    }
    alert("A senha é: " + senha)
}

}
