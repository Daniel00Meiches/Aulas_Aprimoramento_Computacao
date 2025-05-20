// Listas ligadas!
// Array = lista estática (um item precisa estar do lado do outro na memória)
// Lista encadeada: é mais dinâmica. Um dado pode ser colocado em cada célula da memória e os dados da lista não precisam estar do lado do outro. Os dados podem estar em posições diferentes na memória
// Na lista encadeada tem valores e ponteiros
// Dados = valores
// Ponteiros = posição
// Head = posição inicial : Tail = posição final

const no1 = { valor: "A", proximo: null};

console.log(no1.valor); // Saída: A
console.log(no1.proximo); // Saída: null

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const no2 = { valor: "B", proximo: null};
const no3 = { valor: "C", proximo: null};

no2.proximo = no3; // <-- Isso vai apontar o no2 para o no3. Então se eu for fazer um console.log do valor próximo do no2, a saída seria C

console.log(no2.valor); // Saída: B
console.log(no2.proximo.valor); // Saída: C

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const no4 = {valor: "D", proximo: null};
const no5 = {valor: "E", proximo: null};
const no6 = {valor: "F", proximo: null};

no4.proximo = no5;
no5.proximo = no6;

console.log(no4.valor); // Saída: D
console.log(no4.proximo.valor); // Saída: E
console.log(no4.proximo.proximo.valor); // Saída: F

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const no7 = {valor: "G", proximo: null};
const no8 = {valor: "H", proximo: null};
const no9 = {valor: "I", proximo: null};

no7.proximo = no8;
no8.proximo = no9;

let atual = no7;
while (atual !== null) {      // Enquanto o valor atual não for igual a null, e depois o valor atual passará a ser o próximo valor
    console.log(atual.valor); // Será printado no console o valor atual
    atual = atual.proximo;    // Depois de printar o valor atual, o próximo valor será atribuido à variável "atual" e o loop vai repetir até que o valor atual seja null
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
