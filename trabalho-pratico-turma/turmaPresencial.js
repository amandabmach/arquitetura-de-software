import { Turma } from "./Turma.js";

class TurmaPresencial extends Turma {
    #frequencia 

    constructor(codigo, nota, frequencia){
        super(codigo, nota);
        this.#frequencia = frequencia
    }

    get frequencia () { return this.#frequencia }

    aprovado(){
        if(this.nota >= 6.0 && this.#frequencia >= 75){
            return true;
        } else {
            return false;
        }
    }
}
export { TurmaPresencial } 
