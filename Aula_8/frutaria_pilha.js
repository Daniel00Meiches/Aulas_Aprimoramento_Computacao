class Pilha {
    constructor() {
      this.itens = ["CPF", "Identidade", "Data de nascimento"]; // Dados do cliente
    }
  
    empilhar(item) {
      this.itens.push(item); // Adiciona um elemento ao topo da pilha
      console.log(`✔️ Documento '${item}' empilhado.`);
    }
  
    resolver() {
      if (this.estaVazia()) {
        console.log('⚠️ A pilha está vazia. Nada a desempilhar.');
        return null;
      }
      const removido = this.itens.pop();
      console.log(`❌ Documento '${removido}' resolvido.`);
      return removido;
    }
  
    topo() {
      if (this.estaVazia()) {
        return null;
      }
      return this.itens[this.itens.length - 1];
    }
  
    estaVazia() {
      return this.itens.length === 0;
    }
  
    tamanho() {
      return this.itens.length;
    }
  
    limpar() {
      this.itens = [];
      console.log('🧹 Pilha esvaziada.');
    }
  
    imprimir() {
      console.log('📦 Pilha atual:', this.itens.slice().reverse().join(' <- '));
    }
  }

const LIFO = new Pilha();

LIFO.empilhar("CNH");

LIFO.resolver();

console.log(`Documento no topo da pilha: ${LIFO.topo()}`);

LIFO.imprimir();
