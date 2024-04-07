class Funcionario {

    constructor(nome, salario) {
        this.nome= nome;
        this.salario = salario;
    }

    getName(){
        return this.nome;
    }
    
    getSalario() {
        return this.salario;
    }

}

class Departamento {

    constructor(name) {
        this.name = name;
        this.funcionarios = [];
        this.departamentos = [];
    }
    
    addFuncionario(f) {
        this.funcionarios.push(f);
    }
    
    removeFuncionario(f) {
        const index = this.employees.indexOf(f);
        if (index !== -1) {
          this.funcionarios.splice(index, 1);
        }
    }

    addDepartamento(dep) {
        this.departamentos.push(dep);
    }
    
    removeDepartamento(dep) {
        const index = this.departamentos.indexOf(dep);
        if (index !== -1) {
            this.departamentos.splice(index, 1);
        }
    }

    getSalario() {
        let totalSalario = 0;
        for (const funcionarios of this.funcionarios) {
            totalSalario += funcionarios.getSalario();
        }
        for (const departamentos of this.departamentos) {
            totalSalario += departamentos.getSalario();
        }
        return totalSalario;
    }
    
}

const joao = new Funcionario("João Silva", 5000);
const maria = new Funcionario("Maria Oliveira", 6000);

const departamentoEngenharia = new Departamento("Engenharia");
departamentoEngenharia.addFuncionario(joao);
departamentoEngenharia.addFuncionario(maria);

const departamentoVendas = new Departamento("Vendas");
const pedro = new Funcionario("Pedro Santos", 5500);
departamentoVendas.addFuncionario(pedro);

const sedeDepartamento = new Departamento("Sede");
sedeDepartamento.addDepartamento(departamentoEngenharia);
sedeDepartamento.removeDepartamento(departamentoVendas);

console.log("Salário total da organização:", sedeDepartamento.getSalario());