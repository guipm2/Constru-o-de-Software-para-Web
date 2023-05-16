// Expressões Condicionais - Exercícios de Fixação
// OBS: Os códigos foram modificados para aceitarem o input do usuário em vez dos valores pré-definidos.


 // Exercício 1

function iniciarScript(){
    
    // Exercício 1
    
    var numero = prompt("Insira um número: ");
    if (numero % 2 == 0){
        console.log("O número é" , numero,  "\n\nNúmero é par");
    } else{
        console.log("O número é" , numero,  "\n\nNumero é impar");
        }



    // Exercício 2

    var valor = prompt("Insira um número de 1 a 9: ");
    while(valor<1 || valor>9){
        var valor = prompt("O valor está fora da faixa permitida, favor insira novamente: ")
        } if(0<valor<10){
            console.log("O valor está na faixa permitida");
            }





    // Exercício 3

    var nome = prompt("Insira seu nome: ");
    var sexo = prompt("Insira seu sexo (M/F): ");
    while(sexo != "M" && sexo != "F" && sexo != "m" && sexo != "f"){
        var sexo = prompt("Valor errado, insira (M/F): ")
        }
    if(sexo == "M" || sexo == "m"){
        console.log("Ilmo Sr." , nome);
        } else if(sexo == "F" || sexo == "f"){
            console.log("Ilma Sra." , nome);
            }





    // Exercício 4

    var altura = prompt("Insira sua altura (Ex: 1.77 // Utilize o PONTO): "); 
    var sexo = prompt("Insira seu sexo (M/F): ");
    while(sexo != "M" && sexo != "F" && sexo != "m" && sexo != "f"){
        var sexo = prompt("Valor errado, insira (M/F): ")
        }
    if(sexo == "M" || sexo == "m"){
        var peso_medio = (72.7*altura) - 58
        console.log("Seu peso médio é:" , peso_medio);
        } else if(sexo == "F" || sexo == "f"){
            var peso_medio = (62.1*altura) - 44.7
            console.log("Seu peso médio é:" , peso_medio);
            }




    // Exercício 5

    var numero = prompt("Insira um número inteiro: ");
    var raiz_quadrada = Math.sqrt(numero);
    var raiz_arredondada = Math.floor(raiz_quadrada);
    if(raiz_quadrada === raiz_arredondada){
        console.log(numero + " é um quadrado perfeito.");
        } else {
            console.log(numero + " não é um quadrado perfeito.");
            }
    }

// Criado por Guilherme Miranda