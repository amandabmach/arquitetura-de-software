//Definição da classe contato
class Contato {
    constructor(nome, telefone, email) {
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
    }
}

// Interface que define os métodos para gerenciar contatos
class GerenciadorInterface {
    adicionarContato(contato) { }
    removerContato(nome) { }
    listarContatos() { }
}

// Classe que implementa a interface GerenciadorInterface
class GerenciadorContatos extends GerenciadorInterface {

    constructor() {
        super();
        this.contatos = [];
    }

    adicionarContato(contato) {
        this.contatos.push(contato);
        console.log(`Contato ${contato.nome} adicionado.`);
    }

    removerContato(nome) {
        const index = this.contatos.findIndex(contato => contato.nome === nome);
        if (index !== -1) {
            this.contatos.splice(index, 1);
            console.log(`Contato ${nome} removido.`);
        } else {
            console.log(`Contato ${nome} não encontrado.`);
        }
    }

    listarContatos() {
        console.log("Lista de Contatos:");
        this.contatos.forEach(contato => {
            console.log(`${contato.nome} - ${contato.telefone} - ${contato.email}`);
        });
    }
}

// Classe que define uma nova operação de alteração de contatos
class NovasOperacoes {
    alterarContatos() { }
}

// Classe que estende a classe NovasOperacoes e implementa a funcionalidade de alterar um contato
class GerenciadorExtensao extends NovasOperacoes {

    constructor(gerenciador) {
        super();
        this.gerenciador = gerenciador;
    }

    alterarContato(nomeAntigo, novoContato) {
        const index = this.gerenciador.contatos.findIndex(contato => contato.nome === nomeAntigo);
        if (index !== -1) {
            this.gerenciador.contatos[index] = novoContato;
            console.log(`Contato ${nomeAntigo} alterado.`);
        } else {
            console.log(`Contato ${nomeAntigo} não encontrado.`);
        }
    }
}

// Classe que adapta a interface GerenciadorInterface para incluir a operação de alteração de contatos
// Padrão de projeto: Adapter 
class AdaptadorOperacoes extends GerenciadorInterface {

    constructor(gerenciador, gerenciadorExtensao) {
        super();
        this.gerenciador = gerenciador;
        this.gerenciadorExtensao = gerenciadorExtensao;
    }

    adicionarContato(contato) {
        this.gerenciador.adicionarContato(contato);
    }

    removerContato(nome) {
        this.gerenciador.removerContato(nome);
    }

    listarContatos() {
        this.gerenciador.listarContatos();
    }

    alterarContato(nomeAntigo, novoContato) {
        this.gerenciadorExtensao.alterarContato(nomeAntigo, novoContato);
    }
}

// Classe que define uma estratégia de busca de contatos
// Padrão de projeto: Strategy
class BuscaContatos {
    constructor(estrategia) {
        this.estrategia = estrategia;
    }
    // Método que executa a busca de acordo com a estratégia definida
    executarBusca(nome, listaContatos) {
        return this.estrategia.buscar(nome, listaContatos);
    }
}

// Classe que implementa uma estratégia de busca por nome
// Padrão de projeto: Strategy
class BuscaPorNome {
    buscar(nome, listaContatos) {
        return listaContatos.filter(contato => contato.nome.toLowerCase().includes(nome.toLowerCase()));
    }
}
//'readline' é uma interface para ler dados, uma linha de cada vez.
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let gerenciador = new GerenciadorContatos();
let gerenciadorExtensao = new GerenciadorExtensao(gerenciador);
let adaptador = new AdaptadorOperacoes(gerenciador, gerenciadorExtensao);


//CLI para manipulação do sistema
function iniciarCLI() {
    rl.question('Escolha uma opção: 1. Adicionar contato, 2. Remover contato, 3. Listar contatos, 4. Alterar contato, 5. Buscar contato, 6. Sair\n', (opcao) => {
        switch (opcao) {
            case '1':
                rl.question('Digite o nome, telefone e email do contato separados por vírgula:\n', (resposta) => {
                    let [nome, telefone, email] = resposta.split(',');
                    let contato = new Contato(nome.trim(), telefone.trim(), email.trim());
                    adaptador.adicionarContato(contato);
                    iniciarCLI();
                });
                break;
            case '2':
                rl.question('Digite o nome do contato que deseja remover:\n', (nome) => {
                    adaptador.removerContato(nome.trim());
                    iniciarCLI();
                });
                break;
            case '3':
                adaptador.listarContatos();
                iniciarCLI();
                break;
            case '4':
                rl.question('Digite o nome do contato que deseja alterar e os novos dados separados por vírgula, ou seja, (nome antigo, nome, telefone e email):\n', (resposta) => {
                    let [nomeAntigo, nome, telefone, email] = resposta.split(',');
                    let novoContato = new Contato(nome.trim(), telefone.trim(), email.trim());
                    adaptador.alterarContato(nomeAntigo.trim(), novoContato);
                    iniciarCLI();
                });
                break;
            case '5':
                rl.question('Digite o nome do contato que deseja buscar:\n', (nome) => {
                    let busca = new BuscaContatos(new BuscaPorNome());
                    let resultado = busca.executarBusca(nome.trim(), gerenciador.contatos);
                    console.log("Resultado da busca:");
                    resultado.forEach(contato => {
                        console.log(`${contato.nome} - ${contato.telefone} - ${contato.email}`);
                    });
                    iniciarCLI();
                });
                break;
            case '6':
                rl.close();
                break;
            default:
                console.log('Opção inválida. Tente novamente.');
                iniciarCLI();
        }
    });
}

iniciarCLI();
