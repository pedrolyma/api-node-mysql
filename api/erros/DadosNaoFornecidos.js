class DadosNaoFornecidos extends Error {
    constructor () {
        super('Não Foram Fornecidos Dados Para Atualizar')
        this.name = 'DadosNaoFornecidos'
        this.idErro = 2
    }
}

module.exports = DadosNaoFornecidos