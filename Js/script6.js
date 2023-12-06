function gerador(){
    let fullname = document.getElementById("info").value;//preciso separar o sobrenome do nome e do segundo nome
    let vectorNames = fullname.split(' ');//divide um string em substrings(vou usar para separar o nome do sobrenome e do segundo nome)
    nome = vectorNames[0];//lucas
    dueName = vectorNames[1];//miguel
    sobreName = vectorNames[2];//da silva

    
        document.getElementById("geracao").textContent = "Citação Bibliografica: " + sobreName.toUpperCase() + ", " 
        + nome.charAt(0).toUpperCase() + ". " + dueName.charAt(0).toUpperCase();//(touppercase deixa maiusculo)(charat pega a primeira letra)
}