function saudacao(nome) {
    return `Olá ${nome}`;
}

console.log(saudacao("Cristiano")); // Saída: Olá Cristiano

// ---------------------------------------------------------------------------------

function cumprimentar(nombre) {
    return `Olá, ${nombre}!`;
}

console.log(cumprimentar("Mauri")); // Saída: Olá, Mauri!

// ---------------------------------------------------------------------------------

function cortejar(nobe = "Skit") {
    return `Bem vindo, ${nobe}`;
}

console.log(cortejar());        // Saída: Bem vindo, Skit
console.log(cortejar("Ariel")); // Saída: Bem vindo, Ariel

// ---------------------------------------------------------------------------------

function soma(a, b) {
    return a + b;
}

console.log(soma(60, 9)); // Saída: 69

// ---------------------------------------------------------------------------------

function subtrair(a, b, c) {
    return (a + b) - c;
}

console.log(subtrair(9, 5, 4)); // Saída: 10

// ---------------------------------------------------------------------------------

const multiplicar = (a, b) => a * b;

console.log(multiplicar(4, 2)); // Saída: 8

// ---------------------------------------------------------------------------------

function executarOperacao(a, b, operacao) {
    return operacao(a, b);
}

const divide = (a, b) => a / b;
const multiplica = (a, b) => a * b;

console.log(executarOperacao(10, 2, divide));
console.log(executarOperacao(10, 2, multiplica));

// ---------------------------------------------------------------------------------

const nums = [1, 2, 3, 4, 5];

const quadrados = nums.map(num => num * num);

console.log(quadrados);

// ---------------------------------------------------------------------------------

const pessoa = {
    nome: "Wendell",
    falar: function() {
        console.log("Olá, meu nome é", this.nome);
    },
};

pessoa.falar(); // Saída: Olá, meu nome é Wendell

console.log(pessoa.nome); // Saída: Wendell