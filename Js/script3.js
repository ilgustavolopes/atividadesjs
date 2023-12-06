
function mostrarPromocao(){
    let nomeRemedio = document.getElementById("remedio").value;//peguei o valor do nome
    let precoRemedio = document.getElementById("preco").value;//peguei o valor do preco
    if(isNaN(precoRemedio)){
        alert("digite um numero");
        return;
    }

    //txt1
    let ele1 = document.createElement("p");//criei meu nó
    let info1 = document.createTextNode("Promoção de " + nomeRemedio);//criei a informaçao do meu nó

    ele1.appendChild(info1);//coloquei a informaçao no elemento

    let elemento1 = document.getElementById("form");//aonde irei colocalo
    elemento1.appendChild(ele1);//escrevi o ele1 no lugar do elemento1

    //txt2
    let promocao = (precoRemedio*2)-(precoRemedio*0.10);//minha logica de promocao
    let ele2 = document.createElement("p");
    let info2 = document.createTextNode("Leve 2 por apenas R$: " + promocao);

    ele2.appendChild(info2);

    let elemento2 = document.getElementById("form");
    elemento2.appendChild(ele2);






    
}