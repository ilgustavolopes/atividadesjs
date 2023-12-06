//localstorage
function obterListaDeStars(){
    return localStorage.getItem('stars') || [];
}
function salvarListaDeStars(lista){
    localStorage.setItem('stars',JSON.stringify(lista));
}

let lista = obterListaDeStars();//minha list recebe o localstorage


function actionStars() {
    //let lista = obterListaDeStars();//minha list recebe o localstorage
    var numeroLinhas = parseInt(document.getElementById("numberLine").value);
    var linhas = [];//criou um vetor de linhas
    linhas.length = numeroLinhas;//ele recebe o tamanho do numero de linhas que foi dado

    var estrelaincremento = "⭐";
    var estrelas = "⭐";

    for(var vassoura = 0; vassoura < linhas.length; vassoura++){
        linhas[vassoura] = estrelas;
        estrelas = estrelas + estrelaincremento;
    }
    
    document.getElementById("resultado").innerHTML = linhas.join("<br>");
}
var x = linhas.join("<br>");
lista.push(x);
salvarListaDeStars(lista);

function actionLS(){
    console.log(lista);
    var p = document.createElement("p");
    p.style.color = "white";
    p.textContent = lista;
    var ele = document.getElementById("resultado2");
    ele.appendChild(p);
}