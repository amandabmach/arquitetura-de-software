import { Aluno } from "./Aluno.js";
import { Turma } from "./Turma.js";
import { TurmaPresencial } from "./TurmaPresencial.js";

let aluno1 = new Aluno("João", "joao123", "123456");
let aluno2 = new Aluno("Maria", "maria456", "789012");
console.log(aluno1);
console.log(aluno2);

let turma = new Turma("C405", 10.0);
console.log(turma.codigo, turma.nota);
console.log(turma.aprovado())

let tpresencial = new TurmaPresencial("COD456", 5.5, 75);
console.log(tpresencial.aprovado());