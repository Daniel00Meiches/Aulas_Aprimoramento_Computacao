console.log("Bem vindo à Frutaria Benites!")

const frutaria = {
    FRUTA1: {
        nome: "Maçã",
        preco_reais: 18,
        disponivel: true,
        estoque: 60
    },
    FRUTA2: {
        nome: "Banana",
        preco_reais: 8,
        disponivel: false,
        estoque: 0
    },
    FRUTA3: {
        nome: "Uva",
        preco_reais: 10,
        disponivel: true,
        estoque: 30,
    }
};

// Imprimindo informações sobre o nome e o preço em reais de cada fruta
console.log(frutaria.FRUTA1.nome);
console.log(frutaria.FRUTA1.preco_reais);

console.log(frutaria.FRUTA2.nome);
console.log(frutaria.FRUTA2.preco_reais);

console.log(frutaria.FRUTA3.nome);
console.log(frutaria.FRUTA3.preco_reais);

// Mudando valores no dicionário FRUTA2
frutaria.FRUTA2.disponivel = true;
frutaria.FRUTA2.estoque = 20;

// Removendo e adicionando novamente a chave estoque do dicionário FRUTA3
delete frutaria.FRUTA3.estoque;
frutaria.FRUTA3.estoque = 30;

// Adiciona uma nova chava para todos os dicionários
frutaria.FRUTA1.categoria = "fresca";
frutaria.FRUTA2.categoria = "fresca";
frutaria.FRUTA3.categoria = "fresca";

// Função que dará um resumo de uma fruta
function resumoFruta(fruta) {
    console.log(`A fruta ${fruta.nome} custa R$${fruta.preco_reais} por quilo e temos ${fruta.estoque}kg disponíveis.`);
}

// Resumo das frutas
resumoFruta(frutaria.FRUTA1);

resumoFruta(frutaria.FRUTA2);

resumoFruta(frutaria.FRUTA3);