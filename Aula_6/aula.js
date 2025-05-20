let frutas = ["maçã", "banana", "laranja"];

// Prints
console.log(frutas);    // Saída: [ 'maçã', 'banana', 'laranja' ]
console.log(frutas[0]); // Saída: maçã
console.log(frutas[1]); // Saída: banana
console.log(frutas[2]); // Saída: laranja


let fruits = ["maçã", "banana", "laranja"];
delete fruits[2];
fruits.push("melancia"); // colocar melancia no final
fruits.unshift("abacaxi"); // colocar abacaxi no começo da lista
fruits.pop(); // tirar o elemento final da lisa
// Prints
console.log(fruits);    // Saída: [ 'abacaxi' , 'maçã', 'banana', <1 empty item> ]
console.log(fruits[0]); // Saída: maçã
console.log(fruits[1]); // Saída: banana
console.log(fruits[2]); // Saída: undefined

fruits.push("kiwi");
fruits.push("caju");

// Loop que vai console.log todos os 5 elementos do meu array
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}