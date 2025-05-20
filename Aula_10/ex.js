// Dicionários

// Para criar um dicionário, você precisa criar uma variável
const aluno = {
    nome: "Mariana",        // nome é a chave, Mariana é o objeto
    idade: 16,              // idade é a chave, 16 é o objeto
    curso: "Front-end",     // curso é a chave, Front-end é o objeto
    ativo: true             // ativo é a chave, true é o objeto
};

aluno.idade = 17;
aluno.turma = "Back-end";

console.log(aluno.nome);    // Saída: Mariana
console.log(aluno.idade);   // Saída: 17
console.log(aluno.curso);   // Saída: Front-end
console.log(aluno.ativo);   // Saída: true

//------------------------------------------------------------------------------------------------------------------------------------------------

const curso = {
    nome: "Desenvolvimento Web",
    cargaHoraria: 40,
    // chave professor vai receber duas outras subchaves (vou chamá-las assim pra ser menos confuso) que pertencem a essa chave. Foi criado um outro dicionário dentro de um dicionário
    professor: {
        nome: "Cristiano",
        experiencia_em_anos: 10
    },
    alunos: ["Ariel", "Benjamin", "Mouadeb"]
}

console.log(curso.professor.nome); // Saída: Cristiano
console.log(curso.alunos[1]);

//------------------------------------------------------------------------------------------------------------------------------------------------

const meuPerfil = {
    nome: "Seu nome",
    idade: 0,
    hobbies: ["Exemplo 1", "Exemplo 2"],
    cidade: "Sua cidade",
    objetivo: "Aprender JS"
}

// Trocar o conteúdo das chaves
meuPerfil.cidade = "São Paulo";
meuPerfil.nome = "Tuhur";
meuPerfil.idade = 20;
meuPerfil.hobbies.push("Assassinato");
meuPerfil.hobbies[1] = "Tiro ao alvo";
meuPerfil.objetivo = "Matar o Ariel Natan";

// Imprime o dicionário inteiro
console.log(meuPerfil);

//------------------------------------------------------------------------------------------------------------------------------------------------

const livroFavorito = {
    titulo: "Campo Geral",
    autor: "João Guimarães Rosa",
    ano: 1964,
    jaLeu: true
}

function mostrarLivro(livro) {
    const leitura = livro.jaLeu ? "Já li" : "Ainda não li";
    console.log(`"${livro.titulo}", de ${livro.autor} (${livro.ano}) - ${leitura}`);
}

mostrarLivro(livroFavorito);