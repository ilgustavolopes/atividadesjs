function submit(){
    //recebendo a senha (value da input) digitada na input
    var senha = document.getElementById("inSenha").value;
    //vetor de erros
    var erros = [];
    //condiçoes de validaçao
    if(senha.length < 8 || senha.length > 15){
        erros.push("Erro. A senha deve possuir entre 8 a 15 caracteres");
    }else if(senha.match(/[0-9]/g) == null){
        erros.push("Possuir numeros (no minimo, 1)");
    }else if(senha.match(/[a-z]/g) == null){
        erros.push("Possuir letras minusculas (no minimo, 1)");
    }else if(senha.match(/[A-Z]/g) == null){
        erros.push("Possuir letras maiusculas (no minimo, 1)");
    }
    //escrevendo se tem erro ou se validou
    if(erros.length == 0){
        document.getElementById("alerta").innerHTML = "ok. Senha válida";
    }else {
        document.getElementById("alerta").innerHTML = "Erro... A senha deve " + erros.join(", ");
    }
}