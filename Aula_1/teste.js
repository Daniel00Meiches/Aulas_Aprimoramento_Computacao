//Definição das variáveis com as notas dos dois alunos ao longo de dois semestres
//Os nomes dos alunos também são definidos
var A = [4.0, 5.0];
var B = [9.0, 4.0];
var alunos = ["Skit", "Katz"];

//Lita onde estará a soma das notas dos dois alunos
var sum = [0, 0];

//Loop que fará a soma das notas dos dois alunos
for (let i = 0; i < A.length; i++){
    sum[i] = A[i] + B[i];
}

//Loop que vai printar a soma das notas dos alunos no console
for (let i = 0; i < alunos.length; i++){
    console.log("A soma das notas do", alunos[i], "foi", sum[i]);
}