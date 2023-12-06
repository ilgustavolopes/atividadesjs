function parimpar(){
    var value = document.getElementById("digite").value;//.value = retorna ou escreve o valor de uma caixa de texto input

    if(isNaN(value)){
        alert("Não é um numero");
    }else if(value == ""){
        alert("Digite algum numero")
    }else if(value % 2 == 0){
        document.getElementById("result").innerHTML = "O valor " + value + " é Par";//.innerHTML =(segundo w3s ele define ou retorna o conteudo html de um elemento) manipula o conteudo do html(pega ou muda)
    }else if(value % 2 != 0){
        document.getElementById("result").innerHTML = "O valor " + value + " é Impar";
    }
}