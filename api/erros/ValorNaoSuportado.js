class ValorNaoSuportado extends Error {
    constructor (contentType) {
        super(`O Tipo de Conteudo ${contentType} Não é Suportado`)
        this.name = 'ValorNaoSuportado'
        this.idErro = 3
    }
}

module.exports = ValorNaoSuportado