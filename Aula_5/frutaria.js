class frutaria {
    constructor(nome, tipo, preco) {
        this.nome = nome;
        this.tipo = tipo;
        this.preco = preco;
    }

    informacoes() {
        console.log(`Bem vindo à Frutaria Benites. Baseado nos dados que você nos forneceu, você está procurando algo com as seguintes especificações. \n Nome da fruta: ${this.nome} \n Tipo de fruta: ${this.tipo} \n Preço: R$ ${this.preco.toFixed(2)}`);
    }
}

let busca = new frutaria("Maçã", "pseudofruto", 10.50);

busca.informacoes();