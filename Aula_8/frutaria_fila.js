class Fila {
    constructor() {
      this.itens = ["Maçã", "Melancia", "Abacaxi", "Morango"];
    }
  
    // Adiciona um item ao final da fila
    novoEstoque(item) {
      this.itens.push(item);
      console.log(`📥 '${item}' entrou na fila.`);
    }
  
    // Remove o item do início da fila
    comprar() {
      if (this.estaVazia()) {
        console.log('⚠️ Não há mais frutas no estoque da frutaria Benites.');
        return null;
      }
      const removido = this.itens.shift();
      console.log(`🚪 '${removido}' foi comprado por um cliente.`);
      return removido;
    }
  
    // Mostra o primeiro da fila
    frente() {
      return this.itens[0];
    }
  
    // Verifica se a fila está vazia
    estaVazia() {
      return this.itens.length === 0;
    }
  
    // Tamanho da fila
    tamanho() {
      return this.itens.length;
    }
  
    // Limpa a fila
    limpar() {
      this.itens = [];
      console.log('🧹 Fila esvaziada.');
    }
  
    // Imprime a fila atual
    imprimir() {
      console.log('🚶‍♂️ Fila atual de frutas:', this.itens.join(' -> ') || 'vazia');
    }
  }

  const FIFO = new Fila();

  FIFO.novoEstoque("Melão"); // Melão adicionado ao estoque
  FIFO.comprar(); // Um cliente comprou o melão

  console.log(`A fruta no topo da fila é: ${FIFO.frente()}`); // Mostra a fruta no topo da fila depois que o melão foi comprado

  FIFO.imprimir(); // As frutas restantes são exibidas