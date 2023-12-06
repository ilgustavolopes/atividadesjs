//criando um numero aleatorio
let numero = Math.floor(Math.random() * 100);
console.log(numero);//escrevendo no console o numero sorteado para eu saber
//chances
let chances = 4;
document.getElementById("chances").innerHTML = "Chances: " + chances;//escrevendo as chances
//para encerrar o game depepois seleciono agora o meu input e botao e jogo eles em variaveis para depois travalos ao fim do jogo
let input = document.querySelector("#tentativa");//queryselector seleciona o elemento pelo # que é o id nesse caso
let button = document.querySelector("#bt");//querySelector é um seletor
//funcao de envio da minha tentativa
function submit(){
    //pegando o valor digitado pelo jogador
    let inNumberPlayer = document.getElementById("tentativa").value;
    //estruturas de condiçao
    if(isNaN(inNumberPlayer)){
        alert("Digite um numero");
    }else if(inNumberPlayer == ""){
        alert("Campo esta vazio");
    }else if(inNumberPlayer > numero){
        document.getElementById("coment").style.color = "red";
        document.getElementById("coment").innerHTML = "Valor é menor que o digitado❌";
        chances--;
        if(chances == 0){
            document.getElementById("coment").innerHTML = "";
            document.getElementById("chances").innerHTML = "Voce perdeu reinicie a pagina e tente novamente...🥺";
            input.disabled = true;
            button.disabled = true;
        }else{
            document.getElementById("chances").innerHTML = "Chances: " + chances;
        }
    }else if(inNumberPlayer < numero){
        document.getElementById("coment").style.color = "red";
        document.getElementById("coment").innerHTML = "Valor é maior que o digitado❌";
        chances--;
        if(chances == 0){
            document.getElementById("coment").innerHTML = "";
            document.getElementById("chances").innerHTML = "Voce perdeu reinicie a pagina e tente novamente...🥺";
            input.disabled = true;
            button.disabled = true;
        }else{
            document.getElementById("chances").innerHTML = "Chances: " + chances;
        }
    }else{
        document.getElementById("coment").style.color = "green";
        document.getElementById("coment").innerHTML = "Vôce acertou o número sorteado parabéns🎉🎉🎉";
        document.getElementById("chances").innerHTML = "para jogar novamente reinicie a pagina";
        input.disabled = true;
        button.disabled = true;
    }
}
