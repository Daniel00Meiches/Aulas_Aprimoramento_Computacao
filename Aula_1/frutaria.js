//Variáveis que contém os preços dos produtos da frutaria
var apple = 2.00;
var banana = 1.50;
var orange = 3.00;
var pear = 2.50;

var lol = "Não";

//Começo da histórinha
console.log("Caixa: Bem vindo à Frutaria Benites. Como posso te ajudar?");

console.log("Cliente: Obrigado! Vou querer 4 maçãs, 1 banana, 2 laranjas e 3 peras.");

//Calculando o total de cada produto
var totalA = 4 * apple;

var totalB = 1 * banana;

var totalO = 2 * orange;

var totalP = 3 * pear;

//A soma dos totais
var sum = totalA + totalB + totalO + totalP;

//Continuação da histórinha
console.log("Caixa: Ok, isso será R$", sum.toFixed(2) + ". Qual será a forma de pagamento?");

console.log("Cliente: Vocês aceitam pagamento em dinheiro? Eu esqueci o meu cartão...");

console.log("Caixa:", lol + ".");

console.log("Cliente: Pera, achei. Tava no meu bolso o tempo inteiro.");

console.log("Caixa: Obrigado! Aqui está o seu recibo.");

console.log("\n");

//Recibo
console.log("----------------------------" + "\n", 
    "Maçã: 2.00 x 4 = R$", totalA.toFixed(2) + "\n",
    "Banana: 1.50 x 1 = R$", totalB.toFixed(2) + "\n",
    "Laranja: 3.00 x 2 = R$", totalO.toFixed(2) + "\n",
    "Pera: 2.50 x 3 = R$", totalP.toFixed(2) + "\n" +
    "----------------------------"
);