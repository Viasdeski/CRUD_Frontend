class GerenciadorPessoa {
    constructor(){
        this.pessoas = [];
    }

    geraIDPessoa(){
        return Math.floor(Math.random() * 1000);
    }

    cadastrarPessoa(pessoa) {
        pessoa.id = this.geraIDPessoa();
        this.pessoas.push(pessoa);
    }

    atualizarPessoa(id, dadosAtaulizacao) {
        const pessoa = this.pessoas.find(p => p.id === id);
        if(pessoa){
            Object.assign(pessoa, dadosAtaulizacao)
        }
    }

    deletarPessoa(id) {
        const pessoa = this.pessoas.findIndex(p => p.id === id);
        if(pessoa !== -1) this.pessoas.splice(pessoa, 1);
    }

    listarPessoas(){
        return this.pessoas
    }
}


//TESTES REALIZADOS

gerenciador = new GerenciadorPessoa()

const pessoa1 = {'nome': 'Joao', 'idade': 33, 'cidade': 'Porto Alegre'}
const pessoa2 = {'nome': 'Ana', 'idade': 20, 'cidade': 'Roma'}

gerenciador.cadastrarPessoa(pessoa1)
gerenciador.cadastrarPessoa(pessoa2)

gerenciador.atualizarPessoa(pessoa1.id, {cidade:'Brasilia'})

gerenciador.deletarPessoa(pessoa2.id)

console.log(gerenciador.listarPessoas())




