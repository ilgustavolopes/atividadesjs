
function limpaTela(){
    document.getElementById("resurtado").textContent = "";
    document.getElementById("tabu").value = "";
}
function limpa(){
    document.getElementById("resurtado").textContent = "";
}
function submit(){
    limpa();
    var multi = [0,1,2,3,4,5,6,7,8,9,10];
    var tabuadaResult = [];
    tabuadaResult.length = multi.length;
    var numeroTabu = document.getElementById("tabu").value;
    if(isNaN(numeroTabu)){
            alert("Você deve digitar um numero no campo");
    }else if(numeroTabu == ""){
            alert("Você deve digitar no campo (um numero)");
    }else{
            for(var vassoura=0; vassoura<multi.length; vassoura++){
                tabuadaResult[vassoura] = numeroTabu*multi[vassoura];
                console.log(numeroTabu + " x " + multi[vassoura] + " = " + tabuadaResult[vassoura]);
                var ele = document.createElement("p");
                ele.innerHTML = numeroTabu + " x " + multi[vassoura] + " = " + tabuadaResult[vassoura];
                var lugar = document.getElementById("resurtado");
                lugar.appendChild(ele);
                //document.getElementById("resurtado").innerHTML = numeroTabu + "x" + multi[vassoura] + "=" + tabuadaResult[vassoura];
            }
            //console.log(numeroTabu + "x" + multi[vassoura] + "=" + tabuadaResult[vassoura]);
            // for(var vassourinha=0; vassourinha<multi.length; vassourinha++){
            //     var escrita = [numeroTabu + "x" + multi[vassourinha] + "=" + tabuadaResult[vassourinha]];
            //     // document.getElementById("resurtado").innerHTML = "Tabuada:<br>" + numeroTabu + "x" + multi[vassourinha] + "=" + tabuadaResult[vassourinha];
            //     document.getElementById("resurtado").innerHTML = "Tabuada:<br>" + escrita.join("<br>");
            // }
        }
    }
