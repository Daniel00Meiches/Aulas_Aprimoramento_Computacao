const fruta1 = {valor: "Maçã", proximo: null};
const fruta2 = {valor: "Abacaxi", proximo: null};
const fruta3 = {valor: "Melancia", proximo: null};
const fruta4 = {valor: "Laranja", proximo: null};

fruta1.proximo = fruta2;
fruta2.proximo = fruta3;
fruta3.proximo = fruta4;

let atual = fruta1;
while (atual !== null) {
    console.log(atual.valor);
    atual = atual.proximo;
}

// Adição de 2 novas frutas

const fruta5 = {valor: "Pera", proximo: null};
const fruta6 = {valor: "Morango", proximo: null};

fruta4.proximo = fruta5;
fruta5.proximo = fruta6;

console.log("-----------------------");

atual = fruta1;
while (atual !== null) {
    console.log(atual.valor);
    atual = atual.proximo;
}

// Remover o abacaxi

console.log("-----------------------");

atual = fruta1;
while (atual !== null) {
  if (atual.proximo && atual.proximo.valor === "Abacaxi") {
    atual.proximo = atual.proximo.proximo; // Pula o item "Abacaxi"
    break;
  }
  atual = atual.proximo; // Já que atual.proximo = atual.proximo.proximo, o item "Abacaxi" vai ser pulado
}

atual = fruta1;
while (atual !== null) {
  console.log(atual.valor);
  atual = atual.proximo;
}

// Contar quantas frutas tem na lista

console.log("-----------------------");

let contador = 0;

atual = fruta1;
while (atual !== null) {
    contador++;
    atual = atual.proximo;
}

console.log("Quantidade de frutas na Frutaria Benites:", contador);

// Buscar por 2 frutas

console.log("-----------------------");

let achou1 = false;
const procurado = "Melancia";

atual = fruta1;
while (atual !== null) {
    if (atual.valor === procurado) {
        achou1 = true;
        break;
    }
  atual = atual.proximo;
}

let achou2 = false;
let procurado2 = "Pera";

atual = fruta1;
while (atual !== null) {
    if (atual.valor === procurado2) {
        achou2 = true;
        break;
    }
  atual = atual.proximo;
}

if (achou1) {
    console.log("Fruta encontrada:", procurado);
} else {
    console.log("Fruta não encontrada");
}

if (achou2) {
    console.log("Fruta encontrada:", procurado2);
} else {
    console.log("Fruta não encontrada");
}