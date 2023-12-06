function limpaTela(){
    document.getElementById("resultado").textContent = "";
    document.getElementById("valor").value = "";
}
function limpa(){
    document.getElementById("resultado").textContent = "";
}
function submit(){
    limpa();
    let parcelas = [1,2,3,4,5,6,7,8,9,10];
    let valor = document.getElementById("valor").value;
    let valueParcelas = [];

    if(isNaN(valor)){
        alert("Você deve digitar um numero no campo");
    }else if(valor == ""){
        alert("Você deve digitar no campo (um valor)");
    }else{
        var x;
        for(let vassoura=0; vassoura<parcelas.length; vassoura++){
            if(parcelas[vassoura] == 10){
                x = (valor - (valor*0.10))/parcelas[vassoura];
                valueParcelas.push(x.toFixed(2));
                var ele = document.createElement("p");
                ele.innerHTML = parcelas[vassoura] + "x de R$: " + valueParcelas[vassoura];
                var lugar = document.getElementById("resultado");
                lugar.appendChild(ele);
            }else{
                x = valor/parcelas[vassoura];
                valueParcelas.push(x.toFixed(2));
                var ele = document.createElement("p");
                ele.innerHTML = parcelas[vassoura] + "x de R$: " + valueParcelas[vassoura];
                var lugar = document.getElementById("resultado");
                lugar.appendChild(ele);
            }
            
        }
        console.log(valueParcelas);
    }

}