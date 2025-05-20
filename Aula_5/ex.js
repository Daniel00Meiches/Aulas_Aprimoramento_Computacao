class Mauri {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

imprimirInfo() {
    console.log(`Nome: ${this.nome}, Idade: ${this.idade}`);
}

}

let info = new Mauri("Mauri", 18);

info.imprimirInfo();

// Herança
class Aluno extends Mauri {
    constructor(nome, idade, curso) {
        super(nome, idade);
        this.curso = curso;
    }

    imprimirCurso() {
        console.log(`${this.nome} está matriculado no curso de ${this.curso}`);
    }
}

let ninfo = new Aluno("Mauri", 18, "ADM Tech");

ninfo.imprimirCurso();