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

    listarPessoas(){
        return this.pessoas
    }
}


gerenciador = new GerenciadorPessoa()
gerenciador.cadastrarPessoa({'nome': 'Vitor', 'idade': 33, 'cidade': 'Czo'})
console.log(gerenciador.listarPessoas())