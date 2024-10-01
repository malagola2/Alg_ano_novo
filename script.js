/*Exemplo 01  - imprimindo cada linha sem loop

console.log(10)
console.log(9)
console.log(8)
console.log(7)
console.log(6)
console.log(5)
console.log(4)
console.log(3)
console.log(2)
console.log(1)
console.log("Feliz Ano Novo!")
*/

/*Exemplo 02 - imprimindo cada linha com loop while */

/*let contador = 10;

while (contador > 0) {
    console.log(contador);
    contador --;
}

console.log("Feliz Ano Novo!");*/

/*Exemplo 03 - Em ordem crescente imprimindo cada linha com loo while */

/*let contador = 0;

while (contador < 500 ) {
    console.log(contador);
    contador += 20;
}

console.log("Feliz Ano Novo!");*/

// Solicita um número ao usuário
let numeroInicial = parseInt(prompt("Digite um número para iniciar a contagem crescente de dois em dois: "));
// Verifica se o número é válido
if(!isNaN(numeroInicial) && numeroInicial >=0) {
    // Inicia a contagem
    let contador = numeroInicial;

    // Inicia a contagem crescente de dois em dois té 10
    while (contador <= 10) {
        console.log(contador);
        contador += 2; // Incrementa de dois em dois
}
// Imprime uma mensagem de finalização
console.log("Feliz Ano Novo!");
} else{
    //Imprime uma mensagem de erro
    console.log("Número inválido, Por favor, digite um número válido maior ou igual a 0.");
}

