
function exibirNotas(){
    let valorTotal = document.getElementById("inValor").value;

    if(isNaN(valorTotal)){
        alert("digite um numero");
    }else if(valorTotal == ""){
         alert("Escreva um valor no campo");
    }else if(valorTotal == 10){
            document.getElementById("cem").innerHTML = "Notas de cem: 0";
            document.getElementById("cinquenta").innerHTML ="Notas de ciquenta: 0";
            document.getElementById("dez").innerHTML = "Notas de dez: 1";
    }else if(valorTotal == 50){
            document.getElementById("cem").innerHTML = "Notas de cem: 0";
            document.getElementById("cinquenta").innerHTML ="Notas de ciquenta: 1";
            document.getElementById("dez").innerHTML = "Notas de dez: 0";
    }else if(valorTotal == 100){
            document.getElementById("cem").innerHTML = "Notas de cem: 1";
            document.getElementById("cinquenta").innerHTML ="Notas de ciquenta: 0";
            document.getElementById("dez").innerHTML = "Notas de dez: 0";
    }else{
        let notasCem = Math.floor(valorTotal / 100);
        let valorTotal_2 = Math.floor( valorTotal % 100);
        let notasCinquenta = Math.floor(valorTotal_2 / 50);
        let valorTotal_3 = Math.floor(valorTotal_2 % 50);
        let notasDez = Math.floor(valorTotal_3 / 10);
        if((valorTotal_3 % 10) == 0 ){
            document.getElementById("cem").innerHTML = "Notas de cem: " + notasCem;
            document.getElementById("cinquenta").innerHTML ="Notas de ciquenta: " + notasCinquenta;
            document.getElementById("dez").innerHTML = "Notas de dez: " + notasDez;
        }else{
            alert("não temos notas disponiveis para o valor");
        }
    }
}