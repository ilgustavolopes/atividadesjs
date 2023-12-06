function actionStars() {
    var numeroLinhas = document.getElementById("numberLine").value;
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