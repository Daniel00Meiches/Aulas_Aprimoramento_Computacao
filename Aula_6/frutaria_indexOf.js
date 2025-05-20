let estoqueManha = ["maçã", "banana", "abacaxi", "laranja"];
let estoqueTarde = ["uva", "melancia", "banana", "kiwi"];

let estoqueCompleto = estoqueManha.concat(estoqueTarde);

let estoqueUnico = [];

// Essa versão do documento da frutaria usa o indexOf para remover duplicatas. Achei que seria bom incluir para aprender como usar o indexOf.
for (let i = 0; i < estoqueCompleto.length; i++) {
    if (estoqueUnico.indexOf(estoqueCompleto[i]) === -1) { // Primeiro vou explicar como o indexOf funciona para que eu aplique depois para este array. A função indexOf retorna o primeiro índice em que o elemento pode ser encontrado no array. Então, nesse caso, quando i = 3 (leva em conta que estoqueCompleto[3] = "laranja"), o estoqueCompleto.indexOf("laranja") vai retornar o valor de 3, já que no array estoqueCompleto o item "laranja" está no index 3. **
        estoqueUnico.push(estoqueCompleto[i]);             // se passar pelo if, o valor estoqueCompleto[i] será adicionado no final da lista estoqueUnico.
    }
}

// ** Agora, vamos supor que "laranja" não esteja no array estoqueUnico. Se eu fizer estoqueUnico.indexOf("laranja"), o valor retornado será -1. O -1 no indexOf é o valor retornado caso algum valor não tenha nenhuma instância no array que você está investigando (tldr: o -1 indica que aquele item não está na lista).
// Então, aplicando isso para esse if-statement, o if está checando se o estoqueUnico.indexOf de um valor estoqueCompleto[i] é igual a -1, ou seja, se o valor de estoqueCompleto[i] não está na lista. Se i = 1 (estoqueCompleto[1] = "banana"), estoqueUnico.indexOf("banana") === -1, porque o item "banana" não está no array estoqueUnico. Portanto, será adicionado ao array estoqueUnico.
// Porém, quando i = 6, o estoqueUnico.indexOf("banana") vai retornar 1, e já que 1 != -1, o item repetido "banana" não será adicionado ao array estoqueUnico.

estoqueUnico.unshift("caju");
estoqueUnico.pop();
if (estoqueUnico.includes("banana")) {
    for (let j = 0; j < estoqueUnico.length; j++) {
        if (estoqueUnico[j] === "banana") {
            estoqueUnico.splice(j, 1, "pera");
        }
    }
}

console.log(`----------------------------- \n Aqui está o estoque completo da Frutaria Benites neste lindo dia: \n [ ${estoqueUnico} ] \n-----------------------------`);

let estoqueCopia = [...estoqueUnico];
estoqueCopia.sort();

for (let k = 0; k < estoqueUnico.length; k++) {
    delete estoqueUnico[k];
}

console.log("Último passo:");
console.log(estoqueUnico);
console.log(estoqueCopia);