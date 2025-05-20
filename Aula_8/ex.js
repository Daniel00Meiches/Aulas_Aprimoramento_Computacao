// Pilhas/Piles
// push() = adiciona um elemento ao topo da pilha, empilhando-o sobre os outros elementos existentes
// pop() = remove o elemento do topo da pilha, retornando-o e diminuindo o tamanho da pilha em um elemento
// peek() = retorna o elemento no topo da pilha, sem removê-lo, permitindo visualizar o último elemento adicionado
// isEmpty() = retorna true se a pilha estiver vazia e false se houver elementos na pilha
// ------------------------------------------------------------------------------------------------------------------
// Filas/Queues !!
// enqueue() = adiciona um elemento ao final da fila
// dequeue() = remove o elemento do início da fila, retornando-o e atualizando a fila
// peek() = retorna o elemento no início da fila, sem removê-lo, permitindo visualizar o próximo elemento
// isEmpty() = retorna true se a fila estiver vazia e false se houver elementos na fila
// ------------------------------------------------------------------------------------------------------------------

//Pilha:

// Classe Pilha
class Pilha {
    constructor() {
      this.itens = [];
    }
  
    empilhar(item) {
      this.itens.push(item); // Adiciona um elemento ao topo da pilha
      console.log(`✔️ Elemento '${item}' empilhado.`);
    }
  
    desempilhar() {
      if (this.estaVazia()) {
        console.log('⚠️ A pilha está vazia. Nada a desempilhar.');
        return null;
      }
      const removido = this.itens.pop();
      console.log(`❌ Elemento '${removido}' desempilhado.`);
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
      console.log('📦 Pilha atual:', this.itens.slice().reverse().join(' <- topo'));
    }
  }

  // Demonstração

  const pilha = new Pilha();

  // Vai adicionar os elementos Livro A, Livro B, Livro C e Livro D na pilha
  pilha.empilhar("Livro A");
  pilha.empilhar("Livro B");
  pilha.empilhar("Livro C");
  pilha.empilhar("Livro D");

  pilha.imprimir(); // Saída: Livro D, Livro C, Livro B, Livro A

  pilha.desempilhar(); // Elemento Livro D foi removido da pilha

  console.log(`Topo da pilha: ${pilha.topo()}`); // Saída -> Topo da pilha: Livro C
  console.log(`Tamanho: ${pilha.tamanho()}`); // Saída -> Tamanho: 3

  pilha.limpar(); // A pilha é esvaziada aqui
  pilha.imprimir(); // Saída:

// ------------------------------------------------------------------------------------------------------------------

//Fila

// Classe Fila (FIFO)
class Fila {
    constructor() {
      this.itens = [];
    }
  
    // Adiciona um item ao final da fila
    enfileirar(item) {
      this.itens.push(item);
      console.log(`📥 '${item}' entrou na fila.`);
    }
  
    // Remove o item do início da fila
    desenfileirar() {
      if (this.estaVazia()) {
        console.log('⚠️ A fila está vazia. Nenhum item para remover.');
        return null;
      }
      const removido = this.itens.shift();
      console.log(`🚪 '${removido}' saiu da fila.`);
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
      console.log('🚶‍♂️ Fila atual:', this.itens.join(' -> ') || 'vazia');
    }
  }
  
  // Demonstração

  const fila = new Fila();

  // Elementos Aluno 1, Aluno 2, Aluno 3, Aluno 4, Aluno 5
  fila.enfileirar('Aluno 1');
  fila.enfileirar('Aluno 2');
  fila.enfileirar('Aluno 3');
  fila.enfileirar('Aluno 4');
  fila.enfileirar('Aluno 5');

  fila.imprimir(); // Saída: Aluno 1, Aluno 2, Aluno 3, Aluno 4, Aluno 5

  fila.desenfileirar(); // Aluno 1 é removido da fila

  console.log(`Primeiro da fila: ${fila.frente()}`); // Saída -> Primeiro da fila: Aluno 2

  console.log(`Tamanho da fila: ${fila.tamanho()}`); // Saída -> Tamanho da fila: 4

  fila.limpar(); // Remove todos os elementos da fila
  fila.imprimir(); // Saída: