function submit(){
    let nome = document.getElementById("nome").value;
    let idade = parseInt(document.getElementById("idade").value);
    let nomeTracejado;

    nomeTracejado = nome.replace(/[A-Za-z]/g,"-");

    document.getElementById("nomeR").innerHTML = "Nome:" + nome + "<br>Nome Formatado:" + nomeTracejado;

    if(idade < 13){
        document.getElementById("categoria").innerHTML = "Categoria: Infantil";
    }else if(idade < 19){
        document.getElementById("categoria").innerHTML = "Categoria: Juvenil";
    }else if(idade > 18){
        document.getElementById("categoria").innerHTML = "Categoria: Adulto";
    }

}