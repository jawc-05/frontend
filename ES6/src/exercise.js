class Aluno {
    constructor(nome, nota) {
        this.nome = nome;
        this.nota = nota;
    }
}

const alunos = [
    new Aluno("João", 9.0),
    new Aluno("Alfredo", 9.5),
    new Aluno("Giordano", 5.5),
    new Aluno("Giuseppe", 4.5),
    new Aluno("Salman", 5.8),
    new Aluno("Caedyn", 5.9),
    new Aluno("Cecília", 6.0)
];

const getAproved = (alunos) => alunos.filter(aluno=> aluno.nota >= 6);
console.log("Alunos Aprovados: ", getAproved(alunos));

const getReproved = (alunos) => alunos.filter(aluno=> aluno.nota < 6);
console.log("Alunos Reprovados: ", getReproved(alunos));

