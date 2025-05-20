let estoqueManha = ["maçã", "banana", "abacaxi", "laranja"];
let estoqueTarde = ["uva", "melancia", "banana", "kiwi"];

let estoqueCompleto = estoqueManha.concat(estoqueTarde); // concat vai juntar a primeira lista com a segunda

// Lista que terá os valores depois de passarem por uma filtração, garantindo que não há repetições dos valores.
let estoqueUnico = [];

// Loop que fará a filtração
for (let i = 0; i < estoqueCompleto.length; i++) {
    // Verifica se o item já existe no estoqueUnico antes de adicionar.
    if (!estoqueUnico.includes(estoqueCompleto[i])) { // Explicando essa linha, esse if está basicamente checando se a lista estoqueUnico não contém (o ponto de exclamação antes do estoqueUnico dá essa negação) o item da lista estoqueCompleto no/na index/posição i. **
        estoqueUnico.push(estoqueCompleto[i]);        // Vai adicionar o valor no final do array.
    }
}

// ** Vamos fazer uma passagem pelo array. Quando i = 0, o if vai checar se a lista estoqueUnico não contém estoqueCompleto[0], que seria "maçã". Já que não tem nada na lista estoqueUnico, esse valor é adicionado nessa lista. Agora, pra quando o valor "banana" se repetir, a lista estoqueUnico já terá um valor "banana" dentro dela, então não a adicionará na lista.

estoqueUnico.unshift("caju"); // Adicionará o item "caju" no início do array.
estoqueUnico.pop();           // Removerá o último item do array, nesse caso "kiwi".
// Esse bloco de código vai checar
if (estoqueUnico.includes("banana")) {
    for (let i = 0; i < estoqueUnico.length; i++) {
        if (estoqueUnico[i] === "banana") {
            estoqueUnico.splice(i, 1, "pera"); // Estrutura do .splice: array.splice(posição onde inicia as alterações, quantos itens serão alterados, o item que será alterado)
        }
    }
}
// PASSO EXTRA: Esse loop vai checar se a lista estoqueUnico contém "maçã". Se conter, o código vai criar um novo array, utilizando o .filter para adicionar valores ao novo array apenas se não forem iguais a "maçã".
for (let j = 0; j < estoqueUnico.length; j++) {
    if (estoqueUnico.includes("maçã")) {
        estoqueUnico = estoqueUnico.filter((fruta) => fruta !== "maçã");
    }
}


console.log(`----------------------------- \n Aqui está o estoque completo da Frutaria Benites neste lindo dia: \n [ ${estoqueUnico} ] \n-----------------------------`);

// Estou copiando todos os valores de um array para outro usando spread.
let estoqueCopia = [...estoqueUnico]; // o operador "..." se chama spread. Esse operador permite adicionar os elementos do array estoqueUnico dentro do estoqueCopia.
estoqueCopia.sort(); //.sort vai ordenar todas as strings do array em ordem alfabética. Se o array tivesse apenas números, os números estariam em ordem crescente. Se tiverem números e strings em um array e .sort for usado, os números aparecerão primeiro em ordem crescente e as strings em segundo em ordem alfabética.

// Removendo todos os itens da lista estoqueUnico.
for (let k = 0; k < estoqueUnico.length; k++) {
    delete estoqueUnico[k];
}

console.log("Último passo:");
console.log(estoqueUnico);
console.log(estoqueCopia);