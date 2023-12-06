function add(){
    let nome = prompt("Digite o nome do contato:");
    let email = prompt("Digite o email do contato:")

    let listCont = [];//minha lista de contatos
    
    elemento = document.createElement("li");//criando o meu nó (elemento)
    information = document.createTextNode("Nome:" + nome + ", Email: " + email);//adicionando inormaçoes de texto a ele

    elemento.appendChild(information);//add text ao meu elemento

    let ele = document.getElementById("demo");//identificando onde quero colocalo

    ele.appendChild(elemento);//colocando

    listCont.push(ele);//add na lista de contatos

}
//obs: inner html manipula