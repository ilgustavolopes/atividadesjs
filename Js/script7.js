var palavra = prompt("Digite uma palavra: ");//para fazermos um palindromo

var palavra_invertida = palavra.split("");//separar letra por letra em um vetor

palavra_invertida = palavra_invertida.reverse("");//inverter elas

palavra_invertida = palavra_invertida.join('');//juntalas dnovo

alert("Palavra: " + palavra + "\nInvertida: " + palavra_invertida);//escrevo a palavra invertida e a não invertida