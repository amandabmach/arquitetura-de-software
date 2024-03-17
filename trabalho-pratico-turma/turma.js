class Turma {
    #codigo
    #nota

    constructor(codigo, nota){
        this.#codigo = codigo,
        this.#nota = nota
    }

    get codigo () { return this.#codigo };
    get nota () { return this.#nota };

    aprovado(){
        if(this.#nota >= 6.0){
            return true;
        } else {
            return false;
        }
    }
}
export { Turma };